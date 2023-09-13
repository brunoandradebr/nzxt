import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  width: 100%;

  .input {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    input[type='range'] {
      appearance: none;
      height: 7px;
      border-radius: 5px;
      background-color: var(--background-contrast-lighter-color);
      background-repeat: no-repeat;
      background-image: linear-gradient(
        to right,
        var(--primary-color-hover) 50%,
        transparent 50%
      );
    }

    input[type='range']::-webkit-slider-thumb {
      appearance: none;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background: var(--background-contrast-color);
    }
  }
`
