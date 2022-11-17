import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { RootState } from './typings'

const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage: AsyncStorage
}

export const rootReducer = combineReducers({

})

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer)
})

export const persistor = persistStore(store)
export default store;