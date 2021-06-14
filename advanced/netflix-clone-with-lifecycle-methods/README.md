# Learn React and Lifecycle Methods by Building Netflix.

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
|6  | [Learn React and Lifecycle Methods By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-lifecycle-methods) |

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚. 

> Before moving on with this part, you should follow the first part in this series:
>
> The first part - __Learn React By Building Netflix__:
>
> - Github: https://github.com/hieptl/netflix-clone
>
> - Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
>

The repository helps you learn lifecycle methods by buiding Netflix. It means that you are learning life cycle methods by building a real-life project. I will explain concepts in detail. This post is the seventh part in my series and it is suitable for beginners.

My post is about __Learn React and Lifecycle Methods By Building Netflix__ on Dev.to: https://dev.to/hieptl/learn-react-and-lifecycle-methods-by-building-netflix-4683#react-lifecycle-methods

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

This course will help you to learn lifecycle methods by building Netflix. It means that you are learning by doing a real-life project. You will understand about different phases such as mounting, updating and unmounting. 

> If you are using function components, you do not need to care about lifecyle methods. Because from React v16.8, we have supporting from React Hooks. I will have another post to explain about React Hooks by Building Netflix.

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
|5  | [React Lifecycle Methods.](#react-lifecycle-methods) |
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

- Step 3: Run "npm run start" to run the fron-end project.

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

<a id="react-lifecycle-methods"></a>
## __5. React Lifecycle Methods.__

<a id="what"></a>
### __5.1. What.__

- We have two ways in order to define React's components (class component or function component).

- If we are using class components, we need to understand about different phases in component's lifecycle.

- For this reason, we can know the purpose of each lifecycle's method and write code in the correct places and avoid unexpected behaviour.

<a id="why"></a>
### __5.3. Why__

- We need to find the correc place to write code and avoid issues. 

For example: we should not write code to fetch apis inside the render function. We should write it in the componentDidMount and so on.

<a id="when"></a>
### __5.4. When__

- If you are using class component in your applications, you should have understanding about lifecyle methods.

<a id="how"></a>
### __5.5. How__

- Define your components as class components.

- Write lifecycle methods for different phases of your components

<a id="scenarios"></a>
## 6. Scenarios.

<a id="figure1"></a>
<img src="../../md-images/netflix-detail1.png" alt="reduc-middleware-architecture" width="666"/>

Figure 1. Detail Page - Netflix.

In the previous posts, we defined __Detail__ component as a function component. However, as mentioned above, we can write lifeycle methods if our components are class components. For this reason, we should refactor our __Detail__ component to class component in order to learn about lifecyle methods in React.

Step 1: Update __Home.js__ with the following code.

```js
...
{/* Detail */}
<Detail movie={selectedMovie} onDetailClosed={closeDetail} />
{/* End Detail */}
...
```

> __1st NOTE__:
>
> - In the previous post, we use conditonal rendering in React to show / hide the __Detail__ component based on __selectedMovie__ state. 
>
> - However, in this post, we will let the __Detail__ component be available from the beginning to learn about lifecycle methods.
>
> - We will write the logic to show / hide the UI inside the __Detail__ component.

Step 3: Convert __Detail__ component to class component.

```js
import React from "react";
/**
 * create Detail component
 * @param {*} props which are passed to Detail component.
 */
class Detail extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor was called");
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps was called");
    return state;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate was called");
    return true;
  }

  render() {
    console.log("render was called");
    const { movie, onDetailClosed } = this.props;

    if (!movie) {
      return null;
    }
    // return detail elements.
    return (
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
    );
  }

  componentDidMount() {
    console.log("componentDidMount was called");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate was called");
    return prevState;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate was called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount was called");
  }
}

export default Detail;
```

> __2nd NOTE__:
>
> - It is time to talk about some new methods in the __Detail__ component.
>
> - In fact, we have three phases in the lifecycle: __mounting__, __updating__, __unmounting__.
>

> __3rd NOTE__:
> - In the __mounting__ phase, we have __constructor__, __getDerivedStateFromProps__, __render__ and __componentDidUpdate__. If you run the code and check the console for the first time. We will see the following result:
>
>```js
>constructor was called
>getDerivedStateFromProps was called
>render was called
>componentDidMount was called
>```
>
> - They will be executed in order.
>
> - __constructor__ is used to initial state in our application. If you pass __props__ as parameter and pass to __super__, you can access props in your component by writing __this.props.propName__.
>
> - __getDerivedStateFromProps__: Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need derived state. 
>
> - __render__: is used to render React elements.
>
> - __componentDidMount__: Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.

> __4th NOTE__:
>
> - After the component was rendered, we can check the methods of the __updating__ phase by selecting a movie. The __updating__ phase will contain __getDerivedStateFromProps__, __shouldComponentUpdate__, __render__, __getSnapshowBeforeUpdate__, __componentDidUpdate__.
>
> - If you check the console, you will see the following result:
> ```js
> getDerivedStateFromProps was called
> shouldComponentUpdate was called
> render was called
> getSnapshotBeforeUpdate was called
> componentDidUpdate was called
> ```
>
> - __getDerivedStateFromProps__ and __render__ will take part in both phases (__mounting__ and __unmounting__).
>
> - __shouldComponentUpdate__: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
> 
> - __getSnapshotBeforeUpdate__: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
>
> - __componentDidUpdate__: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.

> __5th NOTE__:
>
> - If you destroy the component, we can see the __unmounting__ phase. __componentWillUnmount__ will be executed.
>
> - __componentWillUnmount__ It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component. You will see the result:
>
> ```js
> componentWillUnmount was called
> ```
> 

<a id="summary"></a>
## __Summary__

- We have three phases in the lifecycle: __mounting, __updating__, and __unmounting__.

- In the __mounting__ phase, we have __constructor__, __getDerivedStateFromProps__, __render__ and __componentDidUpdate__.

- The __updating__ phase will contain __getDerivedStateFromProps__, __shouldComponentUpdate__, __render__, __getSnapshowBeforeUpdate__, __componentDidUpdate__.

- The __unmounting__ phase will contain __componentWillUnmount__.

Thank you so much for taking the course. I hope that you could understand about React lifecycle methods and you can build many real-life projects by using React (as front-end) and Firebase (as back-end) in order to solve many problems and make our life become better.

<a id="useful-resources-to-learn-react"></a>
## __Useful Resources to Learn React.__

[1]. https://reactjs.org/docs/getting-started.html.

<a id="references"></a>
## __References__

[1]. https://reactjs.org/docs/getting-started.html. \
[2]. https://firebase.google.com/docs/database. \
[3]. https://firebase.google.com/docs/auth/web/password-auth. \
[4]. https://firebase.google.com/docs/hosting.
