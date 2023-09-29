import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  color: var(--text-primary-color);
  padding-inline: 10px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding: 20px 20px;
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid var(--background-contrast-light-color);

    .title {
      font-size: 2.4rem;
      text-transform: uppercase;

      span {
        color: var(--text-secondary-color);
        font-size: 1.2rem;
      }
    }

    .author {
      display: flex;
      flex-direction: column;
      align-content: center;
      gap: 10px;
      font-size: 1.4rem;

      span i {
        font-weight: normal;
        color: var(--text-accent-color);
      }

      .author-social {
        display: flex;
        gap: 10px;
      }

      a {
        color: inherit;
      }
      a:hover {
        filter: opacity(0.5);
      }
    }

    .panel {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;

      select {
        color: var(--text-primary-color);
        background-color: var(--background-contrast-color);
        border: 2px solid var(--background-contrast-lighter-color);
        padding: 0px 10px;
        border-radius: 8px;
      }

      button {
        cursor: pointer;
        border: none;
        padding: 10px;
        border-radius: 8px;
        color: #fff;
        background-color: var(--primary-color);
        transition: all 0.2s;

        &:hover {
          background-color: var(--primary-color-hover);
        }

        &:disabled {
          cursor: initial;
          color: var(--background-contrast-color);
          background-color: var(--background-contrast-light-color);
        }
      }
    }
  }

  .modules {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    .module-segment {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
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
      min-width: 160px;
      padding: 10px;
      border: 1px solid var(--background-contrast-lighter-color);
      border-radius: 15px;
      transition: all 0.2s;

      :hover {
        background-color: var(--background-contrast-light-color);
        box-shadow: 0px 5px 25px 0px var(--background-contrast-dark-color);
        transform: translateY(-1px);
      }

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

    .gif-module {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .gif-selected {
    }

    .gif-search {
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow-x: auto;
      max-width: calc(100vw - 200px);

      .gif-searchInput {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      input {
        outline: none;
        padding: 5px;
        border-radius: 3px;
        color: var(--text-primary-color);
        background-color: var(--background-contrast-color);
        border: 1px solid var(--background-contrast-lighter-color);

        &::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
      }
    }
  }
`
