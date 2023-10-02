import { usePreferencesStore } from 'store/preferences'
import { IModules } from 'store/preferences/types'

import { ColorPicker } from 'components/Preferences/components/ColorPicker'
import { Range } from 'components/Preferences/components/Range'

const modules: { name: keyof IModules; label: string }[] = [
  { name: 'cpuIcon', label: 'CPU' },
  { name: 'gpuIcon', label: 'GPU' },
  { name: 'temperatureIcon', label: 'Temperature' },
  { name: 'loadIcon', label: 'Load' },
]

export const IconsModule = () => {
  const preferencesStore = usePreferencesStore()

  return (
    <div className="module-segmentList">
      {modules.map(({ name, label }) => (
        <div className="module" key={name}>
          <ColorPicker
            label={label}
            value={preferencesStore.current[name].color}
            onChange={value =>
              preferencesStore.updateModule(name, {
                color: value,
              })
            }
          />
          <Range
            label="alpha"
            value={preferencesStore.current[name].alpha}
            onChange={value =>
              preferencesStore.updateModule(name, {
                alpha: value,
              })
            }
          />
        </div>
      ))}
    </div>
  )
}
