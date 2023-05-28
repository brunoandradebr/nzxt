import styled from 'styled-components'

export const Container = styled.div`
  svg {
    foreignObject {
      width: inherit;
      height: inherit;
    }

    circle {
      fill: transparent;
      stroke-linecap: round;
      transform-origin: center center;
      transition: all 0.5s;
    }

    .ring-thumb-left {
      circle {
        transform: rotate(180deg);
      }
      circle:last-of-type {
        transform: rotate(180deg) scaleY(-1);
      }
    }

    .ring-thumb-right {
      circle {
        transform: rotate(0deg);
      }
      circle:last-of-type {
        transform: rotate(0deg) scaleY(-1);
      }
    }
  }

  .ring-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: inherit;
    height: inherit;
  }
`
