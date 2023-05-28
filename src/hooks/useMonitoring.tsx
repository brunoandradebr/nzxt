import React from 'react'

import { MonitoringData } from '@nzxt/web-integrations-types/v1'
import { ICpu, IGpu, IRam } from './types'

export const useMonitoring = () => {
  const [cpu, setCpu] = React.useState<ICpu>()
  const [gpu, setGpu] = React.useState<IGpu>()
  const [ram, setRam] = React.useState<IRam>()

  React.useEffect(() => {
    window.nzxt = {
      v1: {
        onMonitoringDataUpdate: (data: MonitoringData) => {
          const { cpus, gpus, ram } = data

          const cpu = cpus.pop()
          const gpu = gpus.pop()

          setCpu({
            name: cpu?.name,
            load: Number(((cpu?.load ?? 1) * 100).toFixed(0)) ?? 0,
            tempeture: Number(cpu?.temperature?.toFixed(0)),
            maxTempeture: Number(cpu?.maxTemperature),
            frequency: Number(cpu?.frequency),
          })

          setGpu({
            name: gpu?.name,
            load: Number(((gpu?.load ?? 1) * 100).toFixed(0)) ?? 0,
            tempeture: Number(gpu?.temperature?.toFixed(0)),
            maxTempeture: Number(gpu?.maxTemperature),
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
