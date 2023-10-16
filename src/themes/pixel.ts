import { IPreferenceModule } from 'store/preferences/types'

export const theme: IPreferenceModule = {
  leftCircleStart: { color: '#ffffff', alpha: 1, size: 0.504 },
  leftCircleEnd: { color: '#ffffff', alpha: 1 },
  rightCircleStart: { color: '#ffffff', alpha: 1, size: 0.496 },
  rightCircleEnd: { color: '#ffffff', alpha: 1 },
  circleBackground: { color: '#000000', alpha: 0.259, size: 0.504 },
  cpuIcon: { color: '#ffffff', alpha: 1 },
  gpuIcon: { color: '#ffffff', alpha: 1 },
  temperatureIcon: { color: '#00e5ff', alpha: 1 },
  loadIcon: { color: '#ffffff', alpha: 1 },
  text: { color: '#ffffff', alpha: 1, size: 1, font: 'Pixelify Sans' },
  background: { color: '#8c00ff', alpha: 1 },
  separator: { color: '#ffffff', alpha: 0 },
  gif: {
    alpha: 0.697,
    size: 0.197,
    brightness: 0.496,
    blend: 'luminosity',
    contrast: 0.504,
    blur: 0,
    url: 'https://media4.giphy.com/media/3oEduUkR13701mndnO/giphy.mp4?cid=015e012due85f1yy8kwpl3qgrdwdt7sw71tq3jv3nf58ggwg&ep=v1_gifs_search&rid=giphy.mp4&ct=g',
  },
}
