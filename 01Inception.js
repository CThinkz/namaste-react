//create and append element using JS
const jsRoot = document.getElementById('root');
const h1 = document.createElement('h1');
h1.innerHTML = 'Hello World';
jsRoot.appendChild(h1);

//using React (It doesnn't append, instead it replaces the existing HTML inside of <div id="root"/>)
const h1Element = React.createElement(
  'h1',
  { id: 'h1', className: 'my-heading' },
  'Logan..'
);
console.log('h1Element', h1Element);
const root = ReactDOM.createRoot(document.getElementById('root-011'));
root.render(h1Element);

//array of children
const divElement = React.createElement('div', { id: 'parent' }, [
  'I am div',
  React.createElement('h2', { id: 'h2-1' }, 'Inside Div'),
  React.createElement('h2', { id: 'h2-2' }, 'Inside Div - 2'),
]);
console.log('divElement', divElement);
const root2 = ReactDOM.createRoot(document.getElementById('root-012'));
root2.render(divElement);
