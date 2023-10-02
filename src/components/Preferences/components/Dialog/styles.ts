import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;

  dialog {
    display: block;
    opacity: 0;
    visibility: hidden;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -25%);
    font-size: 1.8rem;
    color: var(--text-primary-color);
    min-width: 300px;
    border-radius: 8px;
    transition: all 0.3s, visibility 0s;
    background-color: transparent;
    border: 1px solid var(--background-contrast-dark-color);
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.12);

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--background-color);
      padding: 5px;
      padding-left: 15px;
      gap: 60px;
    }

    .dialog-headerTitle {
      display: flex;
      text-transform: capitalize;
    }

    .dialog-content {
      background-color: var(--background-contrast-light-color);
    }

    .dialog-panel {
      display: flex;
      gap: 10px;
      background-color: var(--background-contrast-light-color);
      border-top: 1px solid var(--background-contrast-light-color);
    }

    .dialog-content,
    .dialog-panel {
      padding: 15px;
    }
  }

  dialog[open] {
    opacity: 1;
    visibility: visible;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  dialog::backdrop {
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.5);
  }
`
