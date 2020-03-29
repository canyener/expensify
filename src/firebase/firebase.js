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

database.ref('expenses')
  .on('value', (snapshot) => {
    const expenses = []

    snapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })

    console.log(expenses)
  })

// database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = []

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
//   })

// database.ref('expenses').push({
//   description: 'Gum',
//   note: 'Test note for gum',
//   amount: 195,
//   createdAt: 0
// })

// database.ref('notes/-M3b8D7U6EcalLu_MB2q').update({
//   body: 'Buy food'
// })

// database.ref('notes/-M3b8D7U6EcalLu_MB2q').remove()
// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, React Native, Python'
// })

// const notes = [{
//   id: '12',
//   title: 'Fist note',
//   body: 'This is my note'
// }, {
//   id: '761asd',
//   title: 'Another note',
//   body: 'This is my note'
// }]

// database.ref('notes').set(notes)

// database.ref('notes/12')

//Setting up a data sub
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// setTimeout(() => {
//   database.ref('job/company').set('Amazon')
// }, 2000);


// setTimeout(() => {
//   database.ref('job/company').set('Google')
// }, 2000);

// //Fires whenever data changes
// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val())
//   }, e => {
//     console.log('Error with data fetching', e)
//   })

// setTimeout(() => {
//   database.ref('age').set(48)
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange)
// }, 7000);


// setTimeout(() => {
//   database.ref('age').set(45)
// }, 10500);

//Get data single time, if data changes we won't be notified
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   }).catch(e => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'Can Yener',
//   age: 35,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   stressLevel: 6,
//   isSingle: true,
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch(e => {
//   console.log('This failed', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

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