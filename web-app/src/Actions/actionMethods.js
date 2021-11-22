import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const GET = async (url) => await axios.get(url)
export const POST = async (url, data, config) => await axios.post(url, data, config)
