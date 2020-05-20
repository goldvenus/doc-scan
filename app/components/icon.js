import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

export const Icon = ({ imageUrl, width, height, style }) => (
  <Image
    source={imageUrl}
    style={[{
      width,
      height
    }, style]} />
);

Icon.propTypes = {
  imageUrl: PropTypes.any.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object
};

Icon.defaultProps = {
  width: 28,
  height: 28,
  style: {}
};
