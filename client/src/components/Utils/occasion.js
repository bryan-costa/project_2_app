import axios from '../../../node_modules/axios'

const Occasion = {
    // POST one new occasion => is working
    postOne: newOcc => axios.post('/occasions', newOcc),
    // GET all occasions => is working (but not used in this app)
    getAll: _ => axios.get(`/occasions`),
    // DELETE one occasion
    deleteOne: id => axios.delete(`occasions/${id}`),
    // GET all occasions for one userId => is working
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