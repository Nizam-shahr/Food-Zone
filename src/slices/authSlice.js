// import { createSlice } from "@reduxjs/toolkit";
// import { auth, db } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// export const initialState = {
//   currentUser: null,
//   error: null,
//   isLoading: false,
//   isAuth: false,
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     AuthStart(state) {
//       (state.isLoading = true), (state.error = null);
//     },
//     AuthSuccess(state, action) {
//       (state.currentUser = action.payload),
//         (state.isLoading = false),
//         (state.isAuth = true),
//         (state.error = null);
//     },
//     AuthFail(state, action) {
//       (state.isLoading = false), (state.error = action.payload);
//     },
//   },
// });
// export const { AuthStart, AuthSuccess, AuthFail } = authSlice.actions;
// export default authSlice.reducer;

// export const registerUser = (email, password, name) => async (dispatch) => {
//   dispatch(AuthStart());
//   await createUserWithEmailAndPassword(auth, email, password)
//     .then(async (response) => {
//       console.log(response);
//       dispatch(AuthSuccess(response.user));
//       const ref = collection(db, "users");
//       await addDoc(ref, {
//         uid: response.user.uid,
//         name,
//         email,
//       });
//     })
//     .catch((err) => {
//       dispatch(AuthFail(err.message));
//     });
// };
