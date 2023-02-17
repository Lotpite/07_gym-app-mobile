import React, { FC } from 'react'
import { StyledButton } from '../../styles/Button.styled'
import { Title } from '../../styles/Other.styled'

interface IButtonProps {
    text: string,
    color?: string,
    size?: string,
    isDisabled?: boolean,
    func: () => void
}

export const Button:FC<IButtonProps> = ({text, color, size, isDisabled, func}) => {
    
  return (
    <StyledButton color={color} isDisabled={isDisabled} size={size ? size : 'standard'} onClick={() => func()}>
        <Title >
            {text}
        </Title>
    </StyledButton>
  )
}
