import './AppToolbar.css';
import xvdom from 'xvdom';
import App   from './App.jsx';
import Icon  from './common/Icon.jsx';

const showSearch = ()=> { App.showSearch() };

const AppToolbar = ({title, secondary, left, right}, {scrollClass})=>
  <div className={`AppToolbar ${secondary ? 'AppToolbar--withSecondary' : ''}`}>
    <div className={`AppToolbar-bar fixed fixed--top c-white bg-purple ${scrollClass}`}>
      <div className='layout horizontal center-center l-height14 l-padding-h4'>
        {left}
        <div className='l-padding-r0 t-truncate t-font-size-20 flex' textContent={title} />
        <Icon
          className='t-bold c-white l-padding-h4'
          name='search'
          onClick={showSearch}
          size='small'
        />
        {right}
      </div>
      {secondary}
    </div>
  </div>;

AppToolbar.state = {
  onInit: (props, state, {onScroll})=> (
    requestAnimationFrame(()=> document.body.onscroll = onScroll),
    onScroll()
  ),

  onScroll: (props, state)=> {
    const scrollTop = document.body ? document.body.scrollTop : 0;
    return {
      scrollTop,
      scrollClass: (scrollTop > 60 && scrollTop - state.scrollTop > 0) ? ' is-scrolling-down': ''
    };
  }
};

export default AppToolbar;
