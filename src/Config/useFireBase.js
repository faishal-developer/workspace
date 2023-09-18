import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup  } from "firebase/auth";
import { useState } from "react";
import initializeFirebaseApp from "./firebase.init";
import { PostPutPatch } from "../ApiServices/ApiServices";
import { Endpoints } from "../ApiServices/apiEndPoints";
import {useDispatch} from "react-redux";
import { clearUser, setUser } from "../Store/userSlice";
import {toast} from "react-toastify";
import { DeleteDataLS, createDataLS } from "../helper/localStorage";

initializeFirebaseApp()
//todo:read about xss attack and prevent it
const googleProvider = new GoogleAuthProvider();
//code started here
const auth = getAuth();

const useFireBase = () => {
    const dispatch = useDispatch();
    
    // const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const addUserOnMongodb = (body) => {
        PostPutPatch(`${Endpoints.sign_up}`,body,{
            thenCB:(res)=>{ 
                dispatch(setUser(res.data.user));
                toast.success('Signed successfully');
                createDataLS(res.data.token,'token');
            },
            catchCB:(error)=>{
                toast.error('Singup failed')
            },
            method:'post'
        });
    }

    const findUserFromDb = (email, displayName) => {
        setIsLoading(true)
    }

    const createUserWithPassword = (values,loader) => {
        loader(true)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(res => {
                addUserOnMongodb(values)
            })
            .catch(e => {
                toast.error("signup failed")
                // console.log(e,"from useFirebase36");
            }).finally(()=>{
                loader(false)
            })
    }
    const signInWithPassword = (values,loader) => {
        loader(true)
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(res => {
                console.log(res);
                addUserOnMongodb(values)
            })
            .catch(e => {
                // console.log(e,"from useFirebase46");
            }).finally(()=>{
                loader(false)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(clearUser())
            })
            .catch(e => {
                let error = {}
                // error.message = e.message;
                toast.error("Logout Failed");
                dispatch(clearUser())
            })
            .finally(()=>{DeleteDataLS('token')})
    }

    
    const onReloadSigninCheking=()=>{
        onAuthStateChanged(auth, (result) => {
            if (result) {
                const user = result.providerData[0];
                addUserOnMongodb({email:user.email})
            } else {
                
            }
        });
    }

    const googleSignin=(loader)=>{
        loader(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          addUserOnMongodb({
            name: user.displayName,
            email:user.email,
            photoURL:user.photoURL
          })
        }).catch((error) => {
            toast.error("Signin Failed")
        }).finally(()=>{
            loader(false)
        });
    }

    return {
        signInWithPassword,
        createUserWithPassword,
        logOut,
        isLoading,
        googleSignin,
        onReloadSigninCheking,

    }
}

export default useFireBase