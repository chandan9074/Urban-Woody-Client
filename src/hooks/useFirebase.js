import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () =>{

    const [user, setUser] = useState({});
    const [error, setError] = useState("")
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location?.state?.from || '/';

    const googleprovider = new GoogleAuthProvider();

    const auth = getAuth();
    const createSingInWithEmail = (e) =>{
        e.preventDefault();    
        // if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6}/.test(password)) {
        //     setError(
        //         "Password at least 6 char, 1 uppercase and 1 lowercase, 1 digits "
        //     );
        //     return;
        // }
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setUser(res.user);
            setUserDetails();
            history.push(redirectUrl)
            setError("")
        })
        .catch((error) => {
            setError(error.message);
            // console.log("eror", error.message)
        });
    }
    const signInWithEmail = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setUser(res.user);
            history.push(redirectUrl)
            setError("")
        })
        .catch((error) => {
            setError(error.message);
        });

    }

    const googleSignIn = () => {
    setLoading(true);

    signInWithPopup(auth, googleprovider)
      .then((result) => {
        setUser(result.user);
        history.push(redirectUrl);
      })
      .finally(() => setLoading(false));
    };
    
    const setUserDetails = () => {
            updateProfile(auth.currentUser, { displayName: name })
                .then(result => {
                })
                .catch(error => {
                    setError(error.message);
                })
        }

  // this is a auth observer with observe all changes for the user

    const logout = () =>{
        signOut(auth).then(() => {
            setUser({});
        })
        .finally(() => setLoading(false))
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        setLoading(false)
        });
    },[])

    return {
        user,
        createSingInWithEmail,
        setEmail,
        setPassword,
        password,
        signInWithEmail,
        logout,
        loading,
        googleSignIn,
        error,
        setError, 
        setName,
        setUserDetails
    };
}

export default useFirebase;