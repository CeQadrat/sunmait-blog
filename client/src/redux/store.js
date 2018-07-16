import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'redux/rootReducer.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import changeTextareaSelectionValues from './middlewares/changeTextareaSelectionValues';
import insertMediaIntoText from './middlewares/insertMediaIntoText';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      changeTextareaSelectionValues,
      insertMediaIntoText
    )
  )
);
export default store;

sagaMiddleware.run(rootSaga);
