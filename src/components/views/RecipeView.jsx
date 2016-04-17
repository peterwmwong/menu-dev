import xvdom      from 'xvdom';
import AppToolbar          from '../AppToolbar.jsx';
import Icon                from '../common/Icon.jsx';
import List                from '../common/List.jsx';
import modelStateComponent from '../../helpers/modelStateComponent';
import Recipe              from '../../models/Recipe';
import Tabs                from '../common/Tabs.jsx';

const item = (text)=> ({text})

const TABS = {
  ingredients:{
    title: 'Ingredients',
    view: (recipe)=>
      <List
        className='Card l-margin-t26'
        item={item}
        list={recipe.ingredients}
      />
  },
  directions:{
    title: 'Directions',
    view: (recipe)=>
      <List
        className='Card l-margin-t26'
        item={item}
        list={recipe.directions}
      />
  }
};

export default modelStateComponent(Recipe, 'get', ({id, tab='ingredients'}, recipe)=>
  <div>
    <AppToolbar
      left={
        <a href='#'>
          <Icon
            className='c-white l-padding-r4'
            name='chevron-left'
            size='small'
          />
        </a>
      }
      secondary={
        <Tabs hrefPrefix={`#${recipe && recipe.name}?`} selected={tab} tabs={TABS} />
      }
      title={recipe && recipe.name || ''}
    />
    {recipe && TABS[tab].view(recipe)}
  </div>
)
