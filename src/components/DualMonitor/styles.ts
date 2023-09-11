import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 100%;

  .monitoring {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: inherit;
  }

  .info-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info-separator {
    height: 20%;
    width: 1px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }

  .info-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-bottom: 10px;

    span {
    }
  }

  .info-title {
    svg {
      font-size: 9vw;
    }
  }

  .info-container div:nth-child(2) div:nth-child(1) {
    color: #00e5ff;
  }

  .info-container div:nth-child(3) div:nth-child(1) {
    color: #00e5ff;
  }

  .info-data {
    display: flex;
    justify-content: center;
    font-size: 10vw;

    .info-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 5px;
      }
    }

    .info-icon.tempeture svg {
      font-size: 7vw;
    }
    .info-icon.load svg {
      font-size: 7vw;
    }

    .data {
      display: flex;
      align-items: baseline;
      min-width: 50px;

      span {
        font-size: 6vw;
      }
    }
  }
`
