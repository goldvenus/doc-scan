import { StyleSheet } from 'react-native';
import { fontSize, normalizeSize } from './layout';
import GlobalColor from './colors';
import FontStyle from './font';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: GlobalColor.forgroundColor
  },
  title: {
    fontSize: fontSize.large,
    fontFamily: FontStyle.bold
  },
  description: {
    color: GlobalColor.titleDescription,
    fontFamily: FontStyle.medium,
    opacity: 0.3
  },
  H1: {
    fontSize: fontSize.medium,
    color: GlobalColor.primaryTextColor,
    fontFamily: FontStyle.bold,
    lineHeight: normalizeSize(27)
  },
  H2: {
    fontSize: fontSize.ssmedium,
    color: GlobalColor.primaryTextColor,
    fontFamily: FontStyle.bold,
    lineHeight: normalizeSize(27)
  },
  H3: {
    color: GlobalColor.primaryTextColor,
    fontSize: fontSize.ssmedium,
    fontFamily: FontStyle.heavy
  },
  H4: {
    color: GlobalColor.titleDescription,
    opacity: 0.3,
    fontSize: fontSize.xsmall,
    lineHeight: normalizeSize(16),
    fontFamily: FontStyle.regular
  }
});

export const buttonStyles = {
  lightOutline: {
    title: {
    },
    button: {
      borderWidth: 1,
    },
    container: {
    }
  },
  activeLightOutline: {
    title: {
    },
    button: {
    },
    container: {
    }
  },
};

export const elementStyles = {
  cardTabs: {
    container: {
      borderRadius: 0,
      borderWidth: 0,
      marginLeft: 4,
      marginRight: 4,
      marginTop: 4,
      marginBottom: 4,
      height: 28,
    },
    text: {
      fontFamily: 'Barlow-Regular',
      fontSize: 12,
      fontWeight: 'normal',
    },
    innerBorder: {
      width: 0,
    },
    button: {
    },
    selectedText: {
      fontWeight: 'bold',
    },
    selectedButton: {
      borderRadius: 4,
    }
  },
  listItem: {
    titleText: {
      fontFamily: 'Barlow-Regular',
      fontSize: 14,
    }
  },
};
