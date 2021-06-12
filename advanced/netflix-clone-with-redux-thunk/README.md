# Learn Redux Thunk by Building Netflix.

<img src="../../md-images/learning-react-by-building-netflix.png" alt="learn-react-by-building-netflix"/>

> Click :star: if you like the project. Pull Requests are highly appreciated :heart:

| No. | Topics |
| --- | --------- |
|0  | [Learn React By Building Netflix.](https://github.com/hieptl/netflix-clone) |
|1  | [Learn React and Redux By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-redux) |
|2  | [Learn React and Redux-Thunk By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-redux-thunk) |
|3  | [Learn React and Redux-Saga By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-redux-saga) |
|4  | [Learn React and Higher Order Component By Building Netflix.](https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-higher-order-component) |

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚. 

> Before moving on with this part, you should follow the first part and the second part in this series:
>
> The first part - __Learn React By Building Netflix__:
>
> - Github: https://github.com/hieptl/netflix-clone
>
> - Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
>
> The second part - __Learn Redux by Building Netflix__:
>
> - Github: https://github.com/hieptl/netflix-clone/tree/main/advanced/netflix-clone-with-redux
>
> - Dev.to: https://dev.to/hieptl/learn-redux-by-building-netflix-4dem 

The repository helps you learn Redux by buiding Netflix. It means that you are learning Redux by building a real-life project. I will explain concepts in detail. This post is the second part in my series and it is suitable for beginners.

My post is about __Learn Redux Thunk By Building Netflix__ on Dev.to: https://dev.to/hieptl/learn-redux-thunk-by-building-netflix-2mm4


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

This course will help you to learn Redux-Thunk by building Netflix. It means that you are learning by doing a real-life project.

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
|5  | [Redux Middleware.](#what-is-redux-middleware) |
|5.1  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What is Thunk Function.](#what-is-thunk-function) |
|5.2  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What is Redux Thunk.](#what-is-redux-thunk) |
|5.3  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Architecture of Redux Middleware.](#the-architecture-of-redux-middleware) |
|5.4  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Why.](#why) |
|5.5  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When.](#when) |
|5.6  | [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How.](#how) |
|6  | [Build Login Feature By Using Redux and Redux Thunk - Netflix](#build-login-feature-by-using-redux-and-redux-thunk-netflix) |
|7  | [Summary.](#summary) |
|8  | [Useful Resources to Learn React.](#useful-resources-to-learn-react) |
|9  | [References.](#references) 

## __Table of Images.__
| No. | Topics |
| --- | --------- |
|1  | [Figure 1: Redux Middleware - Architecture.](#figure1) |
|2  | [Figure 2: Login Page - Netflix.](#figure2) |
|3  | [Figure 3: The Final Result.](#figure3) |


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

<a id="what-is-redux-middleware"></a>
## __5. Redux Middleware__

- It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

<a id="what-is-thunk-function"></a>
### __5.1. What is Thunk function.__

- A thunk is just a function which delays the evaluation of the value. It doesn’t take any arguments but gives the value whenever you invoke the thunk. i.e, It is used not to execute now but it will be sometime in the future. Let's take a synchronous example,

```js
const add = (x,y) => x + y;

const thunk = () => add(2,3);

thunk() // 5
```

<a id="what-is-redux-thunk"></a>
### __5.3. What is Redux Thunk__

- “Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.” — Redux Thunk documentation

<a id="the-architecture-of-redux-middleware"></a>
### __5.2. The Architecture of Redux Middlware__

<a id="figure1"></a>
<img src="../../md-images/redux-middleware.gif" alt="redux-middleware-architecture" width="666"/>

Figure 1. Redux Middleware - Architecture.

<a id="why"></a>
### __5.4. Why__

- With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store.

- Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

<a id="when"></a>
### __5.5. When__

- You can do synchronous updates by dispatching an action. In some cases, you need to perform asynchronous actions. It is time to use Redux Middleware. 

<a id="how"></a>
### __5.6. How__

Firstly, we need to understand the flow first. 

- The components will get state from the store. Whenever the state is changed, the components will be re-rendered.

- The components will dispatch actions to tell the reducers update the state in the store.

- In the case, we want to dispatch some asynchronous actions. The middleware will perform some side effects and get then pass the result to the reducers. 

- The reducers will take the responsibility to update the state. It will be used to return the latest state. In fact, we will not dispatch actions in the reducers. It is an anti-patten, we should avoid that.

In order to integrate Redux Thunk in our Netflix application, please follow the below steps: 

- Step 1: define the actions including the actions and the action's types. 

- Step 2: define the reducers.

- Step 3: define the store.

- Step 4: Import redux-thunk and apply middleware to the store.

- Step 5: Use the store in our application.

- Step 6: Let our components get the state from the store.

- Step 7: Let our components dispatch the actions to the store.

<a id="build-login-feature-by-using-redux-and-redux-thunk-netflix"></a>
## 6. Build Login Feature by Using Redux and Redux Thunk - Netflix.

<a id="figure2"></a>
<img src="../../md-images/netflix-login1.png" alt="reduc-middleware-architecture" width="666"/>

Figure 2. Login Page - Netflix.

In the first part of the series, we built the login feature by using pure React. In this part, we will refactor the code and re-build the login feature with supporting from Redux-Thunk.

- Step 1: Install the Redux-Thunk by running __npm install redux-thunk__ or __yarn add redux-thunk__

- Step 2: Create __services__ folder. The folder will be used to contain files which interact with the back-end.

- Step 3: Create __LoginService.js__ file in __services__ folder. __LoginService__ is used to perform auth feature.

```js
// import firebase authentication.
import { firebaseAuth } from "../firebase/firebase";

export const login = (email, password) => {
  return firebaseAuth.signInWithEmailAndPassword(email, password);
};
```

- Step 4: Create __LoginAction.js__ in __actions__ folder. The file will contain asynchronous actions such as login action, etc.

```js
// import action types.
import * as loadingActionTypes from "./LoadingActionTypes";
// import login service.
import * as loginService from "../services/LoginService";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: loadingActionTypes.SHOW_LOADING });
    const userCredentials = await loginService.login(email, password);
    if (userCredentials) {
      console.log("Signed in user: ");
      console.log(userCredentials);
    }
    dispatch({ type: loadingActionTypes.HIDE_LOADING });
  } catch (error) {
    console.log(error);
  }
};
```

> __1st NOTE__:
>
> - The login function is a thunk function. The dispatch parameter helps us dispatch other actions as needed. 
>
> - In this case, we will the dispatch parameter to dispatch __SHOW_LOADING__ ans __HIDE_LOADING__ actions.
>
> - The login function accepts email and password as parameters.
>
> - We import all functions from __LoginService.js__ as __loginService__ and then call __loginService.login__ to perform auth feature.
>

- Step 5: In __store.js__, __import thunk from 'redux-thunk'__ and then apply thunk to the store by using __applyMiddleware__.

```js
// import create store and apply middleware.
import { createStore, applyMiddleware } from "redux";
// import root reducer.
import reducer from "./reducers";
// import thunk.
import thunk from "redux-thunk";

export default createStore(reducer, applyMiddleware(thunk));
```

- Step 6: In __LoginForm.js__, we should perform auth feature by dispatching the login action.

```js
// import react.
import { useState } from "react";
// import firebase authentication.
import { firebaseAuth } from "../../firebase/firebase";
// import use dispatch to dispatch action to the store.
import { useDispatch } from "react-redux";
// import actions.
import * as loginActions from "../../actions/LoginActions";

/**
 * create LoginForm component.
 */
function LoginForm() {
  // create email and password state to store user's credentials.
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // create dispatch instance to dispatch action to the store.
  const dispatch = useDispatch();
  /**
   * handle event when the user clicks on "Login" button.
   */
  const login = () => {
    dispatch(loginActions.login(email, password));
  };

  /**
   * update email state when the user inputs the email field.
   * @param {*} e - synthetic event to get the latest email's value.
   */
  const onEmailChanged = (e) => {
    // get email value.
    const updatedEmail = e.target.value;
    // update email state.
    setEmail(() => updatedEmail);
  };

  /**
   * update password state when the user input the password field.
   * @param {*} e - synthetic event to get the latest password's value.
   */
  const onPasswordChanged = (e) => {
    // get password value.
    const updatedPassword = e.target.value;
    // update password state.
    setPassword(() => updatedPassword);
  };

  return (
    <div className="login-body">
      <div className="login-body__form">
        <h1>Sign In</h1>
        <div className="login-body__input mb-16">
          <input
            type="text"
            placeholder="Email or phone number"
            onChange={onEmailChanged}
          />
        </div>
        <div className="login-body__input">
          <input
            type="password"
            placeholder="Password"
            onChange={onPasswordChanged}
          />
        </div>
        <button className="login-body__submit-btn" onClick={login}>
          Sign In
        </button>
        <div className="login-body__options">
          <span>Remember me</span>
          <span className="login-body__need-help">Need help?</span>
        </div>
        <div className="login-body__footer">
          <div className="login-body__fb">
            <img
              src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
              alt="fb"
            />
            <span>Login with Facebook</span>
          </div>
          <div className="login-body__new-to-nl">
            <span>New to Netflix ?</span>
            <span className="login-body__sign-up">Sign up now.</span>
          </div>
          <div className="login-body__google_captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="login-body__learn-more">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
// export LoginForm component.
export default LoginForm;
```

> __2nd NOTE__: 
>
> - We import __useDispatch__ to dispatch action to the store. 
>
> - We import __loginAction__, the __loginAction.login__ action will be dispatched.
>
> - After running the code, you result should be like this. 
>
> <a id="figure3"></a>
> <img src="../../md-images/netflix-login4.png" alt="reduc-middleware-architecture" width="666"/>
>
> Figure 3. The Final Result.
>


<a id="summary"></a>
## __Summary__

- You can do synchronous updates by dispatching an action. In some cases, you need to perform asynchronous actions. It is time to use Redux Middleware. 

- Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

- __applyMiddleware__ is used to apply middleware to the store. 

- In fact, we can apply multiple middlewares.

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
[5]. https://redux.js.org/ \
[6]. https://github.com/reduxjs/redux-thunk
