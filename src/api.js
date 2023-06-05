// import axios from 'axios';

// const apiUrl = import.meta.env.VITE_API_URL

// const api = axios.create({
//     baseURL: apiUrl,
// });

// export default api;

import axios from 'axios';

const apiUrl = 'https://personal-site-api-gjsh.onrender.com/api'

const api = axios.create({
    baseURL: apiUrl,
});

export default api;