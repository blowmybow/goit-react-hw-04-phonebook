import React from 'react';
import { Container, MainBlock } from './Container.styled';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <Container>
      <MainBlock>{children}</MainBlock>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
