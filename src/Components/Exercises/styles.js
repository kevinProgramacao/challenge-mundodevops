import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');  

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262F38',
        fontFamily: 'Montserrat-Medium'
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#323C47',
        borderRadius: 10,
        marginHorizontal: 10,
        top: 20,
        height: 100,
        marginBottom: 20
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius:100,
        backgroundColor: '#262F38',
        marginHorizontal: 9,
        top: 15
    },
    text: {
        color: '#FEFFFF',
        fontSize: 20,
        top: 8,
        fontFamily: 'Montserrat-Medium',
    },
    verticalLine: {
        borderLeftWidth: 1,
        borderLeftColor: '#515962',
        marginHorizontal: 5
    },
    textNumbers: {
        color: '#fff',
        fontSize: 12,
        marginHorizontal: 5,
        fontFamily: 'Montserrat-Medium',
    },
    imageExercise: {
        height: 110,
        resizeMode: 'contain',
        right: 15,
        bottom: 25
    },
    imageNumber: {
        top: 3,
        height: 15,
        width: 15,
        resizeMode: 'contain'
    },
    button: {
        width: 70,
        height: 22,
        borderRadius:100,
        borderWidth: 1,
        borderColor: '#515962',
        marginHorizontal: 5,
        backgroundColor: "#323C47"
    },
    buttonToday:{
        width: 70,
        height: 22,
        borderRadius:100,
        marginHorizontal: 5,
        backgroundColor: "#FD3C29"
    },
    buttonYesterday: {
        width: 70,
        height: 22,
        borderRadius:100,
        marginHorizontal: 5,
        backgroundColor: "#19B996"
    }
})

export { styles }