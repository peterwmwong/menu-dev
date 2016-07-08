import '../../vendor/octicons/octicons.css';
import './App-old.css';
import './App.css';
import './common/Card.css';
import '../helpers/globalLogger';
import xvdom               from 'xvdom';
import RecipeView          from './views/RecipeView.jsx';
import RecipeListView      from './views/RecipeListView.jsx';

const APP_CLASS = `App fit fullbleed ${window.navigator.standalone ? 'is-apple-standalone' : ''}`;

const App = ({state: {view}})=> <body className={APP_CLASS}>{view}</body>

const onHashChange = ({state})=> {
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

App.state = {
  onInit: ({bindSend})=> (
    window.onhashchange = bindSend('onHashChange'),
    onHashChange({})
  ),
  onHashChange
}

document.body = xvdom.render(<App />);
