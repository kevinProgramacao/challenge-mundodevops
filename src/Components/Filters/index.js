import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './styles';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const Filters = ({ filtersProps }) => (
        <View style={styles.container}>
            <View style={styles.card}>
                { filtersProps.map((filter,index) => (
                    <TouchableOpacity key={index}>
                        <LinearGradient 
                            start={{x: 0.0, y: 0.25}}
                            end={{x: 1.2, y: 1.0}}
                            colors={['#7F38F4', '#F22B48']}
                            style={styles.circleDegrade}
                        >
                            <View style = {styles.checkCircle}>
                                <MatIcons name="check-circle" style={styles.iconCheck} />
                            </View>     
                            <Image
                                source={require('../../../assets/img/ic_yoga.png')}
                            style={{top: 15, left: 5}}
                            /> 
                        </LinearGradient>             
                    </TouchableOpacity>     
                ))}               
            </View>
        </View>
)

export default Filters;