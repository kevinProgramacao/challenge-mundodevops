import React from 'react';
import { View, Image, Text, ScrollView, Dimensions } from 'react-native';
import { styles } from './styles';
const { height } = Dimensions.get('window');

const Exercises = ( {exercicesProps, imagesProps} ) => (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{height: height+260}}>
            {
                exercicesProps.map((exercice, index) => (
                    <View style={styles.card} key={index}>
                        <View style={styles.circle}>
                            <Image 
                                source={imagesProps[index]}
                                style={
                                    [styles.imageExercise,
                                    exercice.name === 'Bicicleta' 
                                    ? 
                                    {right: 25}
                                    :
                                    null
                                    ]
                                }
                            />
                        </View>
                        <View style={{left: 30}}>
                            <Text style={styles.text}>{exercice.name.toUpperCase()}</Text>
                            <View style={{flexDirection: 'row', top: 10}}>
                                <Image 
                                    source={require('../../../assets/img/ic_bike.png')}
                                    style={styles.imageNumber}
                                />
                                <Text style={styles.textNumbers}>{exercice.calories} Kcal</Text>
                                
                                <View style={styles.verticalLine}></View>

                                <Image 
                                    source={require('../../../assets/img/ic_time.png')}
                                    style={styles.imageNumber}
                                />
                                <Text style={styles.textNumbers}>{exercice.time} m</Text>

                                <View style={styles.verticalLine}></View>

                                <Image 
                                    source={require('../../../assets/img/ic_balance.png')}
                                    style={styles.imageNumber}
                                />
                                <Text style={styles.textNumbers}>{exercice.weight} Kg</Text>
                            </View>

                            <View style={{flexDirection: 'row', top: 20, right: 7}}>
                                <View style={exercice.when === 'today' ? styles.buttonToday : styles.button}>
                                    <Text style={[styles.textNumbers,{textAlign: 'center', color: '#a9adb1'}]}>HOJE</Text>
                                </View>
                                <View style={exercice.when === 'yesterday' ? styles.buttonYesterday : styles.button} >
                                    <Text style={[styles.textNumbers, {textAlign: 'center', color: '#a9adb1'}]}>ONTEM</Text>
                                </View>
                            </View>
                        </View>     
                    </View>
                ))
            }
            </ScrollView>
        </View>
    
)

export default Exercises;