/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
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
