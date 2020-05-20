import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from './icon';
import AppMocData from '@share/MocData';
import { normalizeSize } from '@constants/Layout';

export const DocSearch = ({ style, placeHolder }) => (
  <View style={{ flexDirection: 'row' }}>
    <TextInput
      style={[{
        backgroundColor: 'white',
        flex: 1
      }, style]}
      placeholder={placeHolder} />
    <Icon
      imageUrl={AppMocData.Icons.search}
      width={15}
      height={15}
      style={{
        position: 'absolute', top: normalizeSize(53), left: normalizeSize(40) }} />
  </View>
);

DocSearch.propTypes = {
  style: PropTypes.object,
  placeHolder: PropTypes.string
};

DocSearch.defaultProps = {
  style: {},
  placeHolder: ''
};
