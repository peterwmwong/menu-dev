import './AppToolbar.css';
import xvdom from 'xvdom';
import App   from './App.jsx';
import Icon  from './common/Icon.jsx';

const showSearch = ()=> { App.showSearch() };

const AppToolbar = ({props: {title, secondary, left, right}, state: {scrollClass}})=>
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

const onScroll = ({state})=> {
  const scrollTop = document.body ? document.body.scrollTop : 0;
  return {
    scrollTop,
    scrollClass: (scrollTop > 60 && scrollTop - state.scrollTop > 0) ? ' is-scrolling-down': ''
  };
}

AppToolbar.state = {
  onInit: ({bindSend})=> (
    requestAnimationFrame(()=> document.body.onscroll = bindSend('onScroll')),
    onScroll({})
  ),

  onScroll
};

export default AppToolbar;
