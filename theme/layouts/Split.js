import React from 'react';
import styled from 'styled-components';
import { LogoBoxes } from '../../components';
import { Logo } from '../../components/logo';
import colors from '../colors';

const Root = styled.div([], {
  width: '100vw',
  height: '100vh',
  position: 'relative',
  backgroundColor: colors.slalom,
  color: 'white'
});

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Flex = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Half = styled.div`
  width: 50vw;
  text-align: ${props => (props.left ? 'left' : 'middle')};
  padding-left: ${props => (props.left ? '50px' : '0px')};
  padding: 15px;
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
`;

const Split = ({ children, reverse = false }) => {
  const [a, ...rest] = React.Children.toArray(children.props.children);

  return (
    <Root>
      <LogoContainer>
        <LogoBoxes inverted={true} />
      </LogoContainer>
      <Logo />
      <Flex>
        <Half>{reverse ? rest : a}</Half>
        <Half left>{reverse ? a : rest}</Half>
      </Flex>
    </Root>
  );
};

export default Split;
