import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262F38',
        height: 130
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
        backgroundColor: '#7F38F4',
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
        color: 'green',
        fontSize: 18
    }
})

export { styles };