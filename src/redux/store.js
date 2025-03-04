import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import doctorSlice from "./doctorSlice";
import hospitalSlice from "./hospitalSlice"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { combineReducers } from "redux";


// Define the persistConfig
const persistConfig = {
  key: 'root', 
  storage,    
  whitelist: ['auth', 'doctor', 'hospital'], 
};

const rootReducer = combineReducers({
  auth: authSlice,
  doctor: doctorSlice,
  hospital: hospitalSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); 


export default store;
