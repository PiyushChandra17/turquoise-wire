import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyCx_8bXf6Ch2rsTasuauCuBkFlHp8-J4Ew",
    authDomain: "turqwire.firebaseapp.com",
    projectId: "turqwire",
    storageBucket: "turqwire.appspot.com",
    messagingSenderId: "448258485687",
    appId: "1:448258485687:web:cff37ee904ea50227f0c32",
    measurementId: "G-56KSNE5NJS"
}

const fb = firebase.initializeApp(config)

const DB = fb.firestore()
const usersCollection = DB.collection('users')
const articlesCollection = DB.collection('articles')
const videosCollection = DB.collection('videos')

export {
    fb,
    firebase,
    usersCollection,
    articlesCollection,
    videosCollection
}