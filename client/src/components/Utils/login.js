import axios from 'axios'

const Login = {
    getOne: User => axios.get('/users/id', User)
}

export default Login