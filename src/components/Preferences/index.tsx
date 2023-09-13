import React from 'react'

import { usePreferencesStore } from 'store/preferences'

import { IPreferenceModule, TModuleProperties } from 'store/preferences/types'

import {
  AiFillGithub as GitIcon,
  AiOutlineInstagram as InstagramIcon,
  AiOutlineYoutube as YoutubeIcon,
} from 'react-icons/ai'

import { Range } from './components/Range'

import { Container } from './styles'

const modules: { name: keyof IPreferenceModule; label: string }[][] = [
  [
    { name: 'leftCircleStart', label: 'Left circle (start)' },
    { name: 'leftCircleEnd', label: 'Left circle (end)' },
    { name: 'rightCircleStart', label: 'Right circle (start)' },
    { name: 'rightCircleEnd', label: 'Right circle (end)' },
    { name: 'circleBackground', label: 'Circle background' },
  ],
  [
    { name: 'cpuIcon', label: 'Cpu icon' },
    { name: 'gpuIcon', label: 'Gpu icon' },
    { name: 'tempetureIcon', label: 'Tempeture icon' },
    { name: 'loadIcon', label: 'Load icon' },
  ],
  [
    { name: 'text', label: 'Text' },
    { name: 'background', label: 'Background' },
    { name: 'separator', label: 'Separator' },
  ],
]

export const Preferences = () => {
  const preferencesStore = usePreferencesStore()

  const [debounce, setDebounce] = React.useState<number | undefined>()

  const notModified =
    JSON.stringify(preferencesStore.current) ===
    JSON.stringify(preferencesStore.themes[preferencesStore.lastUsedTheme])

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const theme = event.target.value
    preferencesStore.changeTheme(theme)
  }

  const handleModuleUpdate = (
    name: keyof IPreferenceModule,
    properties: TModuleProperties,
  ) => {
    clearTimeout(debounce)

    const debounceId = setTimeout(() => {
      preferencesStore.updateModule(name, properties)
    }, 200)

    setDebounce(debounceId)
  }

  const handleSaveChanges = () => {
    if (
      window.confirm(
        'Your user theme will be overwritten. Do you really want to do this?',
      )
    )
      preferencesStore.saveTheme()
  }

  const handleDiscardChanges = () => {
    if (window.confirm('Do you really want to do this?'))
      preferencesStore.discardChanges()
  }

  return (
    <Container>
      <div className="header">
        <div className="info">
          <div className="title">
            Dual Info <span>v1.0.1</span>
          </div>

          <div className="author">
            <span>
              by <i>Bruno Andrade</i>
            </span>

            <div className="author-social">
              <a title="github" target="_blank" href="https://github.com/brunoandradebr">
                <GitIcon size={22} />
              </a>

              <a
                title="instagram"
                target="_blank"
                href="https://www.instagram.com/brunoandradebr/"
              >
                <InstagramIcon size={22} />
              </a>

              <a
                title="youtube"
                target="_blank"
                href="https://www.youtube.com/channel/UCVnLOK7h2-zBRNtmZU8yxBQ"
              >
                <YoutubeIcon size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="panel">
          <select
            defaultValue={preferencesStore.lastUsedTheme}
            onChange={handleThemeChange}
          >
            <option value={'purple'}>Purple theme</option>
            <option value={'user'}>User theme</option>
          </select>

          <button onClick={handleSaveChanges}>Save</button>
          <button onClick={handleDiscardChanges} disabled={notModified}>
            Discard
          </button>
        </div>
      </div>

      <div className="modules">
        {modules.map((segment, index) => (
          <div className="module-segment" key={index}>
            <div className="module-segmentLabel">
              {index === 0 ? 'Circles' : index === 1 ? 'Icons' : 'Misc'}
            </div>

            <div className="module-segmentList">
              {segment.map(({ name, label }) => (
                <div className="module" key={name}>
                  <label htmlFor={name}>{label}</label>
                  <input
                    id={name}
                    name={name}
                    type="color"
                    value={preferencesStore.current[name].color}
                    onChange={event =>
                      handleModuleUpdate(name, {
                        color: event.target.value,
                        alpha: preferencesStore.current[name].alpha,
                      })
                    }
                  />
                  <Range
                    label="alpha"
                    value={preferencesStore.current[name].alpha}
                    onChange={event =>
                      handleModuleUpdate(name, {
                        color: preferencesStore.current[name].color,
                        alpha: event.target.value as unknown as number,
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
