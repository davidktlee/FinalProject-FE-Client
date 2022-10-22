import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBIgyXyeqxmcPRsO2UWFhXIBxgcLsz0Npc',
  authDomain: 'iko-lenssis.firebaseapp.com',
  projectId: 'iko-lenssis',
  storageBucket: 'iko-lenssis.appspot.com',
  messagingSenderId: '533727821105',
  appId: '1:533727821105:web:4a877493195a3c7c68c410'
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
