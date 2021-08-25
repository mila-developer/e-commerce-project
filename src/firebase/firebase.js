import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBnhE3ivOBti8aToZBrHp6yPtemQolz_VY",
        authDomain: "crwn-db-d9205.firebaseapp.com",
        projectId: "crwn-db-d9205",
        storageBucket: "crwn-db-d9205.appspot.com",
        messagingSenderId: "1000605981100",
        appId: "1:1000605981100:web:27f1ec0c780351d7d3c209",
        measurementId: "G-9RCQ8G9NPS" 
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if(!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();

                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                } catch (error){
                        console.log('error creating user', error.message);
                }
        }

        return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;