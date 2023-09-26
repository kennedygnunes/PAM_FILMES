import React from "react";
import {View, Text, Image} from 'react-native'
import styles from './style';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';

export default function Details(){

const route = useRoute();

    const customFullStar = (
        <Icon name={'star'} style={{ fontSize: 30, color: 'yellow' }} />
    );

    const customEmptyStar = (
        <Icon name={'star-outline'} style={{ fontSize: 30, color: 'gray' }} />
    );

    const customHalfStar = (
        <Icon name={'star-half'} style={{ fontSize: 30, color: 'yellow' }}/>
    );

    return(
        <View style ={styles.body}>
            <View style ={styles.imgFilme}>
                <Image style ={styles.imagemFilme} source = {{uri:`https://image.tmdb.org/t/p/original/${route.params.imagem}`}}/>
            </View>
            <View style ={styles.fields}>
                <Text style ={styles.title}>
                    {route.params.titulo}
                </Text>
                <Stars style ={styles.stars}
                    default={parseFloat(route.params.nota)}
                    count={10}
                    half={true}
                    starSize={50} 
                    fullStar={customFullStar}
                    emptyStar={customEmptyStar}
                    halfStar={customHalfStar}
                    fullStarColor="yellow"
                />
                <Text style ={styles.nota}>
                    {route.params.nota}
                </Text>
                <Text style ={styles.descFilmes}>
                    {route.params.desc}
                </Text>
            </View>
        </View>
    );
}