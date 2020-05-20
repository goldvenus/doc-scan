import React from 'react';

import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { CardView } from '@components/dashBoard';
import { Icon } from '@components/icon';
import GlobalStyle from '@theme/global-style';
import GlobalColors from '@theme/colors';
import { paddingSize, borderRadius, normalizeSize, fontSize } from '@theme/layout';
import FontStyle from '@theme/font';

import NotificationIcon from '@images/icons/ic_notification.png';
import SearchIcon from '@images/icons/ic_search.png';
import FolderIcon from '@images/dashBoard/ic_folder.png';
import Card1 from '@images/dashBoard/card1.png';
import Card2 from '@images/dashBoard/card2.png';
import GridIconActive from '@images/icons/icon_grid_active.png';
import ListIcon from '@images/icons/icon_list.png';
import CircleIcon from '@images/icons/ic_checkcircle.png';
import KlarnaIcon from '@images/dashBoard/bild_klarna.png';
import PaypalIcon from '@images/dashBoard/bild_paypal.png';

function Home() {
  return (
      <View style={GlobalStyle.screenContainer}>
        <Header />
        <View style={styles.body}>
          <TopSection />
          <BottomSection />
        </View>
      </View>
  );
}

const Header = () => (
    <View style={styles.header}>
      <View>
        <Text style={GlobalStyle.description}>Ole Klaenfoth</Text>
        <Text style={GlobalStyle.title}>Dashboard</Text>
      </View>
      <View style={styles.icons}>
        <Icon imageUrl={SearchIcon} style={{ marginRight: 23 }} />
        <Icon imageUrl={NotificationIcon} />
      </View>
    </View>
);

const TopSection = () => (
    <ScrollView horizontal>
      <View style={styles.cardViews}>
        <CardView>
          <View style={styles.cardTextWrap}>
            <Image
                source={FolderIcon}
                style={{ width: 54, height: 42, opacity: 0.3 }} />
          </View>
          <View style={styles.cardTextWrap}>
            <Text style={GlobalStyle.H1}>
              Folders
            </Text>
            <Text style={[GlobalStyle.H4, { paddingTop: 10 }]}>
              231 documents
            </Text>
          </View>
        </CardView>
        <CardView>
          <View style={styles.cardTextWrap}>
            <Text style={GlobalStyle.H1}>
              Our
              {'\n'}
              Mission
            </Text>
            <Text style={[GlobalStyle.H4, { paddingTop: 10 }]}>
              Money in the bank and no paper in a pocket
            </Text>
          </View>
          <View style={{ justifyContent: 'flex-end', width: '100%', flexDirection: 'row' }}>
            <Image source={Card1} style={styles.cardImage} resizeMode="cover" />
          </View>
        </CardView>
        <CardView style={{ backgroundColor: GlobalColors.primaryColor }}>
          <View style={styles.cardTextWrap}>
            <Text style={[GlobalStyle.H1, { color: 'white' }]}>
              Add you
              {'\n'}
              portals
            </Text>
            <Text style={[GlobalStyle.H4, { paddingTop: 10, color: 'white' }]}>
              Connect portals and online shops
            </Text>
          </View>
          <View style={{ justifyContent: 'flex-end', width: '100%', flexDirection: 'row' }}>
            <Image source={Card2} style={styles.cardImage} resizeMode="cover" />
          </View>
        </CardView>
      </View>
    </ScrollView>
);

const BottomSection = () => (
    <View style={styles.dashbordBottom}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={GlobalStyle.H1}>
          Recent Documents
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon imageUrl={ListIcon} style={{ marginRight: 14 }} />
          <Icon imageUrl={GridIconActive} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: paddingSize.screen - 15 }}>
        <View>
          <Icon imageUrl={CircleIcon} width={12} height={12} />
          <View
              style={{
                backgroundColor: GlobalColors.lineColor,
                width: 2,
                flex: 1,
                opacity: 0.1,
                marginLeft: 5 }}
          />
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 14, paddingBottom: paddingSize.p_25 }}>
          <Text style={{
            fontSize: fontSize.xsmall,
            fontFamily: FontStyle.medium,
            marginBottom: paddingSize.dashCardPadding }}>
            vor 12 Minuten
          </Text>
          <View style={{ flexDirection: 'row', marginBottom: 13 }}>
            <View style={styles.bildStyle}>
              <Icon imageUrl={PaypalIcon} width={35} height={35} />
            </View>
            <View style={[styles.bildStyle, { marginHorizontal: 10 }]}>
              <Icon imageUrl={KlarnaIcon} width={35} height={35} style={{ resizeMode: 'contain' }} />
            </View>
            <View style={styles.bildStyle}>
              <Icon imageUrl={KlarnaIcon} width={35} height={35} style={{ resizeMode: 'contain' }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
              backgroundColor: GlobalColors.primaryColor,
              width: 10,
              height: 10,
              borderRadius: 4 }} />
            <Text style={{ fontSize: fontSize.xxsmall,
              opacity: 0.3,
              fontFamily: FontStyle.medium,
              paddingLeft: 7 }}>
              3 Rechnungen aus Email-Postfach
            </Text>
          </View>
        </View>
      </View>
    </View>
);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: paddingSize.screen,
    paddingTop: paddingSize.screenTop,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
  dashbordBottom: {
    backgroundColor: 'white',
    borderTopRightRadius: paddingSize.dashCardPadding,
    borderTopLeftRadius: paddingSize.dashCardPadding,
    paddingHorizontal: paddingSize.screen,
    paddingTop: paddingSize.p_25
  },
  bildStyle: {
    padding: paddingSize.p_25,
    backgroundColor: GlobalColors.greyColor,
    borderRadius: paddingSize.dashCardPadding
  },
  cardViews: {
    flexDirection: 'row',
    paddingLeft: paddingSize.screen,
    paddingTop: paddingSize.p_27
  },
  icons: {
    flexDirection: 'row',
  },
  cardTextWrap: {
    padding: paddingSize.dashCardPadding
  },
  cardImage: {
    height: normalizeSize(80),
    width: normalizeSize(120),
    borderBottomRightRadius: borderRadius.large
  }
});

export default Home;
