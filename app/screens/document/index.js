/* eslint-disable max-len */
import React from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Header } from '../common';
import { DocCard } from '@components/document';
import { DocumentData, DocumentListData } from './dummyData';
import { DocSearch } from '@components/doc-search';
import FontStyle from '@theme/font';
import GlobalColors from '@theme/colors';
import GlobalStyle from '@theme/global-style';
import { paddingSize, fontSize, normalizeSize, borderRadius } from '@theme/layout';
import { Icon } from '@components/icon';
import arrowRightIcon from '@images/icons/ic_arrow_right.png';

const Document = ({ navigation }) => (
    <View style={GlobalStyle.screenContainer}>
        <Header title="Documents" />
        <View style={styles.body}>
            <DocSearch placeHolder="Search" style={styles.docSearch} />
            <ScrollView horizontal>
                <View style={{ flexDirection: 'row', paddingLeft: paddingSize.dashCardPadding }}>
                    {
                        DocumentData.map((item, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <DocCard title={item.title} description={item.description} key={`document_${index}`} />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
        <DocList navigation={navigation} />
    </View>
);

const DocList = ({ navigation }) => (
    <View style={styles.docList}>
        <View style={styles.textListItem}>
            <Text style={styles.activeListText}>Recent</Text>
            <Text style={styles.disableListText}>Sources</Text>
        </View>
        <FlatList
            data={DocumentListData}
            renderItem={({ item, index }) => <DocListItem imageUrl={item.imageUrl} title={item.title} id={item.id} no={index} navigation={navigation} />}
            keyExtractor={(item) => item.id}
        />
    </View>
);

const DocListItem = ({ imageUrl, title, id, no, navigation }) => (
    <TouchableOpacity
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: paddingSize.screen, backgroundColor: no % 2 !== 0 ? GlobalColors.lightGray : 'white', paddingHorizontal: paddingSize.screen, }}
        onPress={() => navigation.navigate('DocDetail', {
            title,
            docId: id
        })}>
        <View style={{ flexDirection: 'row' }}>
            <Icon
                imageUrl={imageUrl}
                height={42}
                width={42}
                style={{ borderRadius: 22,
                    borderWidth: 3,
                    borderColor: '#00000034' }} />
            <View style={{ paddingLeft: 13 }}>
                <Text style={styles.listTitle}>{title}</Text>
                <Text style={styles.listId}>{id}</Text>
            </View>
        </View>
        <Icon imageUrl={arrowRightIcon} width={6} height={20} />
    </TouchableOpacity>
);

DocListItem.propTypes = {
    imageUrl: PropTypes.any,
    title: PropTypes.string,
    id: PropTypes.string,
    no: PropTypes.number
};

DocListItem.defaultProps = {
    imageUrl: '',
    title: '',
    id: '',
    no: 0
};

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    docSearch: {
        marginHorizontal: paddingSize.dashCardPadding,
        marginTop: normalizeSize(25),
        marginBottom: normalizeSize(30),
        padding: paddingSize.p_23,
        fontSize: fontSize.smedium,
        fontFamily: FontStyle.medium,
        paddingLeft: paddingSize.p_50,
        borderRadius: 33
    },
    docList: {
        backgroundColor: 'white',
        flex: 0.7,
        borderTopLeftRadius: borderRadius.extra,
        borderTopRightRadius: borderRadius.extra,
        paddingTop: paddingSize.dashCardPadding
    },
    textListItem: {
        paddingHorizontal: paddingSize.screen,
        paddingBottom: normalizeSize(20),
        flexDirection: 'row'
    },
    activeListText: {
        fontSize: fontSize.small,
        color: GlobalColors.primaryColor,
        fontFamily: FontStyle.heavy
    },
    disableListText: {
        fontSize: fontSize.small,
        color: GlobalColors.titleColor,
        fontFamily: FontStyle.medium,
        opacity: 0.3,
        paddingLeft: paddingSize.screen
    },
    listTitle: {
        fontSize: fontSize.small,
        color: GlobalColors.primaryTextColor,
        fontFamily: FontStyle.medium,
        opacity: 0.3
    },
    listId: {
        fontSize: fontSize.smedium,
        color: GlobalColors.primaryTextColor,
        fontFamily: FontStyle.medium
    }
});
export default Document;
