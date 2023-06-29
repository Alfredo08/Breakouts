import React from 'react';

function Dog(props){

    return(
        <div>
            <h2> Random dog image from the Dog CEO API: </h2>
            <img alt="Dog image" src={props.dogImage} />
        </div>
    );
}

export default Dog;