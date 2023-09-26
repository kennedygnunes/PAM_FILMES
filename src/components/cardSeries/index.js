import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from '../cardFilmes/style';
import { useNavigation } from '@react-navigation/native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CardSerie({titulo,nota,imagem,desc,}){

    const navigation = useNavigation();

    const customFullStar = (
        <Icon name={'star'} style={{ fontSize: 12, color: 'yellow' }} />
    );

    const customEmptyStar = (
        <Icon name={'star-outline'} style={{ fontSize: 12, color: 'gray' }} />
    );

    const customHalfStar = (
        <Icon name={'star-half'} style={{ fontSize: 12, color: 'yellow' }}/>
    );

    return(
        <TouchableOpacity onPress = { ()=> navigation.navigate('details', {titulo:titulo, nota:nota, imagem:imagem, desc:desc})} style = {styles.containerFilmes}>

            <Image style ={styles.imagemFilme} source = {{uri:`https://image.tmdb.org/t/p/original/${imagem}`}}/>
            <Text style ={styles.tituloFilmes}> {titulo} </Text>
            <Text style ={styles.notaFilmes}> {nota} </Text>
            <Text style ={[styles.descFilmes, styles.descNone]}> {desc} </Text>


            <Stars style ={styles.stars}
            default={nota}
            count={10}
            half={true}
            starSize={50} 
            fullStar={customFullStar}
            emptyStar={customEmptyStar}
            halfStar={customHalfStar}
            />


        </TouchableOpacity>
    );  
}
