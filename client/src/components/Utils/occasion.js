import axios from 'axios'

const Occasion = {
    postOne: newOcc => axios.post('/occasions', newOcc),
    getAll: _ => axios.get(`/occasions`),
    deleteOne: id => axios.delete(`occasions/${id}`),
    getSome: userId => axios.get(`/occasions/${userId}`)
}

export default Occasion

// const User = {
//     getAll: _ => axios.get('/users'),    
//     getOne: id => axios.get(`/users/${id}`),
//     postOne: user => axios.post(`/users`, user),
//     putOne: (id, user) => axios.put(`/users/${id}`, user),
//     deleteOne: id => axios.delete(`/users/${id}`),
// }