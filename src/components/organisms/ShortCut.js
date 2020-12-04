import React from 'react'
// import styled from 'styled-components'
import Button from '../atoms/Button'

const ShortCut = ({text, onSubmit}) => {
    console.log(onSubmit)

    const onClickShortCut = (word) => {
        // console.log(props)
        console.log(word)
        onSubmit(word)

    }

    return (
        <div>
            <Button 
            type="secondary" 
            onClick={onClickShortCut('canada')}>Canada</Button>
        </div>
    )
}

export default ShortCut