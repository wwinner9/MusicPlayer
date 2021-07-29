import axios from'axios'

const apiDeezer= axios.create({
    baseURL: 'https://api.deezer.com/'

})

export default apiDeezer;
