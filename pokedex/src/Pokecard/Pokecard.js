import React, { Component } from 'react'
import './Pokecard.css'
const POKE_API  = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
// const POKE_API  = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


let padToThree = (n) => ( n <= 999 ? `00${n}`.slice(-3) : n);

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`; 
        let classes = `Pokecard ${this.props.type}-type`;
        return (
            <div className={classes}>
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                {/* <div>Type: {this.props.type.toUpperCase()}</div> */}
                <div className="exp">EXP: {this.props.exp}</div>
                <h1 className="decoration">{this.props.type}</h1>
            </div>
        )
    }
}


export default Pokecard;