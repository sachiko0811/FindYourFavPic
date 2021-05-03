import React from 'react'

import styled from 'styled-components'
import logo from '../../images/camera-logo.png'

const Logo = () => {

    const Size = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 20px;
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
