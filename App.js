import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {id: 'heading'}, 'Logan');
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
console.log(heading); // its a react element, i.e javascript object

//we cant pass JS Element to root.render. It only takes REACT Element
const H1inJS = document.createElement('h1');
// root.render(H1inJS);

//adding child and sibling
const child = React.createElement(
  'div',
  {id: 'parent-1'},
  React.createElement(
    'div',
    {id: 'div-1'},
    React.createElement('h1', {id: 'h1-1'}, 'Logan')
  )
);
root.render(child);

const sibling = React.createElement('div', {id: 'parent-2'}, [
  React.createElement('h1', {id: 'h1-2'}, 'Logan'),
  React.createElement('h2', {id: 'h2-2'}, 'Wolverine'),
]);

// root.render(sibling);

const heading2 = <h1>I am JSX</h1>;
console.log('heading2', heading2);
const parent2 = React.createElement('div', {id: 'parent'}, heading2); //This is also possible
root.render(parent2);

//valid
root.render(<h1>Heello</h1>);

//component i.e React.createComponent()
const MyComponent = () => <h1>I am a Component</h1>;
root.render(<MyComponent />);

//element i.e React.createElement()
const title = <span>Title</span>;

const myComponent = () => <h1>I am a Component</h1>;
//no error, but does not work! it treats it as inbuilt html component or a string
root.render(<myComponent />);

//this is possible, adding Component inside an Element
const compositeTitle = (
  <span>
    Title <MyComponent />
  </span>
);
root.render(compositeTitle);
