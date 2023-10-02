import { usePreferencesStore } from 'store/preferences'
import { IModules } from 'store/preferences/types'

import { ColorPicker } from 'components/Preferences/components/ColorPicker'
import { Range } from 'components/Preferences/components/Range'

const modules: { name: keyof IModules; label: string }[] = [
  { name: 'text', label: 'Text' },
  { name: 'background', label: 'Background' },
  { name: 'separator', label: 'Separator' },
]

export const MiscModule = () => {
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
