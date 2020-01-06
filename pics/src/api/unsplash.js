import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 926522ab97392294440d0f0aeed04991907b06328cf0a0a15c6474d3947bbc99'
    }
});