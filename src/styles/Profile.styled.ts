import styled from "styled-components";
import { Row, Col } from "./Other.styled";

export const HeaderWrapper = styled(Col)`
    margin-top: 50px;
    width: 80vw;
`

export const Avatar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 50%;

    img {
        width: 64px;
        height: 64px;
    }
`

export const Rank = styled.div`
    position: absolute;
    bottom: -10px;
    right: -20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
        width: 24px;
        height: 24px;
    }
`

export const RankLabel = styled.span`
    width: 25px;
    font-style: 12px;
`

export const Level = styled(Col)`
    width: 60px;
`

export const UserName = styled.div`
    margin-top: 40px;
    width: 100%;
    text-align: center;
    word-wrap: break-word;
`