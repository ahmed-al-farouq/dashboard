import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from './reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const reducerPersisted = persistReducer(persistConfig, reducer);

export const store = createStore(reducerPersisted, composeWithDevTools());
export const persistor = persistStore(store);
