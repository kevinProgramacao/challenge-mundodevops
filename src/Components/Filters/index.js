import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const Filters = ( {filtersProps, changeSelected, imagesProps,selectedFilter} ) => {

    return(
        <View style={styles.container}>
            <View style={styles.lineHorizontal}></View>
            <View style={styles.card}>
                { filtersProps.map((filter,index) => (
                    <TouchableOpacity key={index} onPress={changeSelected.bind(this, index)} >
                        <LinearGradient 
                            start={{x: 0.0, y: 0.25}}
                            end={{x: 1.2, y: 1.0}}
                            colors={['#7F38F4', '#F22B48']}
                            style={styles.circleDegrade}
                        >
                            {
                                selectedFilter.indexOf(index) > -1 
                                ? 
                                <View style = {styles.checkCircle}>
                                    <MatIcons name="check-circle" style={styles.iconCheck} />
                                </View> 
                                : 
                                null
                            }
                                
                            <Image
                                source={imagesProps[index]}
                                style={
                                    [styles.imageUpperLower,
                                        filter.name === 'Dance' 
                                        ? 
                                        {left: 18} 
                                        : 
                                        filter.name === 'Yoga' 
                                        ? 
                                        {top: 17} 
                                        : 
                                        null 
                                    ]
                                }
                            /> 
                        </LinearGradient>             
                    </TouchableOpacity>     
                ))}               
            </View>
        </View>  
    )
}

export default Filters;