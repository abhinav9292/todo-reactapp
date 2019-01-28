import React from 'react';

const ColouringText = (WrappedCompenent) => {

    const colours = ['red', 'blue', 'orange', 'brown', 'yellow', 'lavendar'];
    const randomColour = colours[Math.floor(Math.random()*5)] 
    const className = randomColour+'-text';

    return(props)=> {
        return(
            <div className={className}>
                <WrappedCompenent {...props}/>
            </div>
        )
    }

}

export default ColouringText;