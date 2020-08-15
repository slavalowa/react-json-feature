import styled from "styled-components";

export const NodeItem = styled.div`
    position: relative;
    margin-top: 0;
    margin-bottom: .5rem;
    margin-left: 1rem;
    display: ${props => props.display}
`

export const Toggle = styled.span`
    position: absolute;
    top: .1rem;
    left: 0;
    cursor: pointer;
`

export const NodeKey = styled.span`
    font-weight: bold;
    margin-left: 1rem;
`

export const NodeValue = styled.span`
    color: ${props => props.color}
`
