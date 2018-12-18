import React from 'react';
import styled, { css } from 'styled-components';
import { Logo } from '../../components/logo';
import { Center } from '../../components';
import colors from '../colors';

const Container = styled(Center)`
  height: 100vh;
  width: 100vw;

  position: relative;
  background-color: ${props => (props.inverted ? colors.slalom : 'white')};

  h1 {
    text-align: left;
  }

  h2 {
    color: grey;
    font-weight: 400;
    text-align: left;
  }

  ${props =>
    props.inverted &&
    css`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ul,
      li,
      p {
        color: white;
      }
    `};
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.9;
  background-image: linear-gradient(
    to bottom right,
    ${colors.slalom} 60%,
    ${colors.magenta}
  );
`;
const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('/images/clouds.jpg');
  background-position: center;
  background-size: cover;
`;

export default function Section({ children, inverted, ...rest }) {
  return (
    <Container inverted={inverted} {...rest}>
      <Logo />
      <div style={{ zIndex: 99 }}>{children}</div>
      <Bg />
      <Overlay />
    </Container>
  );
}
