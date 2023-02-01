import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from   'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
// const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google SignIn
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }
    /* 
            
  //  2. Update Name
        const updateUserProfile = (name, photo) => {
            setLoading(true)
            return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
            })
        }
    */
    /* 
        const updateUserProfile = (userInfo, userPhoto) => {
        return updateProfile(auth.currentUser, userInfo, userPhoto);
      };
    */

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

/*   //   3. Email Verify
  const verifyEmail = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser)
  }
 */
/* //   Forget Password
  const resetPassword =(email) =>{
    setLoading(true)
    return sendPasswordResetEmail(auth, email )
  } */

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,( currentUser )=>{
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });
        return() => unsubscribe();
    },[])

    const authInfo={
        createUser,
        signIn,
        signInWithGoogle,
        updateUser,
        logOut,
        // verifyEmail,
        // resetPassword,
        user,
        loading,
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;