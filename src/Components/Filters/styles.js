import { StyleSheet, Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262F38',
        height: 110,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#323C47',
        borderRadius: 10,
        marginHorizontal: 10,
        top: 20,
        height: 75
    },
    circleDegrade: {
        width: 50,
        height: 50,
        borderRadius:100,
        marginHorizontal: 9,
        top: 15
    },
    checkCircle: {
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf:'flex-end',
            height: 20,
            width: 20,
            backgroundColor: '#fff',
            marginBottom: -20,
            left: 5,
            color: '#0f1e6e'
    },
    iconCheck:{
        color: '#19B996',
        fontSize: 18
    },
    imageUpperLower: {
        left: 9, 
        top: 10
    },
    lineHorizontal: {
        borderColor: '#707070', borderBottomWidth: 1,  marginHorizontal: 15,
    }
})

export { styles };