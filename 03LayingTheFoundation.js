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
root22.render(<H1 />);

// we can include React Element inside Component using curly braces
const Component1 = () => (
  <h4>I am a component and I have an element inside {element1}</h4>
);
console.log('Component1()', Component1());
console.log('<Component1/>', <Component1 />);
const root23 = ReactDOM.createRoot(document.getElementById('root-023'));
root23.render(<Component1 />);

//can we add jsx as a children? YES
const jsx = <h1>I am JSX inside React.createElement</h1>;
const element = React.createElement('div', { id: 'div' }, jsx);
const root24 = ReactDOM.createRoot(document.getElementById('root-024'));
root24.render(element);

// Can we include React Element inside React Element? YES,
const element2 = (
  <h1>I am an element and I have another element inside {element1}</h1>
);
const root25 = ReactDOM.createRoot(document.getElementById('root-025'));
root25.render(element2);

//Can we include Component inside React Element? YES
const Component2 = () => <div> I am a Component</div>;
const element3 = (
  <h1>I am an element and I have a component inside {<Component2 />}</h1>
);
console.log('Component2()', Component2());
console.log('<Component2/>', <Component2 />);
console.log('element3', element3);
const root26 = ReactDOM.createRoot(document.getElementById('root-026'));
root26.render(element3);

const PrintingTheState = () => {
  // const [state, setState] = useState('I have a state');
  return <div>This Component has a state</div>;
};
console.log('PrintingTheState()', PrintingTheState());
console.log('PrintingTheState', <PrintingTheState />);

const PrintingTheProps = (props) => {
  return (
    <div>
      This Component has 2 props {props?.id} and {props?.name}
    </div>
  );
};
const PropsWrapper = () => {
  return <PrintingTheProps id='dummy' name='YouHaveProp' />;
};
console.log('PrintingTheProps()', PrintingTheProps());
console.log('<PrintingTheProps/>', <PrintingTheProps />);
console.log('PropsWrapper()', PropsWrapper());
console.log('<PropsWrapper/>', <PropsWrapper />);

const root28 = ReactDOM.createRoot(document.getElementById('root-028'));
root28.render(<PropsWrapper />);
console.log('root28', root28);

const ComplexComponent = () => {
  return <Component1 />;
};
console.log('ComplexComponent()', ComplexComponent());
console.log('<ComplexComponent/>', <ComplexComponent />);
