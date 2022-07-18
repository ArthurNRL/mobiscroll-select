import logo from './logo.svg';
import './App.css';
import '@mobiscroll/react/dist/css/mobiscroll.scss';   

import { Select } from '@mobiscroll/react';

const data = ['1', '2']
function App() {
  return (
    <div className="App">
    <Select 
      // isOpen={true}
      selectMultiple={true} 
      data={data}
     />
    </div>
  );
}

export default App;
