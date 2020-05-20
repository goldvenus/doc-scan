import React from 'react';
import { View, StyleSheet } from 'react-native';
import GlobalColors from '@theme/colors';
import { normalizeSize, paddingSize } from '@theme/layout';
import { Icon } from '../icon';
import checkCircle from '@images/icons/ic_checkcircle.png';

export const DocToolBar = () => (
  <View style={styles.toolContainer}>
    <Icon imageUrl={checkCircle} />
    <Icon imageUrl={checkCircle} />
    <Icon imageUrl={checkCircle} />
  </View>
);

const styles = StyleSheet.create({
  toolContainer: {
    backgroundColor: GlobalColors.secondaryColor,
    width: normalizeSize(180),
    height: normalizeSize(57),
    paddingHorizontal: paddingSize.screen,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    alignItems: 'center',
    borderRadius: normalizeSize(35),
    alignSelf: 'center',
    flex: 1,
    bottom: 15
  }
});
