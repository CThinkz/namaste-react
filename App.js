const heading = React.createElement('h1', { id: 'heading' }, 'Logan');
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
console.log(heading); // its a react element, i.e javascript object

//we cant pass anything to root.render. It only takes REACT Element
const H1inJS = document.createElement('h1');
// root.render(H1inJS);

//adding child and sibling
const child = React.createElement(
  'div',
  { id: 'parent-1' },
  React.createElement(
    'div',
    { id: 'div-1' },
    React.createElement('h1', { id: 'h1-1' }, 'Logan')
  )
);
root.render(child);

const sibling = React.createElement('div', { id: 'parent-2' }, [
  React.createElement('h1', { id: 'h1-2' }, 'Logan'),
  React.createElement('h2', { id: 'h2-2' }, 'Wolverine'),
]);

// root.render(sibling);
