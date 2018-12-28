import firebase from 'firebase'
import firestore from 'firebase/firestore'
import {configFirebase} from './config'


const fireBaseApp = firebase.initializeApp(configFirebase)
fireBaseApp.firestore().settings({ timestampsInSnapshots: true })
export default fireBaseApp.firestore()
