import { usePreferencesStore } from 'store/preferences'
import { IModules } from 'store/preferences/types'

import { ColorPicker } from 'components/Preferences/components/ColorPicker'
import { Range } from 'components/Preferences/components/Range'

const modules: { name: keyof IModules; label: string }[] = [
  { name: 'background', label: 'Background' },
  { name: 'separator', label: 'Separator' },
]

export const MiscModule = () => {
  const preferencesStore = usePreferencesStore()

  return (
    <div className="module-segmentList">
      <div className="module">
        <ColorPicker
          label={'Text'}
          value={preferencesStore.current.text.color}
          onChange={value =>
            preferencesStore.updateModule('text', {
              color: value,
            })
          }
        />

        <div className="selectContainer">
          <div className="label">Font</div>

          <select
            defaultValue={preferencesStore.current.text.font}
            onChange={event =>
              preferencesStore.updateModule('text', { font: event.target.value })
            }
          >
            <option value="Segoe UI">Segoe UI</option>
            <option value="Staatliches">Staatliches</option>
            <option value="DotGothic16">DotGothic16</option>
            <option value="Pixelify Sans">Pixelify Sans</option>
          </select>
        </div>

        <Range
          label="size"
          value={preferencesStore.current.text.size}
          onChange={value =>
            preferencesStore.updateModule('text', {
              size: value,
            })
          }
        />

        <Range
          label="alpha"
          value={preferencesStore.current.text.alpha}
          onChange={value =>
            preferencesStore.updateModule('text', {
              alpha: value,
            })
          }
        />
      </div>

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
