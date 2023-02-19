import React from 'react';
import Card from './Card';
import { useState,useEffect ,} from 'react';
import axios from 'axios'
import { Container } from './Components/styles/Container.styled';
import {App} from  './Components/styles/App.styled'
import {BtnContainer} from './Components/styles/BtnContainer.styled';
import { ViewBtn } from './Components/styles/ViewBtn.styled';

const Home = () => {
    const [movies,setMovies]=useState([]);
    const [asc,setAsc]=useState(false);
    const [des,setDesc]=useState(false); 
    const API_KEY=process.env.REACT_APP_API_KEY;
    useEffect(() => {
     axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`).then(response =>{
       setMovies(response.data.results);
     })
    }, []);
    
    
 
   function sortInAscending()
   {
       movies.sort(function(a,b){
        return a.title<b.title? -1:a.title>b.title ? 1:0;
      })
       setAsc(!asc);
   }

   function sortInDescending()
   { 
    movies.sort(function(a,b){
        return a.title>b.title? -1:a.title<b.title ? 1:0;
      });
      setDesc(!des)
   }

   useEffect(()=>{
      setMovies(movies);
   },[asc,des]); 

  return (
    <App>
            <BtnContainer>
                <ViewBtn  onClick={()=> sortInAscending()}>Ascending Order </ViewBtn>
                <ViewBtn onClick={() => sortInDescending()}>Descending Order </ViewBtn>
            </BtnContainer>
            <Container>
            {
            movies.map((movie)=>{
                return <Card key={movie.id} text={movie} />
            })
            }
         </Container>
    </App>
    
  )
}

export default Home