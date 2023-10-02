import styled from 'styled-components'

export const Container = styled.div`
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
  }
`
