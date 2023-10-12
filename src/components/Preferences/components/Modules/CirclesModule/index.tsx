import { usePreferencesStore } from 'store/preferences'
import { IModules } from 'store/preferences/types'

import { ColorPicker } from 'components/Preferences/components/ColorPicker'
import { Range } from 'components/Preferences/components/Range'

const modules: { name: keyof IModules; label: string }[] = [
  { name: 'leftCircleStart', label: 'Left circle (start)' },
  { name: 'leftCircleEnd', label: 'Left circle (end)' },
  { name: 'rightCircleStart', label: 'Right circle (start)' },
  { name: 'rightCircleEnd', label: 'Right circle (end)' },
  { name: 'circleBackground', label: 'Circle background' },
]

export const CirclesModule = () => {
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

          {name !== 'leftCircleEnd' && name !== 'rightCircleEnd' && (
            <Range
              label="size"
              value={preferencesStore.current[name].size}
              onChange={value =>
                preferencesStore.updateModule(name, {
                  size: value,
                })
              }
            />
          )}

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
