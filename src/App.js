import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import Alert from 'react-bootstrap/Alert';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchterm: '', cities: [], temp: 0, name: '', show: false }
  }

  fetchData = () => {
    this.setState({ show: false })
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.state.searchterm + '&units=metric&APIkey=c031dccbb8f243d787c1d4235679da96';
    fetch(url)
      .then(res => res.json())
      .then(resData => {
        this.setState({ name: resData.name, temp: resData.main.temp })
      })
      .catch(error => {
        console.error(error)
        this.setState({ show: true })
      })
  }

  addtoList = () => {
    const newCityObj = {
      name: this.state.name,
      temp: this.state.temp
    }
    if (newCityObj.name !== '') {
      this.setState({ cities: [...this.state.cities, newCityObj] })
    }
  }

  delFromList = (e) => {
    const index = parseInt(e.target.id)
    this.setState({
      cities: this.state.cities.filter((city, i) => i !== index)
    })
  }

  handleChange = (e) => {
    this.setState({ searchterm: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <h2>Temperature finder</h2>
        <SearchBar searchterm={this.state.searchterm} fetchData={this.fetchData} handleChange={this.handleChange} />
        {this.state.show ?
          <Alert className="alert" dismissible variant="warning">
            <p>Could not find location.</p>
          </Alert>
          : null}
        <SearchResult name={this.state.name} temp={this.state.temp} addToList={this.addtoList} />
        <List cities={this.state.cities} delFromList={this.delFromList} />
      </div>
    );
  }
}

export default App;
