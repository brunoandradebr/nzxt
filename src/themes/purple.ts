import { IPreferenceModule } from 'store/preferences/types'

export const theme: IPreferenceModule = {
  leftCircleStart: { color: '#8800ff', alpha: 1, size: 1 },
  leftCircleEnd: { color: '#4A157E', alpha: 1 },
  rightCircleStart: { color: '#00bbff', alpha: 1, size: 1 },
  rightCircleEnd: { color: '#005E80', alpha: 1 },
  circleBackground: { color: '#161616', alpha: 1, size: 1 },
  cpuIcon: { color: '#ffffff', alpha: 1 },
  gpuIcon: { color: '#ffffff', alpha: 1 },
  temperatureIcon: { color: '#00e5ff', alpha: 1 },
  loadIcon: { color: '#00e5ff', alpha: 1 },
  text: { color: '#ffffff', alpha: 1, size: 0.63, font: 'Segoe UI' },
  background: { color: '#000000', alpha: 1 },
  separator: { color: '#313131', alpha: 1 },
  cpuLabel: { color: '#ffffff', alpha: 1 },
  gpuLabel: { color: '#ffffff', alpha: 1 },
  gif: {
    alpha: 1,
    size: 0.2,
    brightness: 0.5,
    blend: 'normal',
    contrast: 0.5,
    blur: 0,
    url: '',
  },
}
