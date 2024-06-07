import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI';
  font-size: 1.8rem;
  color: var(--text-primary-color);
  padding-inline: 10px;

  .modules {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    .module-segment {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--background-contrast-lighter-color);

      .module-segmentList {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .module-segmentLabel {
        user-select: none;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 5px;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
      }
    }

    .module {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-width: 160px;
      height: fit-content;
      padding: 10px;
      border: 1px solid var(--background-contrast-lighter-color);
      border-radius: 15px;
      transition: all 0.2s;

      :hover {
        background-color: var(--background-contrast-light-color);
        box-shadow: 0px 5px 25px 0px var(--background-contrast-dark-color);
        transform: translateY(-1px);
      }

      .selectContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-block: 10px;
        gap: 10px;
        width: 100%;

        .label {
          font-size: 1.2rem;
        }

        select {
          flex: 1;
        }
      }
    }
  }
`
