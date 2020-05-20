import React from 'react';
import { View, StyleSheet } from 'react-native';
import GlobalColors from '../../constants/Colors';
import { normalizeSize, paddingSize } from '../../constants/Layout';
import { Icon } from '../icon';
import AppMocData from '../../share/MocData';

export const DocToolBar = () => (
  <View style={styles.toolContainer}>
    <Icon imageUrl={AppMocData.Icons.checkCircle} />
    <Icon imageUrl={AppMocData.Icons.checkCircle} />
    <Icon imageUrl={AppMocData.Icons.checkCircle} />
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
