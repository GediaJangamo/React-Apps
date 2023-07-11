import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    BoxMenu: {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: "center",
        justifyContent:'center',
        marginTop:40,   
    },

    BoxButtom  : {
        backgroundColor: '#ffffff',
        display:'flex',
        flexDirection:'row',
        justifyContent:"center",
        margin:10,
        padding:5,
        width:'90%',
    },

    BoxText: {
       fontSize:24,
       textAlign:'center',
       color:'black',
       fontWeight:'bold',
       padding:10,
    },
    BoxIcon: {
        textAlign:'center',
    },
    
});

export default styles