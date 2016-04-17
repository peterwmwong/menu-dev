import '../../vendor/octicons/octicons.css';
import './App-old.css';
import './App.css';
import './common/Card.css';
import '../helpers/globalLogger';
import xvdom               from 'xvdom';
import RecipeView          from './views/RecipeView.jsx';
import RecipeListView      from './views/RecipeListView.jsx';

const App = (props, view)=> <body className='App fit fullbleed'>{view}</body>

App.state = {
  onInit: (props, recipes, {onHashChange})=> {
    window.onhashchange = onHashChange;
    return onHashChange();
  },
  onHashChange: ()=> {
    const [encodedRecipeName, tab] = window.location.hash.slice(1).split('?');
    const recipeName = decodeURIComponent(encodedRecipeName);
    return recipeName ? (
      <RecipeView id={recipeName} tab={tab} />
    ) : (
      <RecipeListView />
    )
  }
}

document.body = xvdom.render(<App />);
