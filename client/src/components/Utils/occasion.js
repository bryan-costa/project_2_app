import axios from 'axios'

const Occasion = {
    postOne: newOcc => axios.post('/occasions', newOcc)
}

export default Occasion