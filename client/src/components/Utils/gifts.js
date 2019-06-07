import axios from 'axios'

const Gift = {

  postGift: newGift => axios.post('/gifts', newGift),

  getAll: _ => axios.get('/gifts'),

  deleteOne: id => axios.delete(`/gifts/${id}`),

  searchGift: type => axios.get(`/gifts/${name}`)

}

export default Gift
