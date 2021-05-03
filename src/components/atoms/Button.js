import React from 'react'
import styled from 'styled-components'

// import logo from '../images/logo.svg'

const Button = styled.button`
    background: ${({ color }) => color};
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px 20px;
    border: none;
    outline: none;
`

const colorMap = {
  primary: '#9DA65D',
  secondary: '#F2F2F2'
}

 const ButtonComponent = ({ onClick, children, type }) => {
   const color = colorMap[type]

    return (
        <div>
          <Button 
          color={color} 
          onClick={onClick}
          >{children}</Button>
        </div>
    )
}

export default ButtonComponent
