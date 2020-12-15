import React from 'react'
// import styled from 'styled-components'
import Button from '../atoms/Button'

const ShortCut = ({text, onSubmit, setTerm }) => {
    console.log(onSubmit, setTerm)

    const onClickShortCut = (word) => {
        // console.log(props)
        // console.log(word)
        // onSubmit(word)
        return () => {
            console.log(word)
            setTerm(word)
            onSubmit(word)
        }

    }

    return (
        <div>
            <Button 
            type="secondary" 
            onClick={onClickShortCut('Canada')}>Canada</Button>
            <Button 
            type="secondary" 
            onClick={onClickShortCut('Vancouver')}>Vancouver</Button>
            <Button 
            type="secondary" 
            onClick={onClickShortCut('Tronto')}>Tronto</Button>
        </div>
    )
}

export default ShortCut