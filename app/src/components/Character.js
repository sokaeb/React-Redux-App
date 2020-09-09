import React from 'react';

const Character = (props) => {
    const { character } = props;
    return(
    <div className='charactersContainer'>
        <div className="characters">
            <img src={character.image} alt='' />
            <div className="characterDetails">
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            </div>
        </div>
    </div>
    )
}

export default Character;