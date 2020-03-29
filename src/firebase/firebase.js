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

database.ref().set({
  name: 'Can Yener',
  age: 35,
  job: {
    title: 'Software Developer',
    company: 'Google'
  },
  stressLevel: 6,
  isSingle: true,
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved')
}).catch(e => {
  console.log('This failed', e)
})

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
})


// database.ref().update({
//   job: 'Software Manager',
//   'location/city': 'İzmir'
// })

//database.ref('isSingle').set(null) //equivalent to remove

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data is removed')
//   }).catch(e => {
//     console.log('Remove failed', e)
//   })

// database.ref().update({
//   name: 'Cem Yener',
//   age: 29,
//   job: 'Software Developer', // Adds new property
//   isSingle: null //removes isSingle
// }).then(() => {
//   console.log('Data is updated')
// }).catch(e => {
//   console.log('Update failed', e)
// })