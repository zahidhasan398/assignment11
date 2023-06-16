import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const Signup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const LogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateProfilePicandName = (updateUser, profileName, photoUrl) => {
        setLoading(true);
        return updateProfile(updateUser, {
            displayName: profileName,
            photoURL: photoUrl
        })
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const GoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])
    const userAuthInfo = { user, loading, Signup, LogIn, updateProfilePicandName, logOut, GoogleSignIn }
    return (
        <AuthContext.Provider value={userAuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;