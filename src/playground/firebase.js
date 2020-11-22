import firebase from 'firebase/app';
import 'firebase/database';
import React from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyAusn3jv7RJTlHeBPnk30-ffl_MRnGWz6Y",
    authDomain: "expensefygit.firebaseapp.com",
    databaseURL: "https://expensefygit.firebaseio.com",
    projectId: "expensefygit",
    storageBucket: "expensefygit.appspot.com",
    messagingSenderId: "236036846292",
    appId: "1:236036846292:web:873113757692736753c141",
    measurementId: "G-DW6S0Q3W67"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// child_removed
database.ref('expense').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// child_changed
database.ref('expense').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// child_added
database.ref('expense').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// Subscribe
database.ref('expense').on('value', (snapshot) => {
    const expense = [];

    snapshot.forEach((childSnapshot) => {
        expense.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    });

    console.log(expense)
})

// !!! Subscribe Once
// database.ref('expense')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
        
//         console.log(expenses)
// })


// !!! Create expenses
// const expenses = [{
//     description: 'first item',
//     note: '',
//     amount: '-100',
//     createdAt: '23232'
// }, {
//     description: 'second item',
//     note: '',
//     amount: '400',
//     createdAt: '232435'
// }, {
//     description: 'third item',
//     note: '',
//     amount: '0',
//     createdAt: '3333'
// }]

// !!! Add expenses to firebase
// expenses.map((expense) => {
//     database.ref('expense').push(expense)
// })

// database.ref('notes').push({
//     title: 'first note!',
//     body: 'This is my notse'
// })

// const firebaseNotes = {
//     notes: {
//         heuhdfeuhf: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         jfeijfeijd: {
//             title: 'Second note!',
//             body: 'This is my note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '14',
//     title: 'Second note!',
//     body: 'This is my note'
// }]

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e)
// });

// database.ref().on('value', (snapshot) => {
//     const value = snapshot.val()
//     console.log(`${value.name} is a ${value.job.tittle} at ${value.job.company}`)
// }, (e) => {
//     console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//     database.ref('name').set('mattttttt')
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('name').set('oi')
// }, 10500)

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Errpr fetching data' , e)
//     })

// firebase.database().ref().set({
//     name: 'Matheus',
//     age: 28,
//     stessLevel: 6,
//     job: {
//         tittle: 'Software Developer',
//         company: 'google'
//     },
//     location: {
//         city: 'Bridgeport',
//         state: 'Connectcut'
//     }
// })