import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 10px;

  .preview {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 150px;

    user-select: none;
    pointer-events: none;
    filter: contrast(0.2);

    svg {
      cursor: pointer;

      :hover {
        opacity: 0.6;
      }
    }

    .blendSelect {
      display: flex;
      flex-direction: column;
      width: 130px;

      span {
        font-size: 1.2rem;
      }
    }
  }

  &.--is-gifSet {
    .preview {
      user-select: initial;
      pointer-events: initial;
      filter: none;
    }
  }

  .search {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-x: auto;
    max-width: calc(100vw - 240px);

    .searchInput {
      position: absolute;
      z-index: 1;
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;

      input {
        padding: 10px 35px;
      }

      svg {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translate(0, -50%);
      }
    }

    .grid {
      margin-top: 50px;
      max-height: 230px;
    }
  }
`
