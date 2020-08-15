import React from "react";
import {NodeItem, NodeKey, NodeValue, Toggle} from "./styled";

const JsonRenderer = props => {
    const [isToggled, setIsToggled] = React.useState(props.toggled)

    const addQuotesForString = value => typeof value === 'string' ? `"${value}"` : value

    const getValueColor = (value) => {
        if(typeof value === 'string') {
            return 'green'
        } else if (typeof value === 'number') {
            return 'blue'
        } else {
            return 'black'
        }
    }

    return (
        <NodeItem
            display={props.isParentCollapsed ? 'block' : 'none'}
        >
            <Toggle
                onClick={() => setIsToggled(!isToggled)}
            >
                {isToggled ? '-' : '+'}
            </Toggle>

            <NodeKey>{props.nodeKeyName}</NodeKey>
            {Array.isArray(props.jsonData) ? '[' : '{'}&nbsp;

            {Object.keys(props.jsonData).map((node, index, arr) =>
                typeof props.jsonData[node] === 'object' ?
                    <JsonRenderer
                        jsonData={props.jsonData[node]}
                        nodeKeyName={Array.isArray(props.jsonData) ? '' : node}
                        isLastNode={index === arr.length - 1}
                        isParentCollapsed={isToggled}
                    />
                :
                    <NodeItem display={isToggled ? 'block' : 'none'}>
                        <NodeKey>{node}: </NodeKey>
                        <NodeValue color={getValueColor(props.jsonData[node])}>
                            {addQuotesForString(props.jsonData[node])}
                        </NodeValue>
                        {++index !== arr.length ? ',' : ''}
                    </NodeItem>
            )}

            &nbsp;{Array.isArray(props.jsonData) ? ']' : '}'}
            {props.isLastNode ? '' : ','}
        </NodeItem>
    )
}


export default JsonRenderer