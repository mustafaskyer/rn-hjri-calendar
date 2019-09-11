import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    container: {
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
    sep: {
        width: '100%',
        height: 1,
        backgroundColor: '#d1d5da'
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: '55%',
        alignSelf: 'center',
        height: 35,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    }
})