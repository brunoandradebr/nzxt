import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  color: #fff;
  padding: 20px 20px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.2);

    .title {
      font-size: 2.4rem;
      text-transform: uppercase;
    }
    .author {
      display: flex;
      flex-direction: column;
      align-content: center;
      gap: 10px;
      font-size: 1.4rem;

      span i {
        font-weight: normal;
        color: #b476ff;
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
  }

  .modules {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    .module {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 160px;
      padding: 10px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 15px;
      transition: all 0.2s;

      :hover {
        background-color: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.5);
        transform: translateY(-1px);
      }

      input {
        position: relative;
        cursor: pointer;
        appearance: none;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50px;
        background-color: transparent;
      }

      input::-webkit-color-swatch {
        border-radius: 10px;
        border: none;
      }
    }
  }

  .panel {
    margin-top: 20px;

    button {
      cursor: pointer;
      border: none;
      padding: 10px;
      border-radius: 8px;
      color: #fff;
      background-color: #6f12e1;
      transition: all 0.2s;

      :hover {
        background-color: #882df7;
      }
    }
  }
`
