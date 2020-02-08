import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background: rgba(200,200,200,0.4);
    border-radius: 20px;
    padding: 20px;
    margin: 20px 0;
    z-index: 2;
`


const Character = (props) => {
    const { character } = props
    return (
        <Card>
            <h3>Character: {character.name}</h3>
        </Card>
    )
    
}

export default Character