import React from 'react';
import { View, Text } from 'react-native';
import { icons, styles } from './styles';
import Icon from 'react-native-vector-icons/Foundation'
import MatIcon from 'react-native-vector-icons/MaterialIcons'

const Header = () => (
    <View style={styles.container} >
        <Icon name="align-left" style={icons.icon}  />
        <Text style={styles.text}>MEU PERFIL</Text>
        <MatIcon name="brightness-high" style={icons.icon} />
    </View>
)

export default Header;