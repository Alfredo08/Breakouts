import React from 'react';

const Article = (props) => {
    return (
        <div>
            <h2> {props.title} </h2>
            <div>
                <img src={props.urlToImage} alt="Image of an article"/>
            </div>
            <p> {props.author} </p>
            <p> {props.description} </p>
        </div>
    );
}

export default Article;