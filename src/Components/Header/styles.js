import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'Montserrat-Black',
        backgroundColor: '#262F38',
        borderBottomWidth: 1,
        borderColor: '#0193d8',
        //
        width:100,
        
    },
    text: {
        color: '#FEFFFF',
        fontSize: 20 
    }
})

const icons = StyleSheet.create({
    icon: {
        marginHorizontal: 20,
        fontSize: 20,
        color: '#FEFFFF',
    }
})

export { icons, styles }