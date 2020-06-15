import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const BASE_URL = 'https://pixabay.com/api'
const IMAGE_TYPE = 'photo'

const getAll = async (query) => {
    const params = {
        key: API_KEY,
        q: query,
        image_type: IMAGE_TYPE,
        pretty: true
    }
    const response = await axios.get(BASE_URL, { params })
    return response.data
}

const getNextPage = async (query, page) => {
    const params = {
        key: API_KEY,
        page: page,
        q: query,
        image_type: IMAGE_TYPE,
        pretty: true
    }
    const response = await axios.get(BASE_URL, { params })
    return response.data
}

export default { getAll, getNextPage }