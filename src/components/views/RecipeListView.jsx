import xvdom               from 'xvdom';
import AppToolbar          from '../AppToolbar.jsx';
import modelStateComponent from '../../helpers/modelStateComponent';
import List                from '../common/List.jsx';
import compare             from '../../helpers/compare';
import Recipe              from '../../models/Recipe';

const compareRecipes = (a, b)=> compare(a.name, b.name)
const sortRecipes    = (recipes)=> recipes.sort(compareRecipes)
const item = ({name})=> ({
  href: `#${encodeURIComponent(name)}`,
  icon: 'bookmark',
  text: name
})

export default modelStateComponent(Recipe, 'query', (props, recipes)=>
  <div className='l-padding-b2'>
    <AppToolbar title='Recipes' />
    <List
      className='Card'
      item={item}
      list={recipes}
      transform={sortRecipes}
    />
  </div>
);
