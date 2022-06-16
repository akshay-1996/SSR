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
                <p className="articles-p">The world is getting busier. Take some time out to visit The Hills to find moments of …</p>
            </div>
            <div>
              <carousel
                id="carousel-with-preview"
                width="450"
                height="300"
                layout="responsive"
                type="slides"
                role="region"
                aria-label="Carousel with slide previews">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  width="450"
                  height="300"
                  layout="responsive"
                  alt="apples">
                </img>
                <img
                  src="https://image.shutterstock.com/image-photo/high-mountain-morning-time-beautiful-260nw-1384588922.jpg"
                  width="450"
                  height="300"
                  layout="responsive"
                  alt="lemons">
                </img>
                <img
                  src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
                  width="450"
                  height="300"
                  layout="responsive"
                  alt="blueberries">
                </img>
              </carousel>
              <div className="carousel-preview">
                <button on="tap:carousel-with-preview.goToSlide(index=0)">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    width="60"
                    height="40"
                    alt="apples">
                  </img>
                </button>
                <button on="tap:carousel-with-preview.goToSlide(index=1)">
                  <img
                    src="https://image.shutterstock.com/image-photo/high-mountain-morning-time-beautiful-260nw-1384588922.jpg"
                    width="60"
                    height="40"
                    alt="lemons">
                  </img>
                </button>
                <button on="tap:carousel-with-preview.goToSlide(index=2)">
                  <img
                    src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
                    width="60"
                    height="40"
                    alt="blueberries">
                  </img>
                </button>
            </div>
{/* 
<carousel
  id="carousel-with-preview"
  width="450"
  height="300"
  layout="responsive"
  type="slides"
  role="region"
  aria-label="Carousel with slide previews"
>
  <img
    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    width="450"
    height="300"
    layout="responsive"
    alt="apples"
  ></img>
  <img
    src="https://image.shutterstock.com/image-photo/high-mountain-morning-time-beautiful-260nw-1384588922.jpg"
    width="450"
    height="300"
    layout="responsive"
    alt="lemons"
  ></img>
  <img
    src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
    width="450"
    height="300"
    layout="responsive"
    alt="blueberries"
  ></img>
</carousel>
<div class="carousel-preview">
  <button on="tap:carousel-with-preview.goToSlide(index=0)">
    <img
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      width="60"
      height="40"
      alt="apples"
    ></img>
  </button>
  <button on="tap:carousel-with-preview.goToSlide(index=1)">
    <img
      src="https://image.shutterstock.com/image-photo/high-mountain-morning-time-beautiful-260nw-1384588922.jpg"
      width="60"
      height="40"
      alt="lemons"
    ></img>
  </button>
  <button on="tap:carousel-with-preview.goToSlide(index=2)">
    <img
      src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
      width="60"
      height="40"
      alt="blueberries"
    ></img>
  </button>
</div> */}
            <amp-accordion class="myaccordion">
              <section expanded>
                  <h3>Ships</h3>
                  <div class="content">
                      <amp-img src="https://cdn.pixabay.com/photo/2016/05/02/10/13/ship-1366926__340.jpg" width="640" height="480">
                          <div fallback>Image could not be loaded</div>
                      </amp-img>
                  </div>
              </section>
              <section>
                  <h3>Beautiful butterflies</h3>
                  <div class="content">
                      <amp-img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg" width="640" height="480">
                          <div fallback>Image could not be loaded</div>
                      </amp-img>
                  </div>
              </section>
              <section>
                  <h3>Hills</h3>
                  <div class="content">
                      <amp-img src="https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429__340.jpg" width="640" height="480">
                          <div fallback>Image could not be loaded</div>
                      </amp-img>
                  </div>
              </section>
          </amp-accordion>
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