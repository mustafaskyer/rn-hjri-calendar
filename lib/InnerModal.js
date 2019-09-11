import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import _ from 'lodash';
import Spacer from './Spacer';
import Row from './Row';

const { width, height } = Dimensions.get('window')

const InnerModal = (props) => {
    return(
        <Modal animationType={'fade'} transparent={true} visible={props.visible}>
            <View style={styles.view}>
            <Spacer height={17}/>
            <Row style={styles.topView}>
                <TouchableOpacity style={styles.flex0} onPress={props.close} >
                    <Text>{props.closeText}</Text>
                </TouchableOpacity>
                <View style={styles.titleView}>
                    <Text>{props.yearsTitle}</Text>
                </View>
                <View style={styles.flex0} />
            </Row>
            <Spacer height={17}/>
            <View style={styles.sep}/>
            <ScrollView style={{ flex:1 }}>
                <View style={styles.yearsView}>
                    {
                        _.map(props.years, year => (
                            <TouchableOpacity key={year} onPress={() => props.setYear(year)} 
                                style={[styles.yearView, props.selectedYear === year && styles.activeYearView]}
                                >
                                <Text>{year}</Text>
                                {/* {props.selectedYear === year && <View style={styles.selectedView}/>} */}
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    view: {
        flex:0,
        width: width*.9,
        height: 400,
        borderWidth:.5,
        borderRadius: 19,
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: height/2 - height/3,
        alignSelf: 'center'
    },
    topView: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    yearsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // paddingHorizontal: 19,
        marginTop: 11,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    yearView:{
        width: 65,
        height: 35,
        borderRadius: 9,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7,
    },
    sep: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc'
    },
    flex0: {
        flex:0, width: 60
    },
    titleView: {
        flex:1, 
        alignItems: 'center', 
        marginStart: 30
    },
    selectedView: {
        width: 10,
        height: 10,
        backgroundColor: 'green',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    activeYearView: {
        borderWidth: 1,
        borderRadius: 11,
        borderColor: '#28a745'
    }
})

export default InnerModal