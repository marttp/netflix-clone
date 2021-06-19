// import react.
import { useState } from "react";
// import custom components.
import Nav from "../nav/Nav";
import Header from "../header/Header";
import Row from "../row/Row";
import Detail from "../detail/Detail";
/**
 * create Home component.
 */
function Home() {
  // create "selectedMovie" state to store selected movie which is chosen by the user.
  const [selectedMovie, setSelectedMovie] = useState();

  /**
   * select movie
   * @param {*} movie which is chosen by the user.
   */
  const selectMovie = (movie) => {
    // update "selectedMovie" state.
    setSelectedMovie(() => movie);
  };

  /**
   * close detail panel when the user clicks on "Back" button.
   */
  const closeDetail = () => {
    // update selected movie to null in order to hide the detail panel.
    setSelectedMovie(null);
  };

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
          onMovieSelected={selectMovie}
        />
        <Row
          title="Trending Now"
          movieType="trending-now"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Top Rated"
          movieType="top-rated"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Action Movies"
          movieType="action-movies"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Horror Movies"
          movieType="horror-movies"
          onMovieSelected={selectMovie}
        />
        <Row title="Romance Movies" movieType="romance-movies" />
        <Row
          title="Documentaries Movies"
          movieType="documentaries-movies"
          onMovieSelected={selectMovie}
        />
        {/* End Row */}
      </div>
      {/* Detail */}
      {selectedMovie && (
        <Detail movie={selectedMovie} onDetailClosed={closeDetail} />
      )}
      {/* End Detail */}
    </>
  );
}
// export Home component.
export default Home;
