import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/serch-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    // this.searchHandle = this.searchHandle.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  searchHandle = e => this.setState({searchField: e.target.value});

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.trim().toLowerCase()));
    return (
      <div className="App">
        <h1 className = 'app-title'>Monsters Rolodex</h1>
        <SearchBox 
          searchHandle={this.searchHandle} 
          placeholder = 'search monsters'
        />
        <CardList monsters = { filteredMonsters } />  
      </div>
    );
  }
}

export default App;
