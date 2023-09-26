import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerFilmes from '../../components/bannerFilmes';
import Header from '../../components/header';
import { SearchBar } from 'react-native-screens';
import CardFilmes from '../../components/cardFilmes';
import CardSeries from '../../components/cardSeries';
import React,{useState,useEffect} from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  const [movies,setMovies] = useState([]);

  useEffect(()=> {

    async function getMovies(){
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=5c8d6bdc8e453e5756978fd306949d93&language=pt-BR");
        const data = await response.json();

        console.log(data.results)
        setMovies(data.results)

      } catch (error) {
       console.error("ERRO DEU ERRO",error) 
      }
    }

    getMovies();
  },[])

  const [series,setSeries] = useState([]);

  useEffect(()=> {

    async function getSeries(){
      try {
        const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=5c8d6bdc8e453e5756978fd306949d93&language=pt-BR");
        const data = await response.json();

        console.log(data.results)
        setSeries(data.results)

      } catch (error) {
       console.error("ERRO DEU ERRO",error) 
      }
    }

    getSeries();
  },[])

  return (
    <ScrollView>
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <BannerFilmes></BannerFilmes>

      <Text style = {styles.textBanner}> Filmes </Text>

      <View style={{width:"90%"}}>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem = { ({item}) => (

          <CardFilmes

            titulo = {item.title}
            nota = {item.vote_average}
            imagem = {item.poster_path}
            desc = {item.overview}

          />

        )}
        

        />
      </View>

      <Text style = {styles.textBanner}> Series </Text>

      <View style={{width:"90%"}}>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={series}
        keyExtractor={(item) => item.id}
        renderItem = { ({item}) => (

          <CardSeries

            titulo = {item.name}
            nota = {item.vote_average}
            imagem = {item.poster_path}
            desc = {item.overview}

          />

        )}
        

        />
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center"
    
    
  },
  textBanner:{
    fontSize:30,
    color:'white',
    marginTop:15,
    marginLeft:-270,
    fontWeight:'Bold'
}
});
