import React from 'react';
import ColouringText from '../hoc/ColouringText.js'


const About = (props) => {
    
    return(
        <div className="container">
            <h1 className="center">About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Rem eius aliquid officia voluptatem sit odit ullam nihil. Aliquam, quaerat tenetur?</p>
        </div>
    )
}

export default ColouringText(About) ;