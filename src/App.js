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
    // <carousel
    const data0 = data.replace("<accordion","<amp-accordion");
    const data1 = data0.replace("</accordion>","</amp-accordion>");
    const data2 = data1.replace("<carousel","<amp-carousel");
    const data3 = data2.replace("</carousel>","</amp-carousel>");
    const data4 = data3.replace("<img","<amp-img");
    const a = data4.replace("</img>","</amp-img>");
    // console.log(a);
    // console.log(typeof a);
    const element = document.getElementById("root");
    element.remove();
    document.body.insertAdjacentHTML("beforeend",a);
  })

  return (
    <div>
      <CounterFunction/>
    </div>
   );
}

export default App;