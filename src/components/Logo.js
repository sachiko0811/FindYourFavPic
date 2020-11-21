import React from 'react'

import styled from 'styled-components'
import logo from '../images/logo.svg'

const Logo = () => {

    const Size = styled.img`
    width: 150px;
    height: 80px;
    margin: 50px;
    `

    const onClick = () => {
        
            window.location.reload()
    }
  

    return(
        <>
        <Size src={logo} onClick={onClick}/>
        </>
    )
}

export default Logo