import axios, { AxiosResponse } from 'axios';
import { CHECK_STATUS_URL, SEARCH_BY_INPUT_URL } from '../constants/constants';

const searchByQuery = (name: string): Promise<Array<string>> => {
    return axios.get(SEARCH_BY_INPUT_URL + '?input=' + name)
        .then(response => response.data as Array<string>);
}

const checkStatus = (name: string): Promise<AxiosResponse> => {
    return axios.get(CHECK_STATUS_URL + '?record=' + name)
        .then(response => response);
}

export {
    checkStatus,
    searchByQuery,
}