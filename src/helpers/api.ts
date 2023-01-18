import axios from 'axios';
import { CHECK_STATUS_URL, SEARCH_BY_INPUT_URL } from '../constants/constants';

const searchByQuery = (name: string) => {
    axios.post(SEARCH_BY_INPUT_URL + '?input=' + name)
        .then(response => response);
}

const checkStatus = (name: string) => {
    axios.get(CHECK_STATUS_URL + '?record=' + name)
        .then(response => response);
}

export {
    checkStatus,
    searchByQuery,
}