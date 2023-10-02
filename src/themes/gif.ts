import { IPreferenceModule } from 'store/preferences/types'

export const theme: IPreferenceModule = {
  leftCircleStart: { color: '#ffffff', alpha: 1 },
  leftCircleEnd: { color: '#ffffff', alpha: 1 },
  rightCircleStart: { color: '#32ffe1', alpha: 1 },
  rightCircleEnd: { color: '#22ffe1', alpha: 1 },
  circleBackground: { color: '#000000', alpha: 0.259 },
  cpuIcon: { color: '#ffffff', alpha: 1 },
  gpuIcon: { color: '#ffffff', alpha: 1 },
  temperatureIcon: { color: '#00e5ff', alpha: 1 },
  loadIcon: { color: '#ffffff', alpha: 1 },
  text: { color: '#ffffff', alpha: 1 },
  background: { color: '#8c00ff', alpha: 1 },
  separator: { color: '#ffffff', alpha: 0 },
  gif: {
    alpha: 0.627,
    size: 0.197,
    brightness: 0.496,
    blend: 'luminosity',
    contrast: 0.504,
    blur: 0,
    url: 'https://media3.giphy.com/media/VOfIuOxtaxfz1U5Z5n/giphy.mp4?cid=015e012dpzxswfgw436iycq6i3ldblsnr0z7l7nzk2md7zh2&ep=v1_gifs_search&rid=giphy.mp4&ct=g',
  },
}
