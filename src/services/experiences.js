import axios from 'axios'

const baseUrl = 'http://localhost:3001/experiences/'

const getAll = () => {
    return axios
        .get(baseUrl)
        .catch(error => {
            console.log(error)
        })
}

export default { getAll }