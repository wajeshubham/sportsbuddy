import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./fearures/auth-slice";
import eventSlice from "./fearures/event-slice";
import profileSlice from "./fearures/profile-slice";
import adminSlice from "./fearures/admin-slice";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/integration/react";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({ auth: authSlice.reducer, event: eventSlice.reducer });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const Store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(Store);


export const Store =  configureStore({
  reducer: {
    auth: authSlice.reducer,
    event: eventSlice.reducer,
    profile:profileSlice.reducer,
    admin:adminSlice.reducer,
  },
});



