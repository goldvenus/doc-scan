import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderHeight, borderRadius } from '@theme/layout';
import GlobalStyle from '@theme/global-style';
import GlobalColors from '@theme/colors';
import PropTypes from 'prop-types';

const Document = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={[GlobalStyle.H2, styles.title]}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: HeaderHeight,
    backgroundColor: GlobalColors.primaryColor,
    borderBottomRightRadius: borderRadius.header,
    borderBottomLeftRadius: borderRadius.header,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white'
  }
});

Document.propTypes = {
  title: PropTypes.string
};

Document.defaultProps = {
  title: '',
};
export default Document;
