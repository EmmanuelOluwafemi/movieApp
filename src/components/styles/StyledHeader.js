import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .logo {
      font-size: 2.2rem;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
    }

    .navLink {
      text-decoration: none;
      color: #fff;
      cursor: pointer;
      font-family: 'Abel', san-serif;

      :hover {
        color: red;
      }
    }

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;
