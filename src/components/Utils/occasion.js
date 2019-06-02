import axios from '../../../node_modules/axios'

const Occasion = {
    postOne: newOcc => axios.post('/occasions', newOcc)
}

export default Occasion