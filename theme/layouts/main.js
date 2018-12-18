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

const BlueBg = styled.div`
  width: 55vw;
  height: 50vh;
  background-color: ${colors.slalom};
`;

export default function Main({ children }) {
  return (
    <Container>
      <CenteredHalf>{children}</CenteredHalf>
      <BlueBg />
    </Container>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired
};
