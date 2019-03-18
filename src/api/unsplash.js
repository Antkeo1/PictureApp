import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 042413308bf74f6c51f41513b675180f20d8c2ab7973fe90fccbe4c64c04a178'
  }
})
