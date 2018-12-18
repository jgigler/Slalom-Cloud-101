import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Center } from '../../components';
import colors from '../colors';

const Container = styled.div`
  display: flex;
  flex-direction: column
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: white;

  align-items: center;

  h1 {
    text-align: left;
  }

  h2 {
    color: grey;
    font-weight: 400;
    text-align: left;
  }
`;

const CenteredHalf = styled(Center)`
  flex-direction: column;
  height: 50vh;

  padding-left: 15vw;
`;

const BgContainer = styled.div`
  width: 55vw;
  height: 50vh;
  position: relative;
`;
const Overlay = styled.div`
  width: 55vw;
  height: 50vh;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  background-image: linear-gradient(
    to bottom right,
    ${colors.magenta},
    ${colors.slalom}
  );
`;
const Bg = styled.div`
  width: 55vw;
  height: 50vh;
  background-image: url('/images/clouds.jpg');
  background-position: center;
  background-size: cover;
  background-color: ${colors.slalom};
`;

export default function Main({ children }) {
  return (
    <Container>
      <CenteredHalf>{children}</CenteredHalf>
      <BgContainer>
        <Overlay />
        <Bg />
      </BgContainer>
    </Container>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired
};
