import storage from '../helpers/storage';
import loadScript from '../helpers/loadScript';

const STORAGE_KEY = 'menu:Recipes';
const FIREBASE_URL = 'https://menu-dev.firebaseio.com/recipes';

// TODO: We should be able to request individual recipes without requesting the
// full list.
const localQuery = ()=> (storage.getItemObj(STORAGE_KEY) || [])
const localGet = ({id})=> {
  return localQuery().find(({name})=> name === id)
}

let loadFirebasePromise;
const loadFirebase = ()=>
  loadFirebasePromise || (loadFirebasePromise = new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(
        loadScript('../vendor/firebase/firebase.js')
          .then(()=> new Firebase(FIREBASE_URL))
      );
    }, 500)
  }))

export default {
  localGet,
  get: (props)=> Promise.resolve(localGet(props)),

  localQuery,
  query:()=>
    loadFirebase().then((fb)=>
      new Promise((resolve, reject)=> {
        fb.once('value', (data)=> {
          const recipes = data.val();
          if(!recipes) return reject("Couldn't find recipes");
          resolve(storage.setItemObj(STORAGE_KEY, recipes));
        })
      })
    ),

  save:(recipes)=>
    loadFirebase().then((fb)=>
    new Promise((resolve, reject)=> {
      fb.set(recipes, (err)=> {
        if(err) return reject(err);
        resolve(storage.setItemObj(STORAGE_KEY, recipes));
      })
    })
  )
};
