import React, { useState } from 'react';

const Character = (props) => {
    const { character } = props;
    const [show, setShow] = useState(false);

    return(
    <div className='charactersContainer'>
       
            <img src={character.image} alt={character.name} />
            <h2 className='characterName'>{character.name}</h2>
            <div className='status'>
                <p className={character.status}>Status: {character.status}</p>
            </div>
            <div className='showAndHide'>
                <div onClick={() => setShow(!show)}>
                    { !show ? (
                        <div className='showAndHide'>Show Details</div>
                    ) : (
                        <div>
                            <div className='showAndHide'>Close Details</div>
                                <p>Species: {character.species}</p>
                                <p>Gender: {character.gender}</p>
                                <p>Origin: {character.origin.name}</p>
                                <p>Current Location: {character.location.name}</p>
                        </div>
                    )}
                </div>
            </div>  
    </div>
    );
};

export default Character;