const axios = require('axios').default;

export default {
    GET: (url = '') => {
        return new Promise((resolve, reject) => {
            axios.get(url)
            .then(response => { resolve(response) })
            .catch(error => { reject(error) })
        })
    }
}