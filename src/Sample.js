import React,{useEffect, useState} from 'react';

export default function Sample() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("mount")
    return () =>{
      console.log("unmount")
    }
  }, []);
return (
  <>
  <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
  </>
);
}