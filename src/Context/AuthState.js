import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { auth, googleProvider } from "../Firebase";
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export default function AuthState(props) {
    const [user, setUser] = useState({})

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });

        return () => {
            unSubscribe();
        }
    }, [])

    const signIn = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            return result;
        } catch (err) {
            return false;
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            alert(err.message);
        }
    }

    const logout = () => {
        try {
            signOut(auth)
        } catch (err) {
            alert(err.message);
        }
    }


    return (
        <AuthContext.Provider value={{ user, signIn, logout, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )

}