import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyArvMh7NuM7UHOGtgG78A3Vy-QOQct_apU",
  authDomain: "expensify-88855.firebaseapp.com",
  databaseURL: "https://expensify-88855.firebaseio.com",
  projectId: "expensify-88855",
  storageBucket: "expensify-88855.appspot.com",
  messagingSenderId: "1038160342450",
  appId: "1:1038160342450:web:9ea9c36816f25733bbc8ab",
  measurementId: "G-C3VCK9QMTK"
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const database = firebase.database()

// database.ref().set({
//   name: 'Can Yener',
//   age: 35,
//   isSingle: true,
//   location: {
//     city: 'Istanbul',
//     country: 'Turkey'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch(e => {
//   console.log('This failed', e)
// })

database.ref('isSingle').remove().then(() => {
  console.log('Data is removed')
}).catch(e => {
  console.log('Remove failed', e)
})