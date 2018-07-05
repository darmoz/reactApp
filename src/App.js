import React, { Component } from 'react';
import './App.css';

class App extends Component {

      render() {
          const options = ['one', 'two', 'three'];

        return (
          <div>
              <Headers />
              <Action />
              <Options options={options}/>
              <AddOption />
          </div>
        );
      }
    }

class Headers extends Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends Component {
    render() {
        return(
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}

class Option extends Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends Component {

    render() {
        return (
            <div>
                AddOption component here
            </div>
        )
    }
}

export default App;
