import React, { FC } from 'react'
import { StyledButton } from '../../styles/Button.styled'
import { Text, Title } from '../../styles/Other.styled'

interface IButtonProps {
    text: string,
    color?: string,
    size?: string,
    func: () => void
}

export const Button:FC<IButtonProps> = ({text, color, size, func}) => {
    
  return (
    <StyledButton color={color} size={size ? size : 'standard'} onClick={() => func()}>
        <Title >
            {text}
        </Title>
    </StyledButton>
  )
}
