import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .input {
    input[type='color'] {
      position: relative;
      cursor: pointer;
      appearance: none;
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 50px;
      background-color: transparent;
    }

    input[type='color']::-webkit-color-swatch {
      border-radius: 10px;
      border: none;
    }
  }
`
