import axios from '../../../node_modules/axios'

const Occasion = {
    postOne: newOcc => axios.post('/occasions', newOcc),
    getAll: _ => axios.get(`/occasions`)
}

export default Occasion