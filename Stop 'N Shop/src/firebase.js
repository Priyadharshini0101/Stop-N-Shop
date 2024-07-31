import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc,collection,getFirestore} from 'firebase/firestore'
import toast,{Toaster} from 'react-hot-toast'

const firebaseConfig = {
  apiKey: "AIzaSyAevY5UT0t8M_NyyYrPA1ASg9ReOUQiOJM",
  authDomain: "stop-n-shop-a9d15.firebaseapp.com",
  projectId: "stop-n-shop-a9d15",
  storageBucket: "stop-n-shop-a9d15.appspot.com",
  messagingSenderId: "896340733661",
  appId: "1:896340733661:web:30b82d4ced2344a08c7534",
  measurementId: "G-2MX7JL52F8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async(name,email,password) =>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
    });
    toast.success("Logged In")
    }catch(error){
         toast.error("Invalid Credentials");

         const s = error.code.split('/')[1].split('-').join(" ")
         toast.error(s)
    
    }
}

const login = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
        toast.success("Logged In")
    
    }catch(error){
   
    const s = error.code.split('/')[1].split('-').join(" ")
     toast.error(s)

    }
}

const logout = () =>{
    signOut(auth)
    toast.success("Logged out")
}

export {auth,db,login,signup,logout}