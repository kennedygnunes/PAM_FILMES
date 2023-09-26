import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({

    body:{
        backgroundColor:'rgb(20, 26, 41)',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    imagemFilme:{
        width:220,
        height:350,
        borderRadius:10
    },
    imgFilme:{
        flex:'1',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
    },
    fields:{
        alignSelf: "center",
        flex:'1',
        alignItems:'center'
    },
    title:{
        color:'white',
        textAlign:'center',
        fontSize:'30px',
        marginBottom:'5px'
    },
    nota:{
        color:'white',
        fontSize:'18px',
        marginTop:'5px',
        marginBottom:'5px'
    },
    descFilmes:{
        color:'white',
        width:'80%',
        textAlign:'center'
    },
    stars:{
        color:'yellow',
        fontSize:'50px'
    }

})

export default estilo;