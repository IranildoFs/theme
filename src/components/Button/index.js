import React from 'react'
import { Container } from './styles';

const Button = ({children, name}) => {
    
    return (
        <Container type='button'name={name}>
            {children}
        </Container>
    )
}
export default Button;