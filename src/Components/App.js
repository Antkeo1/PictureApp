import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'


class App extends React.Component {
  // axios unsplash api call GET
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 042413308bf74f6c51f41513b675180f20d8c2ab7973fe90fccbe4c64c04a178'
      }
    })
  }

  render() {
    return (
      <div className="ui container"
        style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}

export default App
