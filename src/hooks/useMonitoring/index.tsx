import React from 'react'

import { MonitoringData } from '@nzxt/web-integrations-types/v1'
import { ICpu, IGpu, IRam } from './types'

export const useMonitoring = () => {
  const [cpu, setCpu] = React.useState<ICpu>()
  const [gpu, setGpu] = React.useState<IGpu>()
  const [ram, setRam] = React.useState<IRam>()

  React.useEffect(() => {
    const nzxtDefaults = window.nzxt?.v1

    window.nzxt = {
      v1: {
        width: nzxtDefaults?.width ?? 0,
        height: nzxtDefaults?.height ?? 0,
        shape: nzxtDefaults?.shape ?? 'circle',
        targetFps: nzxtDefaults?.targetFps ?? 10,
        onMonitoringDataUpdate: (data: MonitoringData) => {
          const { cpus, gpus, ram } = data

          const cpu = cpus.pop()

          let gpu

          if (gpus.length > 1) {
            const [mainGpu] = gpus.filter(
              card => !card.name.includes('Graphics') && !card.name.includes('Display')
            )
            gpu = mainGpu
          } else {
            gpu = gpus.pop()
          }

          setCpu({
            name: cpu?.name,
            load: Number(((cpu?.load ?? 1) * 100).toFixed(0)) ?? 0,
            temperature: Number(cpu?.temperature?.toFixed(0)),
            maxTemperature: Number(cpu?.maxTemperature),
            frequency: Number(cpu?.frequency),
          })

          setGpu({
            name: gpu?.name,
            load: Number(((gpu?.load ?? 1) * 100).toFixed(0)) ?? 0,
            temperature: Number(gpu?.temperature?.toFixed(0)),
            maxTemperature: Number(gpu?.maxTemperature),
            frequency: Number(gpu?.frequency),
          })

          setRam({
            inUse: Math.round((ram.inUse ?? 1) / 1024),
            inUsePercent: Math.round(((ram.inUse ?? 1) / (ram.totalSize ?? 1)) * 100),
            totalSize: Math.round((ram.totalSize ?? 1) / 1024),
          })
        },
      },
    }
  }, [])

  return { cpu, gpu, ram }
}
