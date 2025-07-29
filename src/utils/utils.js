
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}
export const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}