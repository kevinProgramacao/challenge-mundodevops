import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
var image ='';
const Filters = ({ filtersProps }) => (

    <View style={styles.container}>
        <View style={styles.card}>
            { filtersProps.map(filter => (
                <TouchableOpacity style={styles.circleDegrade}>
                    <View style = {styles.checkCircle}>
                        <MatIcons name="check-circle" style={styles.iconCheck} />
                    </View>
                    <Image
                        source={{uri: '../../'+filter.image}}
                        style={{width:50, height:50}}
                    />                  
                </TouchableOpacity>
            ))}
            
        </View>
    </View>
)

export default Filters;