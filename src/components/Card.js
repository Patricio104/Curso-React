import React from "react";
import exerciseImg from '../images/aptitud-fisica.png';

class Card extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <img src={exerciseImg}></img>
                </div>
                <div>
                    <h1>Technique Guides</h1>
                    <p>Learn amazing street workout and calisthenics</p>
                </div>
            </div>
        )
    }
}

export default Card;