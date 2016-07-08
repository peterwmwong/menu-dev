export default (Model, type, Component)=> {
  const onInit = ({props, bindSend})=> (
    Model[type](props).then(bindSend('onLoadModel')),
    Model[type === 'get' ? 'localGet' : 'localQuery'](props)
  );
  Component.state = {
    onInit,
    onProps: onInit,
    onLoadModel: (component, model)=> model
  }
  return Component;
}
