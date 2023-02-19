import React from 'react'
import { Link } from 'react-router-dom';
import { CardContainer } from './Components/styles/CardContainer.styled';
import { MainHeading } from './Components/styles/MainHeading.styled';
import { ViewBtn } from './Components/styles/ViewBtn.styled';
import {ImageContainer} from './Components/styles/Image.styled';
import { SubHeading } from './Components/styles/SubHeading.styled';

const Card = (movie) => {

  return (
    <CardContainer>
       <ImageContainer className='movie-image' src={`https://image.tmdb.org/t/p/original/${movie.text.backdrop_path}`} alt="moviepicture"  />
       <MainHeading>
        {movie.text.name===undefined? `${movie.text.title}`:`${movie.text.name}`}
       </MainHeading>
       <SubHeading className='overview-heading' > {movie.text.overview}</SubHeading>
        <Link to="/about"  state={{movie:movie}}>
                <ViewBtn> 
                    View Details
                 </ViewBtn>
        </Link>
    </CardContainer>
  )
}

export default Card