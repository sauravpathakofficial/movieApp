import React from 'react'
import { useLocation } from 'react-router-dom';
import {MainHeading} from './Components/styles/MainHeading.styled';
import {SubHeading} from './Components/styles/SubHeading.styled';
import { AboutContainer } from './Components/styles/AboutContainer.styled';

const About = () => {
    const {state} =useLocation();
    const temp=state.movie.text
  return (
    <AboutContainer>
        <MainHeading>{temp.original_title}</MainHeading>
        <h3> Description: <SubHeading>
            {temp.overview}</SubHeading>
        </h3>
        <h3>Released on :{temp.release_date}</h3>
        <h4>Content-type:   {temp.media_type}</h4>
    </AboutContainer>
  )
}

export default About