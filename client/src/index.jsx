import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello World From Index</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('app')
  );