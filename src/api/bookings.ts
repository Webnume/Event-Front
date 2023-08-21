import axios from 'axios';
import GLOBALS from '../utils/constants';

export default axios.create({
    baseURL: GLOBALS.API.BASE_URL
});