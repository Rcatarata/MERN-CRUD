import axios from 'axios'

// create proxy localhost:5000 in package.json
const API_URL = '/api/users/'

// register User
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


// login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


//logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout, 
    login, 
}

export default authService