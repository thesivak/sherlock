const SEARCH_BY_INPUT_URL = 'http://localhost:8080/records/search';
const CHECK_STATUS_URL = 'http://localhost:8080/records/check';

// full list of types (to be done): ApcList, AutomationJobList, Connector, Credentials, JobList, Organization
const AVAILABLE_CARD_TYPES = ['Apc', 'Connector', 'Credentials'];

export {
    AVAILABLE_CARD_TYPES,
    SEARCH_BY_INPUT_URL,
    CHECK_STATUS_URL,
}