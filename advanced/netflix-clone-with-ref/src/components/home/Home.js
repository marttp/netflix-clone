/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// // import react.
// import { useState, useRef, useEffect } from "react";
// // import custom components.
// import Nav from "../nav/Nav";
// import Header from "../header/Header";
// import Row from "../row/Row";
// import Detail from "../detail/Detail";
// /**
//  * create Home component.
//  */
// function Home() {
//   // create "selectedMovie" state to store selected movie which is chosen by the user.
//   const [selectedMovie, setSelectedMovie] = useState();

//   const detailRef = useRef(null);

//   useEffect(() => {
//     if (selectedMovie) {
//       detailRef.current.className += " detail--active";
//     } else {
//       detailRef.current.className = detailRef.current.className.replace(
//         " detail--active",
//         ""
//       );
//     }
//   }, [selectedMovie]);

//   /**
//    * select movie
//    * @param {*} movie which is chosen by the user.
//    */
//   const selectMovie = (movie) => {
//     // update "selectedMovie" state.
//     setSelectedMovie(() => movie);
//   };

//   /**
//    * close detail panel when the user clicks on "Back" button.
//    */
//   const closeDetail = () => {
//     // update selected movie to null in order to hide the detail panel.
//     setSelectedMovie(null);
//   };

//   return (
//     <>
//       <div className="app">
//         {/* Nav */}
//         <Nav />
//         {/* End Nav */}
//         {/* Header */}
//         <Header />
//         {/* Header */}
//         {/* Row */}
//         <Row
//           title="Netflix Originals"
//           movieType="netflix-originals"
//           onMovieSelected={selectMovie}
//         />
//         <Row
//           title="Trending Now"
//           movieType="trending-now"
//           onMovieSelected={selectMovie}
//         />
//         <Row
//           title="Top Rated"
//           movieType="top-rated"
//           onMovieSelected={selectMovie}
//         />
//         <Row
//           title="Action Movies"
//           movieType="action-movies"
//           onMovieSelected={selectMovie}
//         />
//         <Row
//           title="Horror Movies"
//           movieType="horror-movies"
//           onMovieSelected={selectMovie}
//         />
//         <Row title="Romance Movies" movieType="romance-movies" />
//         <Row
//           title="Documentaries Movies"
//           movieType="documentaries-movies"
//           onMovieSelected={selectMovie}
//         />
//         {/* End Row */}
//       </div>
//       {/* Detail */}
//       <Detail
//         movie={selectedMovie}
//         onDetailClosed={closeDetail}
//         ref={detailRef}
//       />
//       {/* End Detail */}
//     </>
//   );
// }
// // export Home component.
// export default Home;

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

// // import react.
// import React from "react";
// // import custom components.
// import Nav from "../nav/Nav";
// import Header from "../header/Header";
// import Row from "../row/Row";
// import Detail from "../detail/Detail";
// /**
//  * create Home component.
//  */
// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedMovie: null
//     };
//     this.detailRef = React.createRef();
//   }

//   /**
//    * select movie
//    * @param {*} movie which is chosen by the user.
//    */
//   selectMovie = (movie) => {
//     // update "selectedMovie" state.
//     this.setState(() => ({
//       selectedMovie: movie
//     }));
//   };

//   /**
//    * close detail panel when the user clicks on "Back" button.
//    */
//   closeDetail = () => {
//     // update selected movie to null in order to hide the detail panel.
//     this.setState(() => ({
//       selectedMovie: null
//     }));
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.detailRef) {
//       if (this.state.selectedMovie) {
//         this.detailRef.current.className += " detail--active";
//       } else {
//         this.detailRef.current.className = this.detailRef.current.className.replace(
//           " detail--active",
//           ""
//         );
//       }
//     }
//   }

//   render() {
//     return (
//       <>
//         <div className="app">
//           {/* Nav */}
//           <Nav />
//           {/* End Nav */}
//           {/* Header */}
//           <Header />
//           {/* Header */}
//           {/* Row */}
//           <Row
//             title="Netflix Originals"
//             movieType="netflix-originals"
//             onMovieSelected={this.selectMovie}
//           />
//           <Row
//             title="Trending Now"
//             movieType="trending-now"
//             onMovieSelected={this.selectMovie}
//           />
//           <Row
//             title="Top Rated"
//             movieType="top-rated"
//             onMovieSelected={this.selectMovie}
//           />
//           <Row
//             title="Action Movies"
//             movieType="action-movies"
//             onMovieSelected={this.selectMovie}
//           />
//           <Row
//             title="Horror Movies"
//             movieType="horror-movies"
//             onMovieSelected={this.selectMovie}
//           />
//           <Row title="Romance Movies" movieType="romance-movies" />
//           <Row
//             title="Documentaries Movies"
//             movieType="documentaries-movies"
//             onMovieSelected={this.selectMovie}
//           />
//           {/* End Row */}
//         </div>
//         {/* Detail */}
//         <Detail
//           movie={this.state.selectedMovie}
//           onDetailClosed={this.closeDetail}
//           ref={this.detailReffCallback}
//         />
//         {/* End Detail */}
//       </>
//     );
//   }
// }
// // export Home component.
// export default Home;
