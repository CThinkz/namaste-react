import React from 'react'; //in case if we dont use CDNs
import ReactDOM from 'react-dom/client';

//It's a React Element! i.e JS Object
const element1 = <div>Logan..</div>;
console.log('reactElement', element1);
const root21 = ReactDOM.createRoot(document.getElementById('root-021'));
root21.render(element1);

const h1 = () => <div>Hello World - 2</div>; //It's a React Component (because its a function returing react element)
const H1 = () => <div>Hello World - 2</div>; //It's a React Component (because its a function returing react element)
const root22 = ReactDOM.createRoot(document.getElementById('root-022'));
// root22.render(<h1 />); //doesn't identify as its smallCase
root22.render(<H1 />); //doesn't identify as its smallCase

// we can include React Element inside Component using curly braces
const Component1 = () => (
  <h4>I am a component and I have an element inside {element1}</h4>
);
const root23 = ReactDOM.createRoot(document.getElementById('root-023'));
root23.render(<Component1 />);

/** Below ones are not working!! */

// Can we include React Element inside React Element?
/*const element2 = (
  <h1>I am an element and I have another element inside {element1}</h1>
);
const root24 = ReactDOM.createRoot(document.getElementById('root-024'));
root24.render(element2);*/

//Can we include Component inside React Element?
/** const Component2 = <div> I am a Component</div>;
const element3 = (
  <h1>
    I am an element and I have a component inside <Component2 />{' '}
  </h1>
);
const root25 = ReactDOM.createRoot(document.getElementById('root-025'));
root25.render(element3); */
