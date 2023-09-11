import { Container } from './styles'

import { useMonitoring } from 'hooks/useMonitoring'
import { usePreferencesStore } from 'store/preferences'

import { FiCpu as CpuIcon } from 'react-icons/fi'
import { BsGpuCard as GpuIcon } from 'react-icons/bs'
import { FaTemperatureLow as TempIcon } from 'react-icons/fa'
import { VscPulse as LoadIcon } from 'react-icons/vsc'

import { Progress } from 'components/Progress'

export const DualMonitor = () => {
  const preferencesStore = usePreferencesStore()

  const { cpu, gpu } = useMonitoring()

  const Cpu = () => (
    <div className="info-container">
      <div className="info-title">
        <CpuIcon color={preferencesStore.cpuColor} />
        <span>{cpu?.name?.replace(/core/gi, '') ?? 'i9 11900K'}</span>
      </div>
      <div className="info-data">
        <div className="info-icon tempeture">
          <TempIcon color={preferencesStore.tempetureColor} />
        </div>
        <div className="data">{cpu?.tempeture ?? 42}°</div>
      </div>
      <div className="info-data">
        <div className="info-icon load">
          <LoadIcon color={preferencesStore.loadColor} />
        </div>
        <div className="data">
          {cpu?.load ?? 3}
          <span>%</span>
        </div>
      </div>
    </div>
  )

  const Gpu = () => (
    <div className="info-container">
      <div className="info-title">
        <GpuIcon color={preferencesStore.gpuColor} />
        <span>{gpu?.name?.replace(/nvidia geforce/gi, '') ?? 'RTX 3080 Ti'}</span>
      </div>
      <div className="info-data">
        <div className="info-icon tempeture">
          <TempIcon color={preferencesStore.tempetureColor} />
        </div>
        <div className="data">{gpu?.tempeture ?? 45}°</div>
      </div>
      <div className="info-data">
        <div className="info-icon load">
          <LoadIcon color={preferencesStore.loadColor} />
        </div>
        <div className="data">
          {gpu?.load ?? 12}
          <span>%</span>
        </div>
      </div>
    </div>
  )

  return (
    <Container style={{ backgroundColor: preferencesStore.backgroundColor }}>
      <Progress
        leftValue={cpu?.tempeture}
        rightValue={gpu?.tempeture}
        leftColor={preferencesStore.leftColor}
        rightColor={preferencesStore.rightColor}
        background={preferencesStore.circleBackground}
      >
        <div className="monitoring" style={{ color: preferencesStore.textColor }}>
          <Cpu />
          <div className="info-separator"></div>
          <Gpu />
        </div>
      </Progress>
    </Container>
  )
}
