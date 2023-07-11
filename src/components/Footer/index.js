import React from 'react';
import {View, Text} from 'react-native';
import styles from './style'

export default function Footer(){
    return(
        <View style = {styles.BoxFooter}>
            <Text style = {styles.TextFooter}>Reservados Todos direitos</Text>
            <Text style = {styles.TextFooter}> SavanaPoint | 2023 </Text>
        </View>
    )
}