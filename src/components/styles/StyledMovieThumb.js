import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;

    :hover {
      opacity: 0.8;
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }

  .love {
    position: absolute;
    bottom: 30px;
    right: 30px;
    background: none;
    border: none;
    outline: none;

    i {
      color: rgba(255, 255, 255, .8);
      font-size: 2em;
      transition: all ease-in .3s;

      
    }
    .red {
      color: red;
    }
  }
`;
