import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 25vh;
  color: black;
  backdrop-filter: blur(5px);
  display: grid;
  grid-template-columns: repeat(30% 1fr);
  padding: 3% 0% 3% 3%;
  .custom-link {
    text-decoration: none;
  }
  .title-gradient {
    width: fit-content;
    height: fit-content;
    
    /* Create the gradient. */
    background-image: linear-gradient(
    45deg,
    yellow 33%,
    white 33%,
    white 66%,
    grey 66%
    );

    /* Set the background size and repeat properties. */
    background-size: 100%;
    background-repeat: repeat;

    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text color rather than element bg. */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    animation: rainbow-text-simple-animation-rev 0.75s ease forwards;
  }

  .title-gradient:hover{
    animation: rainbow-text-simple-animation 0.5s ease-in forwards;
  }

  /* Move the background and make it smaller. */
  /* Animation shown when entering the page and after the hover animation. */
  @keyframes rainbow-text-simple-animation-rev {
    0% {
      background-size: 650%;
    }
    40% {
      background-size: 650%;
    }
    100% {
      background-size: 100%;
    }
  }

  /* Move the background and make it larger. */
  /* Animation shown when hovering over the text. */
  @keyframes rainbow-text-simple-animation {
    0% {
      background-size: 100%;
    }
    80% {
      background-size: 650%;
    }
    100% {
      background-size: 650%;
    }
  }
`;