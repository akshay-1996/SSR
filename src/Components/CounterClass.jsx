import React, {Component} from 'react';


class CounterClass extends Component {

  constructor(props){
    super(props);
    // this.myref = React.createRef();
    this.state = {
      value: 0
    }
  }

  increment=()=>{
    this.setState({
      value:this.state.value +1
    })
  }

  decrement=()=>{
    this.setState({
      value:this.state.value - 1
    })
  }


  render() { 
    return (
  <React.Fragment>
    <div class="box-latest">
      <h2 class="h2 articlesh2">Latest Articles</h2>
      <div class="articles-outerbox">
        <div class="articles">
          <figure>
            <img class="article-img" src="https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429__340.jpg" width="600" height="400" alt="image1"></img>
            <figcaption class="caption-class">By Claire Robinson</figcaption>
          </figure>
          <h4 class="h4">Receive money in any currency with no fees</h4>
                <p class="articles-p">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
        </div>
      </div>
    </div>
    <p>{this.state.value}</p>
    <button style={{color: "green"}} className="buttons" onClick={this.increment}>Increment</button>
    <button style={{color: "red"}} className="buttons" onClick={this.decrement}>Decrement</button>
  </React.Fragment>
    );
  }
}

 
export default CounterClass;