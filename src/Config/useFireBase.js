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
        console.log('addUserOnMongodb',body);
        PostPutPatch(`${Endpoints.sign_up}`,body,{
            thenCB:(res)=>{ 
                dispatch(setUser(res.data.user));
                createDataLS(res.data.token,'token');
                toast.success('Signup successfull');
            },
            catchCB:(error)=>{
                body.name && toast.error('Singup failed')
            },
            method:'post'
        });
    }
    const getUserFromMongodb = (body,isSignin) => {
        PostPutPatch(`${Endpoints.sign_in}`,body,{
            thenCB:(res)=>{ 
                dispatch(setUser(res.data.user));
                createDataLS(res.data.token,'token');
            },
            catchCB:(error)=>{
                isSignin && toast.error('Singin failed')
            },
            method:'post'
        });
    }

    const findUserFromDb = (email, displayName) => {
        setIsLoading(true)
    }

    const createUserWithPassword = (values,loader) => {
        console.log(values)
        loader(true)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async res => {
                console.log("response",values)
                await addUserOnMongodb(values);
            })
            .catch(e => {
                toast.error("signup failed")
            }).finally(()=>{
                loader(false)
            })
    }
    const signInWithPassword = (values,loader) => {
        loader(true)
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(res => {
                getUserFromMongodb(values,'signin')
            })
            .catch(e => {
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
                console.log('onReloadSigninCheking');
                getUserFromMongodb({email:user.email})
            } else {
                
            }
        });
    }

    const googleSignin=(loader)=>{
        loader(true)
        signInWithPopup(auth, googleProvider)
        .then(async(result) => {
          const user = result.user;
          console.log(googleSignin);
          await addUserOnMongodb({
            name: user.displayName,
            email:user.email,
            photoURL:user.photoURL
          })
            toast.success('Signed successfully');
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