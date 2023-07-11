import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';

export default function Form({navigation}){
    return(
        <View style={styles.BoxProduct}>

            <Text style={styles.BoxLabel} >Nome</Text>

            <TextInput 
            placeholder='Nome do produto'
            style={styles.BoxInput} />


            <Text style={styles.BoxLabel}>Preco</Text>

            <TextInput 
            placeholder='preco do produto'
            style={styles.BoxInput}/>


            <TouchableOpacity style={styles.BoxSave}>
                <Text style={styles.BoxSaveText}>Guardar</Text>
            </TouchableOpacity>
        </View>
    );
}