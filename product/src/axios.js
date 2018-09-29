import axios from 'axios';

const instance =axios.create({
    baseURL:'https://product-listing-application.firebaseio.com/'
});

export default instance;