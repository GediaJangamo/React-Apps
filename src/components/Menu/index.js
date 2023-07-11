import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Form from '../Form';
import {AntDesign, Octicons} from "@expo/vector-icons";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();

export default function Menu(){

    return(
        // <NavigationContainer>
        //     <Stack.Navigator>

        //    <Stack.Screen name='Form' component={Form}/>
           
        <View style = {styles.BoxMenu}>
            <TouchableOpacity style={styles.BoxButtom}>
                <Text style={styles.BoxText}  >Adicionar</Text>
                
                <AntDesign style ={styles.BoxIcon} name="plussquare" size={40} color="#623369" />
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.BoxButtom}>
                <Text style={styles.BoxText}>Listar</Text>
                <Octicons style ={styles.BoxIcon} name="checklist" size={40} color="#623369" />
            </TouchableOpacity> 
        </View>

        /* </Stack.Navigator>
        </NavigationContainer> */
    );
}