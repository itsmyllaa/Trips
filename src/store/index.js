import { legacy_createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';

import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = legacy_createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;