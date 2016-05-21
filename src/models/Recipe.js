import storage from '../helpers/storage';
import loadScript from '../helpers/loadScript';

const STORAGE_KEY = 'menu:Recipes';
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBjXi3l8wUS7g8BYGuFyLRSjIusUrvTcTk',
  authDomain: 'menu-dev.firebaseapp.com',
  databaseURL: 'https://menu-dev.firebaseio.com'
};

// TODO: We should be able to request individual recipes without requesting the
// full list.
const localQuery = ()=> (storage.getItemObj(STORAGE_KEY) || [])
const localGet = ({id})=> localQuery().find(({name})=> name === id);

let loadFirebasePromise;
const loadFirebase = ()=>
  loadFirebasePromise || (loadFirebasePromise = new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(
        loadScript('https://www.gstatic.com/firebasejs/3.0.0/firebase.js')
          .then(()=>
            firebase
              .initializeApp(FIREBASE_CONFIG)
              .database()
              .ref('recipes')
          )
      );
    }, 500)
  }))

export default {
  localGet,
  get: (props)=> Promise.resolve(localGet(props)),

  localQuery,
  query:()=>
    loadFirebase().then((fb)=>
      fb.once('value').then((data)=>
        storage.setItemObj(STORAGE_KEY, data.val() || [])
      )
    ),

  save:(recipes)=>
    loadFirebase().then((fb)=>
      fb.set(recipes).then(()=>
        storage.setItemObj(STORAGE_KEY, recipes)
      )
    )
};
