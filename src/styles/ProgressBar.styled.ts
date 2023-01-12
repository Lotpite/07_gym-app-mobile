import styled from 'styled-components'

interface ProgressProps {
    actualProgress: number
}

export const ProgressBarWrapper = styled.div`
    position: relative;
    width: 100%;
`

export const ProgressLineDefault = styled.div`
    position: absolute;
    left: 0;
    top:0;
    border-radius: 15px;
    height: 8px;
    background-color: lightgray;
    width: 100%;
    z-index: 1;
`

export const ProgressLineActual = styled.div<ProgressProps>`
    
    /*  */
   
    position: absolute;
    left: 0;
    top:0;
    border-radius: 15px;
    height: 8px;
    background: linear-gradient(to right, #2BFEFE, #1E87D3 120%);
    width: ${({actualProgress}) => `${actualProgress}%`};
    z-index: 2;
`