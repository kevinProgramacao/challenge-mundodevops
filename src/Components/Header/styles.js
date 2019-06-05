import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#262F38',
        height:70      
    },
    text: {
        color: '#FEFFFF',
        fontSize: 20,
        top: 8,
        fontFamily: 'Montserrat-Medium',
    }
})

const icons = StyleSheet.create({
    icon: {
        marginHorizontal: 20,
        fontSize: 20,
        color: '#FEFFFF',
        top: 10
    }
})

export { icons, styles }