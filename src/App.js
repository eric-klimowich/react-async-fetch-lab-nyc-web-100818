// create your App component here
import React from 'react';
import Greeting from './components/Greeting'
import ExampleComponent from './components/ExampleComponent'
import Button from './components/Button'

class App extends React.Component {

  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(r => r.json())
      .then(people => {
        this.setState({ people: people.people })
      })
  }

  render() {
    return (
      <div>
        <Greeting />
        <ExampleComponent />
        <Button />
        {this.state.people.map(person => <h1 key={person.name} >{person.name}</h1>)}
      </div>
    )
  }

}

export default App;
