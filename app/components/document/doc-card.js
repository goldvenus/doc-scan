import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { normalizeSize, borderRadius, paddingSize, fontSize } from '@theme/layout';
import PropTypes from 'prop-types';
import { Icon } from '../icon';
import folderIcon from '@images/dashBoard/ic_folder.png';
import moreIcon from '@images/icons/ic_more.png';
import GlobalStyle from '@theme/global-style';

export const DocCard = ({ style, title, description }) => (
  <View style={[styles.container, style]}>
    <View style={styles.top}>
      <Icon imageUrl={folderIcon} width={43} height={33} />
      <Icon imageUrl={moreIcon} height={4.17} width={18} />
    </View>
    <Text style={[GlobalStyle.H3, { paddingTop: paddingSize.p_25 }]}>{title}</Text>
    <Text style={[GlobalStyle.description, { fontSize: fontSize.small }]}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: normalizeSize(220),
    height: normalizeSize(173),
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: paddingSize.dashCardPadding,
    paddingTop: paddingSize.p_25,
    borderRadius: borderRadius.extra,
    marginRight: paddingSize.dashCard,
    shadowOffset: {
      height: 3
    },
    shadowOpacity: 0.06,
    shadowRadius: 30,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

DocCard.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string
};

DocCard.defaultProps = {
  style: {},
  title: '',
  description: ''
};
