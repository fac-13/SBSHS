import { ButtonNext } from 'pure-react-carousel';

import styled from 'styled-components';

import 'pure-react-carousel/dist/react-carousel.es.css';

export default styled(ButtonNext)`
  color: ${props => props.theme.black};
  width: 5%;
  height: ${props => (props.type === 'causes' ? '80%' : '70%')};
  border: none;
  outline: none;
  position: absolute;
  right: 0;
  opacity: 0;
  z-index: 1;
  @media (min-width: 600px) {
    &:hover {
      background-color: ${props => props.theme.darkBlue};
      opacity: 0.2;
      font-weight: bold;
      font-size: 5em;
      color: black;
      height: 100vh;
      width: 8%;
    }
  }
`;
