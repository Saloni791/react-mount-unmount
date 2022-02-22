import React, {useState}  from 'react';
import "./style.css";
import Sample  from './Sample';


export default function App() {
  const [showHide, setShowHide] = useState(false);

  return (
    <div>
    <button onClick={() =>setShowHide(!showHide)}>show</button>
    {showHide && <Sample/>}
    </div>
  );
}
