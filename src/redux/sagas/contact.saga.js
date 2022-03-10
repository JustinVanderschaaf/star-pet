import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchContacts(action) {
    const qFilter = action.payload
    try {
        const response = yield axios.get(`/api/contact`, {params: qFilter});
        yield put({ type: 'SET_CONTACTS', payload: response.data });
    }
    catch (error) {
        console.error('fetchContacts failed', error);
    }
}

function* addContacts(action) {
    try {
        console.log('contact post action.payload',action.payload);
        
        const response = yield axios.post(`/api/contact`, action.payload);
        yield put({ type: 'FETCH_CONTACTS',});
    }
    catch (error) {
        console.error('fetchContacts failed', error);
    }
}

function* fetchContactDetails(action){
    try {
        console.log('contact details action.payload',action.payload);
        
        const response = yield axios.post(`/api/contact`, action.payload);
        yield put({ type: 'FETCH_CONTACTS',});
    }
    catch (error) {
        console.error('fetchContacts failed', error);
    }
}

function* contactSaga () {
    yield takeLatest('FETCH_CONTACTS', fetchContacts);
    yield takeLatest('FETCH_CONTACT_DETAILS_FOR_EDIT', fetchContactDetails);
    yield takeLatest('ADD_CONTACTS', addContacts);
    yield takeLatest('SAVE_CONTACT_CHANGES',saveChanges);

}

export default contactSaga;