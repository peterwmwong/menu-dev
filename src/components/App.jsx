import '../../vendor/octicons/octicons.css';
import './App-old.css';
import './App.css';
import './common/Card.css';
import '../helpers/globalLogger';
import xvdom               from 'xvdom';
import RecipeView          from './views/RecipeView.jsx';
import RecipeListView      from './views/RecipeListView.jsx';

const APP_CLASS = `App fit fullbleed ${window.navigator.standalone ? 'is-apple-standalone' : ''}`;

const App = (props, {view})=> <body className={APP_CLASS}>{view}</body>

App.state = {
  onInit: (props, state, {onHashChange})=> {
    window.onhashchange = onHashChange;
    return onHashChange();
  },
  onHashChange: (props, state)=> {
    const [encodedRecipeName, tab] = window.location.hash.slice(1).split('?');
    const recipeName = decodeURIComponent(encodedRecipeName);

    if(state && recipeName !== state.recipeName) document.body.scrollTop = 0;

    return recipeName ? ({
      recipeName,
      view: <RecipeView id={recipeName} tab={tab} />
    }) : ({
      view: <RecipeListView />
    })
  }
}

document.body = xvdom.render(<App />);
