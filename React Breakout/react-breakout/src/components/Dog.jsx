import React from 'react';

const Dog = (props) => {
    return(
        <div>
            <img src={props.imageUrl} alt="An image of a dog" />
            <button onClick={(e) => props.updateCounterByOne(e)}>
                Update counter by 1
            </button>
        </div>
    );
}

export default Dog;