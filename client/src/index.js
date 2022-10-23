import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './Store/Store'
import { PersistGate } from 'redux-persist/integration/react';
// import {persistor} from './Store/Store'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
    document.getElementById("root")

);

// import { configureStore } from '@reduxjs/toolkit'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react'

// import App from './App'
// import Store from './Store'

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, Store)

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// let persistor = persistStore(store)

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// )