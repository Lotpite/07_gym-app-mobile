import React from 'react'

export const Gradient = () => {
    const gradId = 'circle'
  return (
    <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={gradId} gradientTransform='rotate(90)'>
            <stop offset="0%" stopColor='#1E87D3' />
            <stop offset="100%" stopColor='#2BFEFE' />
          </linearGradient>
        </defs>
    </svg>
  )
}
