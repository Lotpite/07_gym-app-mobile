import styled from "styled-components";
import { Col } from "./Other.styled";

interface CircleProps {
    circumference: number,
    offset?: number,
}

export const CircleWrapper = styled(Col)`
    position: relative;
    width: 72px;
    height: 72px;

    svg {
        width: 72px;
        height: 72px;
    }
`

export const EmptyCircle = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        height: 72px;
`

export const FilledCircle = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        height: 72px;
`

export const StyledCircleEmpty = styled.circle<CircleProps>`
        cx: 36;
        cy: 36;
        r: 32;
        stroke-width: 4px;
        stroke: lightgray;
        fill: transparent;
        stroke-dasharray: ${({circumference}) => circumference};
        stroke-dashoffset: 0;
`

export const StyledCircle = styled(StyledCircleEmpty)<CircleProps>`
        stroke-dashoffset: ${({offset}) => offset};
        stroke: url(#circle);
        transform-origin: center;
        transform: rotate(-90deg);
`
