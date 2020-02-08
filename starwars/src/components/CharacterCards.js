import React from 'react'
import styled from 'styled-components'
import Character from './Character'

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`


const CharacterCards = (props) => {
    const { characters } = props
    console.log(characters)
    return(
        <Container>
            {characters.map((character, i)=>{
                return(<Character key={i} character={character}/>)
            })}
        </Container>
    )
}

export default CharacterCards
