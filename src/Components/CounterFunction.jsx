import React from 'react';


function CounterFunction() {
  const [count, setCount] = React.useState(0)

  const increment=()=>{
    setCount(count+1)
  }

  const decrement=()=>{
    setCount(count-1)
  }

  return (
    <React.Fragment>
      <div className="box-latest">
        <h2 className="h2 articlesh2">Latest Articles</h2>
        <div className="articles-outerbox">
            <div className="articles">
                <figure>
                    <img className="article-img" src="https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429__340.jpg" width="600" height="400" alt="image1"></img>
                    <figcaption className="caption-className">By Claire Robinson</figcaption>
                </figure>
                <h4 className="h4">The Hills</h4>
                <p className="articles-p">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
            </div>
        </div>
      </div>
      <p className='tag-p'>{count}</p>
      <p id="test">Hello</p>
      <button style={{color: "black"}} className="buttons" on="tap:test.toggleVisibility">AMP Toggle Visibility</button>
      <button style={{color: "green"}} className="buttons" onClick={increment}>Increment</button>
      <button style={{color: "red"}} className="buttons" onClick={decrement}>Decrement</button>
    </React.Fragment>
  );
}

export default CounterFunction;