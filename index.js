
const heading = React.createElement("h1", {}, "Hello World Using React");

const rootElement = document.querySelector(".root");

// Create a React root and render the component
const root = ReactDOM.createRoot(rootElement);
root.render(heading);
