import React, { useEffect } from 'react';
import CounterFunction from './Components/CounterFunction';
import "./App.css";

function App() {

  useEffect(()=>{
    // console.log(document.body);
    // console.log(typeof document.body);
    const data = document.body.innerHTML
    // console.log(data);
    // console.log(typeof data);
    const data1 = data.replace("<img","<amp-img");
    const a = data1.replace("</img>","</amp-img>");
    // console.log(a);
    // console.log(typeof a);
    const element = document.getElementById("root");
    element.remove();
    document.body.insertAdjacentHTML("beforeend",a);
    // const a = document.getElementsByTagName("p")[0];
    // console.log(a);
    // const b = document.createElement("div");
    // console.log(b);
    // b.innerHTML = a.innerHTML;
    // document.body.replaceChild(b,a);
    // console.log(document.body);
  })

  return (
    <div>
      <CounterFunction/>
    </div>
   );
}

export default App;