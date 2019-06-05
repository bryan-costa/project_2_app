import axios from 'axios'

const Login = {
    getOne: User => axios.get('/users', User)
}

export default Login