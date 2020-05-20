import { Dimensions, Platform, PixelRatio } from 'react-native';

// const baseWidth = 375; // iPhone 8 Plus
const baseHeight = 812;
const { width, height } = Dimensions.get('window');
const scale = height / baseHeight;

export const normalizeSize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const window = { width, height };
export const spacingUnit = 16;
export const halfSpacingUnit = spacingUnit * 0.5;
export const quarterSpacingUnit = spacingUnit * 0.25;
export const iconSize = {
  small: 12,
  medium: 24,
  large: 36,
};
export const borderRadius = {
  small: 4,
  medium: 8,
  large: 12,
  extra: 20,
  header: normalizeSize(39)
};
export const HeaderHeight = normalizeSize(106);
export const tabBarHeight = normalizeSize(100);
export const fontSize = {
  xxxsmall: 8,
  xxsmall: 11,
  xsmall: 12,
  small: 14,
  smedium: 16,
  ssmedium: normalizeSize(22),
  medium: normalizeSize(24),
  large: normalizeSize(30),
  xlarge: normalizeSize(52),
  xxlarge: normalizeSize(84),
  xxxlarge: normalizeSize(92),
  // fix text render issues in Android
  xxxlargeOffset: Platform.OS === 'ios' ? 0 : normalizeSize(-14),
  xxlargeOffset: Platform.OS === 'ios' ? 0 : normalizeSize(-12),
  xlargeOffset: Platform.OS === 'ios' ? 0 : normalizeSize(-8),
  largeOffset: Platform.OS === 'ios' ? 0 : normalizeSize(-6),
};

export const paddingSize = {
  screen: normalizeSize(30),
  dashCard: normalizeSize(16),
  dashCardPadding: normalizeSize(20),
  screenTop: normalizeSize(55),
  p_25: normalizeSize(25),
  p_23: normalizeSize(23),
  p_27: normalizeSize(27),
  p_50: normalizeSize(50)
};
