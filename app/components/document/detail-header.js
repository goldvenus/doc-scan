import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { HeaderHeight, borderRadius } from '@theme/layout';
import GlobalStyle from '@theme/global-style';
import GlobalColors from '@theme/colors';
import FontStyle from '@theme/font';
import PropTypes from 'prop-types';
import { Icon } from '../icon';
import { paddingSize, fontSize } from '@theme/layout';
import whiteBackIcon from '@images/icons/ic_white_back.png';
export const DetailHeader = ({ title, docId, image, Back }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={Back} style={{ flex: 0.5 }}>
      <Icon imageUrl={whiteBackIcon} width={18} height={13} />
    </TouchableOpacity>
    <View>
      <Text style={[GlobalStyle.H2, styles.title]}>{title}</Text>
      <Text style={{ fontFamily: FontStyle.medium, fontSize: fontSize.smedium, opacity: 0.6, color: 'white' }}>{docId}</Text>
    </View>
    <Icon imageUrl={image} width={50} height={50} style={{ borderRadius: 25 }} />
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: HeaderHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: GlobalColors.primaryColor,
    borderBottomRightRadius: borderRadius.header,
    borderBottomLeftRadius: borderRadius.header,
    paddingHorizontal: paddingSize.screen,
    alignItems: 'center'
  },
  title: {
    color: 'white'
  }
});

DetailHeader.propTypes = {
  title: PropTypes.string,
  image: PropTypes.number.isRequired,
  docId: PropTypes.string,
  Back: PropTypes.func.isRequired
};

DetailHeader.defaultProps = {
  title: '',
  docId: ''
};
