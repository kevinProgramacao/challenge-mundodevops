import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { styles } from './styles';

const Exercises = ({ exercicesProps }) => (
    <ScrollView>
        <View style={styles.container}>
            {
                exercicesProps.map((exercice, index) => (
                    <View style={styles.card} key={index}>
                        <View style={styles.circle}>
                            <Image 
                                source={require('../../../assets/img/running.png')}
                                style={styles.imageExercise}
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
                                    <Text style={[styles.textNumbers,{textAlign: 'center', color: '#fff'}]}>HOJE</Text>
                                </View>
                                <View style={exercice.when === 'yesterday' ? styles.buttonYesterday : styles.button} >
                                    <Text style={[styles.textNumbers, {textAlign: 'center', color: '#fff'}]}>ONTEM</Text>
                                </View>
                            </View>
                        </View>     
                    </View>
                ))
            }
        </View>
    </ScrollView>
    
)

export default Exercises;