import { usePreferencesStore } from 'store/preferences'

import { IPreferenceModule } from 'store/preferences/types'

import {
  AiFillGithub as GitIcon,
  AiOutlineInstagram as InstagramIcon,
  AiOutlineYoutube as YoutubeIcon,
} from 'react-icons/ai'

import { Container } from './styles'

const modules = [
  { name: 'leftColor', label: 'Left circle' },
  { name: 'rightColor', label: 'Right circle' },
  { name: 'circleBackground', label: 'Circle background' },
  { name: 'cpuColor', label: 'Cpu icon' },
  { name: 'gpuColor', label: 'Gpu icon' },
  { name: 'tempetureColor', label: 'Tempeture icon' },
  { name: 'loadColor', label: 'Load icon' },
  { name: 'textColor', label: 'Text' },
  { name: 'backgroundColor', label: 'Background' },
]

export const Preferences = () => {
  const preferencesStore = usePreferencesStore()

  const handleRestoreDefault = () => {
    if (window.confirm('Do you really want to do this?')) preferencesStore.reset()
  }

  return (
    <Container>
      <div className="header">
        <div className="info">
          <div className="title">Dual Info</div>

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
          <button onClick={handleRestoreDefault}>Restore default</button>
        </div>
      </div>

      <div className="modules">
        {modules.map(({ name, label }) => (
          <div className="module" key={name}>
            <label htmlFor={name}>{label}</label>
            <input
              id={name}
              name={name}
              type="color"
              value={preferencesStore[name as keyof IPreferenceModule]}
              onChange={event =>
                preferencesStore.updateModule(
                  name as keyof IPreferenceModule,
                  event.target.value,
                )
              }
            />
          </div>
        ))}
      </div>
    </Container>
  )
}
