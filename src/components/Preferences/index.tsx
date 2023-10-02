import { Header } from './components/Header'

import { GifModule, CirclesModule, IconsModule, MiscModule } from './components/Modules'

import { Container } from './styles'

export const Preferences = () => {
  return (
    <Container>
      <Header />

      <div className="modules">
        <div className="module-segment">
          <div className="module-segmentLabel">GIF</div>
          <GifModule />
        </div>

        <div className="module-segment">
          <div className="module-segmentLabel">Circles</div>
          <CirclesModule />
        </div>

        <div className="module-segment">
          <div className="module-segmentLabel">Icons</div>
          <IconsModule />
        </div>

        <div className="module-segment">
          <div className="module-segmentLabel">Misc</div>
          <MiscModule />
        </div>
      </div>
    </Container>
  )
}
