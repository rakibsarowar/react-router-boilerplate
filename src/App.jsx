import React from 'react';

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-orange-600">
        Hello world!
      </h1>
      <div>
        <button className="btn">Button</button>
        <button className="btn btn-primary">Button</button>
        <button className="btn btn-secondary">Button</button>
        <button className="btn btn-accent">Button</button>
        <button className="btn btn-ghost">Button</button>
        <button className="btn btn-link">Button</button>
      </div>
    </div>
  );
};

export default App;