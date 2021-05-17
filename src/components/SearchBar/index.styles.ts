import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0 auto;
  ul:before {
    content: '';
  }
  ul {
    overflow: auto;
    background-color: white;
    max-width: 21.5vh;
    max-height: 25vh;
    list-style-type: none;
    text-align: left;
    margin-top: 10px;
    border-radius: 15px;
    padding: 0;
    border: 1px solid transparent;
  }
  li {
    height: 15px;
    font-size: small;
    color: black;
    padding: 10px 5px ;
    cursor: pointer;
  }

  li:hover{
    background: lightgray;
    text-decoration: underline;
  }
  
  input:focus-visible {
    outline: transparent;
  }
  
  button:hover, button:hover span{
    animation: button-animation-rev 0.65s ease-out forwards;
    color: #0a4234;
  }

  button:hover {
    box-shadow: 3px 2px 10px 1px rgba(0,0,0,0.15);
    transition: 0.5s;
  }

  @keyframes button-animation {
    0% {
      background-position: top right;
    }
    100% {
      background-position: top left;
    }
  }

  @keyframes button-animation-rev {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
`;

export const StyledInput = styled.input`
  height: 5vh;
  width: 20vh;
  border-radius: 15px;
  padding-left: 1em;
  border: transparent;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  padding: 0;
  height: 4vh;
  width: 10vh;
  margin-left: 5vh;
  border-radius: 5px;
  border: transparent;
  cursor: pointer;
  background-color: #6c36d8;

  /* Create the gradient. */
  background-image: 
      linear-gradient(
      45deg,
      #0a4234 50%,
      yellow 50%
  );

  /* Set the background size and repeat properties. */
  background-size: 270%;
  background-repeat: repeat;
  background-position: top right;

  animation: button-animation 0.65s 0.15s ease-out forwards;
`;

export const StyledListOfElements = styled.div`
  position: absolute;
  bottom: 25vh;
  span {
    color: black;
  }
  .span-title {
    color: yellow;
  }
`;