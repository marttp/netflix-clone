# Learn React and React Ref by Building Netflix.

<img src="../../md-images/learning-react-by-building-netflix.png" alt="learn-react-by-building-netflix"/>

> Click :star: if you like the project. Pull Requests are highly appreciated :heart:

| No. | Topics |
| --- | --------- |
|0  | [Learn React By Building Netflix.](https://github.com/hieptl/netflix-clone) |
|1  | [Learn React and Redux By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-redux) |
|2  | [Learn React and Redux-Thunk By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-redux-thunk) |
|3  | [Learn React and Redux-Saga By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-redux-saga) |
|4  | [Learn React and Higher Order Component By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-higher-order-component) |
|5  | [Learn React and React Ref By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-ref) |

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚. 

> Before moving on with this part, you should follow the first part in this series:
>
> The first part - __Learn React By Building Netflix__:
>
> - Github: https://github.com/hieptl/netflix-clone
>
> - Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
>

The repository helps you learn React Ref by buiding Netflix. It means that you are learning React Ref by building a real-life project. I will explain concepts in detail. This post is the fifth part in my series and it is suitable for beginners.

My post is about __Learn React and React Ref By Building Netflix__ on Dev.to: https://dev.to/hieptl/learn-react-ref-by-building-netflix-1fb5

> If you feel the repository is useful, please help me share the post and give me a :star:. It will make me feel motivation to work even harder. I will try to make many open sources and share to the community.
>
> I also created some series that help you improve your practical skills: 
> 
> __1. Master Design Patterns by Building Real Projects - Javascript.__
>
> Github: https://github.com/hieptl/master-javascript-design-patterns-by-building-real-projects 
>
> Blog: https://dev.to/hieptl/series/13039
>

## __Preface__

This course will help you to learn React ref by building Netflix. It means that you are learning by doing a real-life project.

## __Table of Contents__
| No. | Topics |
| --- | --------- |
|0  | [How to Run the Project.](#how-to-run-the-project) |
|1  | [Live Demo.](#live-demo) |
|2  | [Introduction about the Creator.](#introduction-about-the-creator) |
|2.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Greenwich University.](#greenwich-university) |
|2.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hitachi Vantara Vietnam.](#hitachi-vantara-vietnam) |
|3  | [Prequisites.](#prequisites) |
|3.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Softwares.](#softwares) |
|3.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technical Skills.](#technical-skills) |
|3.3  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Materials.](#materials) |
|4  | [Purposes of the Course.](#purposes-of-the-course) |
|4.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Final Project.](#final-project) |
|4.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Job.](#job) |
|5  | [React Ref.](#react-ref) |
|5.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What.](#what) |
|5.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Why.](#why) |
|5.3  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When.](#when) |
|5.4  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How.](#how) |
|6  | [Scenarios](#scenarios) |
|7  | [Summary.](#summary) |
|8  | [Useful Resources to Learn React.](#useful-resources-to-learn-react) |
|9  | [References.](#references) 

## __Table of Images.__
| No. | Topics |
| --- | --------- |
|1  | [Figure 1: Detail Page - Netflix.](#figure1) |
|2  | [Figure 2: The Final Result.](#figure2) |


<a id="how-to-run-the-project"></a>
## __0. How to Run the Project.__

- Step 1: Clone the project by using git clone or download the zip file.

- Step 2: Open "terminal" / "cmd" / "gitbash" and change directory to "netflix-clone" and run "npm install" to install dependencies.

- Step 3: Run "npm start" to run the fron-end project.

<a id="live-demo"></a>
## __1. Live Demo.__

- https://dq1ts.csb.app

<a id="introduction-about-the-creator"></a>
## __2. Introduction about the Creator.__

<a id="greenwich-university"></a>
### __2.1. Greenwich University.__

- Valedictorian.

- GPA 4.0 / 4.0.

- Machine Learning paper - Recommendation System - IEEE/ICACT2020.

- Co-Founder / Mentor IT club.

<a id="hitachi-vantara-vietnam"></a>
### __2.2. Hitachi Vantara Vietnam.__

- Employee of the year.

- Second prize - innovation contest.

- Techlead - HN branch.

- One of CoE Leaders (Center of Excellence).

<a id="prequisites"></a>
## __3. Prequisites.__

<a id="softwares"></a>
### __3.1. Softwares.__

- Install NodeJS.

- An IDE or a text editor (VSCode, Intellij, Webstorm, etc).

<a id="technical-skills"></a>
### __3.2. Technical Skills.__

- Basic programming skill.

- Basic HTML, CSS, JS skills.

<a id="materials"></a>
### __3.3. Materials.__

- Html, css, js (source code) was prepared because I want to focus on React and share knowledge about React. Building html and css from scratch would take a lot of time.

- README.md (the md file will contain everything about the course).

- Netflix data will be used to import to Firebase. In this course, we use Firebase as our back-end service.

<a id="purposes-of-the-course"></a>
## __4. Purposes of the Course.__

<a id="final-project"></a>
### __4.1. Final Project.__

- The course would help you have understanding about React.

- You could build the final project with end-to-end solution (front-end solution using React and back-end solution using Firebase).

<a id="job"></a>
### __4.2. Job.__

- After finishing the course, you could get a job with fresher / junior position.

<a id="react-ref"></a>
## __5. React Ref.__

<a id="what"></a>
### __5.1. What.__

- React ref is used to return a reference to the DOM.
- It should be avoided in most cases.
- It would be usedful when you need to access directly to the DOM.

<a id="why"></a>
### __5.3. Why__

- In some cases, we need to access to the DOM. ref will be useful.
- On the other hand, when we need to interact with uncontrolled components, we also need to use ref. Uncontrolled componnents store their own state internally.

<a id="when"></a>
### __5.4. When__

- Incrementing / decrementing input values. 
- Getting input values.
- Selecting or cycling through form values.
- Media playback.
- Transitions and keyframe animations.

<a id="how"></a>
### __5.5. How__

We have several ways to define a ref in React application

- React.createRef().
- useRef().
- Ref callback.

> We will talk about all of those approaches. On the other hand, we also discuss about how to let a component take a ref and pass it further down to a child by using __React.fowardRef__

<a id="scenarios"></a>
## 6. Scenarios.

<a id="figure1"></a>
<img src="../../md-images/netflix-detail1.png" alt="reduc-middleware-architecture" width="666"/>

Figure 1. Detail Page - Netflix.

In the first part of this series, we implemented the detail page and we show the detail page when the user selects a movie. The current solution is to show the detail page by using conditional rendering in React.

```js
...
{selectedMovie && (
  <Detail movie={selectedMovie} onDetailClosed={closeDetail} />
)}
...
```

However, in order to understand React ref. We will try to achieve the same result by using React ref. Therefore, we can understand React ref.

- Step 1: Update the __index.css__ file: 

```js
...
.detail {
  background: #111;
  bottom: 0;
  position: fixed;
  right: -100%;
  top: 0;
  width: 450px;
  z-index: 999;
  transition: 0.5s;
}

.detail--active {
  right: 0;
}
...
```

- Step 2: Update __Home.js__ with the following code:

```js
...
<Detail
  movie={movie}
  onDetailClosed={this.closeDetail}
/>
...
```

- Step 3: Update __Detail.js__ with the following code: 

```js
...
<div className="detail">
  {/* Detail Banner Image */}
  <div
    className="detail__image"
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
    }}
  >
    <span className="detail__title">{movie?.original_name}</span>
  </div>
  {/* End Detail Banner Image */}
  {/* Detail Fade Bottom Animation */}
  <div className="banner--fadeBottom detail__fade-image"></div>
  {/* End Detail Fade Bottom Animation */}
  {/* Detail Actions */}
  <div className="detail__actions">
    <button className="detail__btn mgr-8">Play</button>
    <button className="detail__btn" onClick={onDetailClosed}>
      Back
    </button>
  </div>
  <div className="detail__description">
    <div className="detail__description-title">Description</div>
    <p className="detail__description-content">{movie?.overview}</p>
  </div>
  {/* End Detail Actions */}
</div>
...
```

- Step 4: Define a ref in __Detail.js__ by using __useRef()__. The __Detail.js__ will be like this:

```js
// import useRef to define ref in function component.
import { useRef, useEffect } from "react";

/**
 * create Detail component
 * @param {*} props which are passed to Detail component.
 */
function Detail(props) {
  /**
   * NOTE:
   * - We are defining Detail as a function component.
   * - We cannot use React.createRef in a function component.
   * - useRef hooks could be a alternative solution.
   */

  // get props.
  const { movie, onDetailClosed } = props;

  const detailRef = useRef(null);

  useEffect(() => {
    if (detailRef && detailRef.current) {
      console.log(movie);
      if (movie) {
        detailRef.current.className += " detail--active";
      } else {
        detailRef.current.className = detailRef.current.className.replace(
          " detail--active",
          ""
        );
      }
    }
  }, [movie]);

  // return detail elements.
  return (
    <div className="detail" ref={detailRef}>
      {/* Detail Banner Image */}
      <div
        className="detail__image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
        }}
      >
        <span className="detail__title">{movie?.original_name}</span>
      </div>
      {/* End Detail Banner Image */}
      {/* Detail Fade Bottom Animation */}
      <div className="banner--fadeBottom detail__fade-image"></div>
      {/* End Detail Fade Bottom Animation */}
      {/* Detail Actions */}
      <div className="detail__actions">
        <button className="detail__btn mgr-8">Play</button>
        <button className="detail__btn" onClick={onDetailClosed}>
          Back
        </button>
      </div>
      <div className="detail__description">
        <div className="detail__description-title">Description</div>
        <p className="detail__description-content">{movie?.overview}</p>
      </div>
      {/* End Detail Actions */}
    </div>
  );
}
// export Detail component.
export default Detail;
```

> __1st NOTE__:
>
> - We are defining Detail as a function component.
>
> - We cannot use React.createRef in a function component.
>
> - useRef hooks could be a alternative solution.
>
> - We attach the ref to the detail DOM.
>
> ```js
> <div className="detail" ref={detailRef}>
> ``` 
> 
> - We use __useEffect__ to perform some actions when the user selects a movie. It means that when the __Detail__ component receives __movie__ props from the __Home__ component. 
>
> ```js
> 
> useEffect(() => {
>  if (detailRef && detailRef.current) {
>    if (movie) {
>      detailRef.current.className += " detail--active";
>    } else {
>      detailRef.current.className = detailRef.current.className.replace(
>        " detail--active",
>        ""
>      );
>    }
>  }
>}, [movie]);
> ```
>
> - After attaching the ref to the DOM, we can access to the DOM by using __ref_name.current__. In this case, we will add __detail--active__ css class to show the detail panel if a movie is selected and vice versa.
>
> - Let's discuss about other scenarios. In the case, we want to access the DOM of the child component from the parent component. It is time to talk about __React.forwardRef()__.

- Step 5: Update __Detail.js__ with the following code:

```js
import React from "react";

const Detail = React.forwardRef((props, ref) => {
  /**
   * NOTE:
   * - We are defining Detail as a function component.
   * - We cannot use React.createRef in a function component.
   * - useRef hooks could be a alternative solution.
   */

  // get props.
  const { movie, onDetailClosed } = props;

  // return detail elements.
  return (
    <div className="detail" ref={ref}>
      {/* Detail Banner Image */}
      <div
        className="detail__image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
        }}
      >
        <span className="detail__title">{movie?.original_name}</span>
      </div>
      {/* End Detail Banner Image */}
      {/* Detail Fade Bottom Animation */}
      <div className="banner--fadeBottom detail__fade-image"></div>
      {/* End Detail Fade Bottom Animation */}
      {/* Detail Actions */}
      <div className="detail__actions">
        <button className="detail__btn mgr-8">Play</button>
        <button className="detail__btn" onClick={onDetailClosed}>
          Back
        </button>
      </div>
      <div className="detail__description">
        <div className="detail__description-title">Description</div>
        <p className="detail__description-content">{movie?.overview}</p>
      </div>
      {/* End Detail Actions */}
    </div>
  );
});
// export Detail component.
export default Detail;
```

> __2nd NOTE__:
>
> - __React.forwardRef__ is used to let a component take a ref and pass it further down to a child and it accepts an arrow function as parameter.
>
> - __ref__ will not be included in __props__. Hence, it is the second parameter of the arrow function.
>
> - We attach the passed ref from the parent component to the DOM.
>
> ```js
> <div className="detail" ref={ref}>
> ```
>
> - Let's define the ref in the parent component. We will two approaches in order to define the ref and they are __React.createRef()__ and __Ref callback__.

- Step 6: Update the __Home.js__ by using React.createRef()

```js
// import react.
import React from "react";
// import custom components.
import Nav from "../nav/Nav";
import Header from "../header/Header";
import Row from "../row/Row";
import Detail from "../detail/Detail";
/**
 * create Home component.
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null
    };
    this.detailRef = React.createRef();
  }

  /**
   * select movie
   * @param {*} movie which is chosen by the user.
   */
  selectMovie = (movie) => {
    // update "selectedMovie" state.
    this.setState(() => ({
      selectedMovie: movie
    }));
  };

  /**
   * close detail panel when the user clicks on "Back" button.
   */
  closeDetail = () => {
    // update selected movie to null in order to hide the detail panel.
    this.setState(() => ({
      selectedMovie: null
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.detailRef) {
      if (this.state.selectedMovie) {
        this.detailRef.current.className += " detail--active";
      } else {
        this.detailRef.current.className = this.detailRef.current.className.replace(
          " detail--active",
          ""
        );
      }
    }
  }

  render() {
    return (
      <>
        <div className="app">
          {/* Nav */}
          <Nav />
          {/* End Nav */}
          {/* Header */}
          <Header />
          {/* Header */}
          {/* Row */}
          <Row
            title="Netflix Originals"
            movieType="netflix-originals"
            onMovieSelected={this.selectMovie}
          />
          <Row
            title="Trending Now"
            movieType="trending-now"
            onMovieSelected={this.selectMovie}
          />
          <Row
            title="Top Rated"
            movieType="top-rated"
            onMovieSelected={this.selectMovie}
          />
          <Row
            title="Action Movies"
            movieType="action-movies"
            onMovieSelected={this.selectMovie}
          />
          <Row
            title="Horror Movies"
            movieType="horror-movies"
            onMovieSelected={this.selectMovie}
          />
          <Row title="Romance Movies" movieType="romance-movies" />
          <Row
            title="Documentaries Movies"
            movieType="documentaries-movies"
            onMovieSelected={this.selectMovie}
          />
          {/* End Row */}
        </div>
        {/* Detail */}
        <Detail
          movie={this.state.selectedMovie}
          onDetailClosed={this.closeDetail}
          ref={this.detailReffCallback}
        />
        {/* End Detail */}
      </>
    );
  }
}
// export Home component.
export default Home;
```

> __3rd NOTE__:
>
> - We need to define __Home__ component as a class component so that we can use __React.createReact()__
> 
> - We define the __detailRef__ in the constructor.
>
> ```js
> this.detailRef = React.createRef();
> ```
>
> - We pass the created ref from the __Home__ component to the __Detail__ component.
> 
> ```js
> <Detail
>  movie={this.state.selectedMovie}
>  onDetailClosed={this.closeDetail}
>  ref={this.detailReffCallback}
> />
> ```
>
> - The next part, which should be noticed, is __componentDidUpdate__. As mentioned above, we just want to show the __Detail__ component when a movie is selected and we define __selectedMovie__ as state, __componentDidUpdate__ will be triggered when the state is changed. We write the logic to show /hide the __Detail__ component like what have done before inside __componentDidUpdate__.
>
> ```js
> componentDidUpdate(prevProps, prevState) {
>    if (this.detailRef) {
>      if (this.state.selectedMovie) {
>        this.detailRef.current.className += " detail--active";
>      } else {
>        this.detailRef.current.className = this.detailRef.current.className.replace(
>          " detail--active",
>          ""
>        );
>      }
>    }
>  }
> ```
> 
> - Let's try other approach. It means that we will define the ref in the __Home__ component by using __Ref callback__ instead of using __React.createRef__.

- Step 7: Update the __Home__ component with the following code: 

```js
// import react.
import React from "react";
// import custom components.
import Nav from "../nav/Nav";
import Header from "../header/Header";
import Row from "../row/Row";
import Detail from "../detail/Detail";
/**
 * create Home component.
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null
    };
    // this.detailRef = React.createRef();
    this.detailRef = null;
  }

  detailReffCallback = (element) => {
    this.detailRef = element;
  };

  /**
   * select movie
   * @param {*} movie which is chosen by the user.
   */
  selectMovie = (movie) => {
    // update "selectedMovie" state.
    this.setState(() => ({
      selectedMovie: movie
    }));
  };

  /**
   * close detail panel when the user clicks on "Back" button.
   */
  closeDetail = () => {
    // update selected movie to null in order to hide the detail panel.
    this.setState(() => ({
      selectedMovie: null
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.detailRef) {
      if (this.state.selectedMovie) {
        this.detailRef.className += " detail--active";
      } else {
        this.detailRef.className = this.detailRef.className.replace(
          " detail--active",
          ""
        );
      }
    }
  }

  render() {
    return (
      <>
        <div className="app">
          {/* Nav */}
          <Nav />
          {/* End Nav */}
          {/* Header */}
          <Header />
          {/* Header */}
          {/* Row */}
          <Row
            title="Netflix Originals"
            movieType="netflix-originals"
            onMovieSelected={this.selectMovie}
          />
          <Row
            title="Trending Now"
            movieType="trending-now"
            onMovieSelected={this.selectMovie}
          />
          <Row
            title="Top Rated"
            movieType="top-rated"
            onMovieSelected={this.selectMovie}
          />
          <Row
            title="Action Movies"
            movieType="action-movies"
            onMovieSelected={this.selectMovie}
          />
          <Row
            title="Horror Movies"
            movieType="horror-movies"
            onMovieSelected={this.selectMovie}
          />
          <Row title="Romance Movies" movieType="romance-movies" />
          <Row
            title="Documentaries Movies"
            movieType="documentaries-movies"
            onMovieSelected={this.selectMovie}
          />
          {/* End Row */}
        </div>
        {/* Detail */}
        <Detail
          movie={this.state.selectedMovie}
          onDetailClosed={this.closeDetail}
          ref={this.detailReffCallback}
        />
        {/* End Detail */}
      </>
    );
  }
}
// export Home component.
export default Home;
```

> __4th NOTE__:
>
> - We define a ref callback. Actually, it is just an arrow function and it accepts the DOM element as parameter and then assign the DOM element to the instance variable. We can use that instance variable as the reference to the DOM.
>
> ```js
> detailReffCallback = (element) => {
>  this.detailRef = element;
> };
> ```
> - Because we assign the DOM element to the __detailRef__ directly. For this reason, when we need to access to the DOM, we do not need to write:
>
> ```js
> this.detailRef.current.className
> ``` 
> - We just need to write:
> 
> ```js
> this.detailRef.className
> ```



<a id="summary"></a>
## __Summary__

- React ref is used to return a reference to the DOM.

- It should be avoided in most cases.

- It would be usedful when you need to access directly to the DOM.

- We have several ways to define a ref: __React.createRef__, __Ref callback__, __useRef__.

- We can let a component take a ref and pass it further down to a child by using __React.forwardRef((props, ref))__. __ref__ will not be included in the __props__, it should be defined separately.

Thank you so much for taking the course. I hope that you could understand about React ref and you can build many real-life projects by using React (as front-end) and Firebase (as back-end) in order to solve many problems and make our life become better.

<a id="useful-resources-to-learn-react"></a>
## __Useful Resources to Learn React.__

[1]. https://reactjs.org/docs/getting-started.html.

<a id="references"></a>
## __References__

[1]. https://reactjs.org/docs/getting-started.html. \
[2]. https://firebase.google.com/docs/database. \
[3]. https://firebase.google.com/docs/auth/web/password-auth. \
[4]. https://firebase.google.com/docs/hosting.
