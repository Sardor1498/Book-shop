import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Content from './Layout/Content';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(1);

  // function addCount() {
  //   setCount(count);
  // }

  return (
    <div className="App">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Header count={count} />
        </div>
        <div className="col-span-12 px-2">
          <Content
            setCount={setCount}
            count={count}
          />
        </div>
      </div>
      <div className="col-span-12">
        <Footer />
      </div>
    </div>
  );
}

export default App;
