import React, { Component } from 'react'
import Pokecard from '../Pokecard/Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <h3>Total Experience: {this.props.exp}
                    <br/>
                    <p>{this.props.isWinner ? 'WINNING HAND' : 'LOSING HAND'}</p>
                </h3>
                {this.props.pokemon.map((p) => {
                    return <Pokecard 
                            id={p.id} 
                            name={p.name}
                            type={p.type}
                            exp={p.base_experience}
                            />
                })}
            </div> 
        )
    }
}


export default Pokedex;