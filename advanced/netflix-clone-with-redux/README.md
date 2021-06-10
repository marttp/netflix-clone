# Learn Redux by Building Netflix.

<img src="../../md-images/learning-react-by-building-netflix.png" alt="learn-react-by-building-netflix"/>

> Click :star: if you like the project. Pull Requests are highly appreciated :heart:

| No. | Topics |
| --- | --------- |
|0  | [Learn React By Building Netflix.](https://github.com/hieptl/netflix-clone) |
|1  | [Learn React and Redux By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-redux) |
|2  | [Learn React and Redux-Thunk By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-redux-thunk) |

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚. 

> Before moving on with this part, you should follow the first part in this series:
>
> - Github: https://github.com/hieptl/netflix-clone
>
> - Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127

The repository helps you learn Redux by buiding Netflix. It means that you are learning Redux by building a real-life project. I will explain concepts in detail. This post is the second part in my series and it is suitable for beginners.

My post is about __Learn Redux By Building Netflix__ on Dev.to: https://dev.to/hieptl/learn-redux-by-building-netflix-4dem

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

This course will help you to learn Redux by building Netflix. It means that you are learning by doing a real-life project. You will learn the following Redux concepts:

- Redux.
- React Redux.
- actions.
- reducers.
- store.
- combineReducers.
- createStore.
- useDispatch.
- useSelector.

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
|5  | [Redux.](#redux) |
|5.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What.](#what) |
|5.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Architecture of Redux.](#job) |
|5.3  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Why.](#why) |
|5.4  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When.](#when) |
|5.5  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How.](#how) |
|6  | [Show Loading Component By Using Redux - Netflix.](#show-loading-component-by-using-redux-netflix) |
|7  | [Summary.](#summary) |
|8  | [Useful Resources to Learn React.](#useful-resources-to-learn-react) |
|9  | [References.](#references) 

## __Table of Images.__
| No. | Topics |
| --- | --------- |
|1  | [Figure 1: Redux.](#figure1) |
|2  | [Figure 2: Loading Component.](#figure2) |


<a id="how-to-run-the-project"></a>
## __0. How to Run the Project.__

- Step 1: Clone the project by using git clone or download the zip file.

- Step 2: Open "terminal" / "cmd" / "gitbash" and change directory to "netflix-clone" and run "npm install" to install dependencies.

- Step 3: Run "npm start" to run the fron-end project.

<a id="live-demo"></a>
## __1. Live Demo.__

- https://oxile.csb.app/

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

<a id="what-is-redux"></a>
## __5. Redux__

<a id="what"></a>
### __5.1. What__

- It is a predictable state container. 
- It is based on Flux pattern. 
- Is is just 2Kb.
- It has no dependencies.

<a id="the-architecture-of-redux"></a>
### __5.2. The Architecture of Redux__

<a id="figure1"></a>
<img src="../../md-images/redux-architecture.gif" alt="drawing" width="666"/>

Figure 1. Redux.

<a id="why"></a>
### __5.3. Why__

- It provides a single source of truth.
- State is read only.
- Changes are made with pure function.
- Changes in your application will be more predictable and traceable.
- It is easy to integrate with any view libraries.

<a id="when"></a>
### __5.4. When__

- Not all apps need Redux. It's important to understand the kind of application you're building, the kinds of problems that you need to solve, and what tools can best solve the problems you're facing.

- Redux helps you deal with shared state management, but like any tool, it has tradeoffs. It's not designed to be the shortest or fastest way to write code.

- It helps answer the question "When did a certain slice of state change, and where did the data come from?"

- It's a trade-off between short term and long term productivity.

<a id="how"></a>
### __5.5. How__

Firstly, we need to understand the flow first. 

- The components will get state from the store. Whenever the state is changed, the components will be re-rendered.

- The components will dispatch actions to tell the reducers update the state in the store.

- The reducers will take the responsibility to update the state. It will be used to return the latest state. In fact, we will not dispatch actions in the reducers. It is an anti-patten, we should avoid that.

In order to integrate Redux in our Netflix application, please follow the below steps: 

- Step 1: define the actions including the actions and the action's types.

- Step 2: define the reducers.

- Step 3: define the store.

- Step 4: Use the store in our application.

- Step 5: Let our components get the state from the store.

- Step 6: Let our components dispatch the actions to the store.

<a id="show-loading-component-by-using-redux-netflix"></a>
## 6. Show Loading Component by Using Redux - Netflix.

<a id="figure2"></a>
<img src="../../md-images/netflix-loading-indicator.png" alt="drawing" width="666"/>

In this course, we will understand Redux by building Loading component for our Netflix application.

First of all, we need to know about why Redux should be applied to show Loading. As mentioned before, Redux helps you deal with shared state management. On the other hand, every pages need to show Loading component when fetching apis from the server. For this reasons, the state of Loading component should be available globally and should be shared between components. That's why we want to use Redux in this case.

- Step 1: Create __Loading.js__ file in __src/components__ folder to define Loading component.

```js
function Loading() {
  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
```

- Step 2: Copy the following css to the bottom of the index.css file.

```js

.lds-roller {
  display: inline-block;
  position: fixed;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 48%;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> __1st NOTE__: 
>- The next step is to define the action's types.
>
>- Actually, we would have many actions in our applications. Each action has specific name. We should not hardcode the name.
>
>- The best practice is to define the action's types as constant variables and import them in different places in the application.

- Step 3: Create a folder which is called __actions__, __actions__ folder will be used to contain redux's actions in the applications. Following that, we need to create __LoadingActionTypes.js__. __LoadingActionTypes.js__ defines the action's types for Loading component. Those action's types will be used to update the state of Loading component.

```js
export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";
```

> __2nd NOTE__: 
>
> - After the actions were dispatched, the reducer will update the state based on the dispatched actions.
>
> - It is time to define the __LoadingReducer__ in our application.

- Step 4: Create a folder which is called __reducers__, __reducers__ folder will be used to contain reducers in the applications. Following that, we need to create __LoadingReducer.js__ in __reducers__ folder.

```js
// import loading actiont types.
import * as loadingActionTypes from "../actions/LoadingActionTypes";

const initialState = {
  isLoadingShown: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case loadingActionTypes.SHOW_LOADING:
      return {
        ...state,
        isLoadingShown: true
      };
    case loadingActionTypes.HIDE_LOADING:
      return {
        ...state,
        isLoadingShown: false
      };
    default:
      return state;
  }
}

export default reducer;
```

> __3rd NOTE__: 
>
> __initialState__: defines the initial state for loading. It means that when we refresh the web page or go to the web page for the first time. Loading component will be hidden.
>
> __reducer__: It is a function that accept state and action as parameters. It will update the state for loading and return the latest state.
>
> In fact, we will have many reducers in our application. For this reason, we should combine all reducers into a single reducer.

- Step 5: Define __index.js__ in __reducers__ folder. It work as the root reducer.

```js
// import combine reducer.
import { combineReducers } from "redux";
import loading from "./LoadingReducers";

export default combineReducers({
  loading
});

```

> __4th NOTE__: 
>
> - After defining the reducers, we need to define the store.
>

- Step 6: Define __store.js__ in __src__ folder.

```js
// import create store
import { createStore } from "redux";
// import root reducer.
import reducer from "./reducers";

export default createStore(reducer);
```

> __5th NOTE:__
>
> - createStore: defines the store. It accepts the root recuer as parameter.
>
> - Before moving on, we should refactor our App.js

- Step 7: Create __Layout.js__ file in __components__ folder. 

```js
// import react router dom.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import custom components.
import Home from "../home/Home";
import Login from "../login/Login";
import Loading from "../loading/Loading";

function Layout() {
  return (
    <>
      <Router>
        <Switch>
          {/* Home Route */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* End Home Route */}
          {/* Login Route */}
          <Route exact path="/login">
            <Login />
          </Route>
          {/* End Login Route */}
        </Switch>
      </Router>
      <Loading />
    </>
  );
}

export default Layout;
```

> __6th NOTE:__
>
> - Now our __App__ component should be like this:
>
> ```js
>// import custom components.
>import Layout from './components/layout/Layout';
>// import global styling.
>import "./index.css";
>// create App components.
>function App() {
>  return <Layout />
>}
>// export App component.
>export default App;
>
> ```
>
> - If you run the code, Loading component will be shown. However, we just want to show when we fetch apis from the server. 
>
> - It is time to get the state from Redux's store.
>
> - If the loading state is true, we will show Loading component and vice versa.
> 

- Step 8: Update __App.js__ with the following code: 

```js
// import custom components.
import Layout from './components/layout/Layout';
// import global styling.
import "./index.css";
// import provicer.
import { Provider } from "react-redux";
// import store.
import store from "./store";
// create App components.
function App() {
  return <Provider store={store}>
    <Layout />
  </Provider>;
}
// export App component.
export default App;
```

> __7th NOTE__: 
>
> - __Provider__: helps us to integrate the store to our application. 
>

- Step 9: Update __Layout__ component with the following code

```js
// import react router dom.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import custom components.
import Home from "../home/Home";
import Login from "../login/Login";
import Loading from "../loading/Loading";
// import useSelector to get state from the store.
import { useSelector } from "react-redux";

function Layout() {
  const loading = useSelector((state) => state.loading);

  return (
    <>
      <Router>
        <Switch>
          {/* Home Route */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* End Home Route */}
          {/* Login Route */}
          <Route exact path="/login">
            <Login />
          </Route>
          {/* End Login Route */}
        </Switch>
      </Router>
      {loading.isLoadingShown && <Loading />}
    </>
  );
}

export default Layout;
```

> __8th NOTE:__
>
> - We can image our state as a single JSON object, it will be similar to some thing like this: 
>
>```js 
>{
>  loading: {
>    isLoadingShown: false
>  }
>}
>```
> - __useSeletor__: is used to get the state from the store. In this case, we want to get the loading state. Hence, we write some thing like this:
>
>```js
>...
>const loading = useSelector((state) => state.loading);
>...
>```
> 
> - In order to show / hide Loading component based on the loading state, we use __inline conditional expression__ with ternary operator. 
>
>```js
>...
>{loading.isLoadingShown && <Loading />}
>...
>```
>
> - However, If we run the code, Loading component will not be shown because the default value of loading state is false. 
>
> - For this reason, we should dispatch __SHOW_LOADING__ action to show the loading indicator when we fetch apis and dispatch __HIDE_LOADING__ action to hide the loading indicator after receiving the result from the server or when an error occurs.

> Step 10: Update __Row.js__ component with the following code:

```js
// import react.
import { useEffect, useState } from "react";
// import firebase database.
import { firebaseDatabase } from "../../firebase/firebase";
// import useDispatch to dispatch action to the store.
import { useDispatch } from "react-redux";
// import action types.
import * as loadingActionTypes from "../../actions/LoadingActionTypes";

/**
 * create Row component.
 * @param {*} props which are passed to the Row component.
 */
function Row(props) {
  // create "movies" state to store list of movies from Firebase.
  const [movies, setMovies] = useState([]);
  // get props.
  const { title, movieType, onMovieSelected } = props;
  // leafRoot to get data from Firebase.
  const leafRoot = "movies";
  // create dispatch instance to dispathc action to the store.
  const dispatch = useDispatch();

  /**
   * fetch movies from Firebase when getting "movieType" prop.
   */
  useEffect(() => {
    fetchMovies(movieType);
  }, [movieType]);

  /**
   * fetch movies from Firebase.
   * @param {*} movieType which is used to get movies from Firebase.
   */
  const fetchMovies = (movieType) => {
    dispatch({ type: loadingActionTypes.SHOW_LOADING });
    const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
    movieRef.on("value", (snapshot) => {
      const movies = snapshot.val();
      if (movies && movies.length !== 0) {
        // update "movies" state after getting movies from Firebase.
        setMovies(() => movies);
        dispatch({ type: loadingActionTypes.HIDE_LOADING });
      }
    });
  };

  /**
   * handle event when the user clicks on a movie.
   * @param {*} movie which is selected by the user.
   */
  const onMovieClicked = (movie) => {
    // dispatch callback function through props.
    onMovieSelected(movie);
  };

  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>
      {/* End Title */}
      {/* List of Movies */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => onMovieClicked(movie)}
            className="row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
      {/* End List of Movies */}
    </div>
  );
}
// export Row component.
export default Row;
```

> __9th NOTE__:
>
> - __useDispatch__: is used to dispatch an action to the store. It accept a JSON object as parameter. 
>
> - We dispatch __SHOW_LOADING__ action before fetch data from Firebase and dispatch __HIDE_LOADING__ action after getting data.


<a id="summary"></a>
## __Summary__

- __Store:__ It is a single source of truth. It help us to manage state and changes are more predictable and tracable. 

- __Action:__ a single object that tell the reducer update the state in the store.

- __Reducer:__ accepts the initial state and action as parameters. It will return the latest state based on the actions and the previous state. 

- __combineReducers__: the application may contain many reducers. The best practice is to combine many reducers into a single reducer.

- __createStore__: create the store for the application.

- __Provider__: provides the store to the application.

- __useDipatch__: dispatch an action to the store.

- __useSelector__: get the state from the store.

Thank you so much for taking the course. I hope that you could understand about Redux and you can build many real-life projects by using React (as front-end) and Firebase (as back-end) in order to solve many problems and make our life become better.

<a id="useful-resources-to-learn-react"></a>
## __Useful Resources to Learn React.__

[1]. https://reactjs.org/docs/getting-started.html.

<a id="references"></a>
## __References__

[1]. https://reactjs.org/docs/getting-started.html. \
[2]. https://firebase.google.com/docs/database. \
[3]. https://firebase.google.com/docs/auth/web/password-auth. \
[4]. https://firebase.google.com/docs/hosting. \
[5]. https://redux.js.org/
