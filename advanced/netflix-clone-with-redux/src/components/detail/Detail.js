/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
/**
 * create Detail component
 * @param {*} props which are passed to Detail component.
 */
function Detail(props) {
  // get props.
  const { movie, onDetailClosed } = props;
  // return detail elements.
  return (
    <div className="detail">
      {/* Detail Banner Image */}
      <div
        className="detail__image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
        }}
      >
        <span className="detail__title">{movie.original_name}</span>
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
        <p className="detail__description-content">{movie.overview}</p>
      </div>
      {/* End Detail Actions */}
    </div>
  );
}
// export Detail component.
export default Detail;
