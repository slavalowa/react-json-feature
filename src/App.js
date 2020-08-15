import React, {Component} from 'react';
import jsonData from './data/data'
import JsonRenderer from "./JsonRenderer/JsonRenderer";

class App extends Component{

    render() {
        return (
            <div>
                <JsonRenderer
                    jsonData={jsonData}
                    nodeKeyName={''}
                    toggled = {true}
                    isLastNode = {true}
                    isParentCollapsed = {true}/>
            </div>
        )
    }

}

export default App;


