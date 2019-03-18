import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'


class App extends React.Component {
  state = {
    images: []
  }

  // axios unsplash api call GET
  onSearchSubmit = async (term) => {
    const res = await axios
    .get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 042413308bf74f6c51f41513b675180f20d8c2ab7973fe90fccbe4c64c04a178'
      }
    })
    this.setState({
      images: res.data.results
    })
  }

  render() {
    return (
      <div className="ui container"
        style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App
