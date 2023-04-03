import React, { FC } from 'react'

interface IconProps {
    name: string,
    text?: string,
}


export const Icon:FC<IconProps> = ({name, text}) => {
    const BASE_URL = '/icons/'

    return (
    <>
        <div>
            <img src={`${BASE_URL}${name}.png`} alt={text}/>
            
        </div>
        {text ? <div>{text}</div> : <></>}
    </>
  )
}
