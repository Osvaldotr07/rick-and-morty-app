import React from 'react'


function CharacterCard(props){
    const {character} = props
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="CharacterCard" style={{backgroundImage: `url(${character.image})`}}>
                        <div className="CharacterCard-name CharacterCard-container">{character.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard