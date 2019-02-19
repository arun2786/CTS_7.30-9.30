
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return (
            <div id="test">
                <h1>This is my first react app</h1>
                <hr/>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("myApp"));

module.hot.accept();