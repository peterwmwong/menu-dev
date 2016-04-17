import './List.css';
import xvdom  from 'xvdom';
import Avatar from './Avatar.jsx';
import Icon   from './Icon.jsx';

export default ({className, context, list, item, noDivider, transform})=> {
  const listClass = `List-item layout horizontal center t-normal ${noDivider ? 'List-item--noDivider' : ''}`;
  list = list || [];
  if(transform) list = transform(list);
  return (
    <div className={className} hidden={!list || !list.length} >
      {list.map((el, index)=> {
        const {href, key=index, icon, text, secondaryText} = item(el, context);
        return (
          <a className={listClass} href={href} key={key}>
            {icon && <Icon className='l-margin-r2' name={icon} />}
            <div className='l-margin-l1'>
              {text}
              <div
                className='t-light t-font-size-14 c-gray-dark'
                textContent={secondaryText || ''}
              />
            </div>
          </a>
        );
      })}
    </div>
  )
}
