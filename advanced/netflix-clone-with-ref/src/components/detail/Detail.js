/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// // import useRef to define ref in function component.
// import { useRef, useEffect } from "react";

// /**
//  * create Detail component
//  * @param {*} props which are passed to Detail component.
//  */
// function Detail(props) {
//   /**
//    * NOTE:
//    * - We are defining Detail as a function component.
//    * - We cannot use React.createRef in a function component.
//    * - useRef hooks could be a alternative solution.
//    */

//   // get props.
//   const { movie, onDetailClosed } = props;

//   const detailRef = useRef(null);

//   useEffect(() => {
//     if (detailRef && detailRef.current) {
//       console.log(movie);
//       if (movie) {
//         detailRef.current.className += " detail--active";
//       } else {
//         detailRef.current.className = detailRef.current.className.replace(
//           " detail--active",
//           ""
//         );
//       }
//     }
//   }, [movie]);

//   // return detail elements.
//   return (
//     <div className="detail" ref={detailRef}>
//       {/* Detail Banner Image */}
//       <div
//         className="detail__image"
//         style={{
//           backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
//         }}
//       >
//         <span className="detail__title">{movie?.original_name}</span>
//       </div>
//       {/* End Detail Banner Image */}
//       {/* Detail Fade Bottom Animation */}
//       <div className="banner--fadeBottom detail__fade-image"></div>
//       {/* End Detail Fade Bottom Animation */}
//       {/* Detail Actions */}
//       <div className="detail__actions">
//         <button className="detail__btn mgr-8">Play</button>
//         <button className="detail__btn" onClick={onDetailClosed}>
//           Back
//         </button>
//       </div>
//       <div className="detail__description">
//         <div className="detail__description-title">Description</div>
//         <p className="detail__description-content">{movie?.overview}</p>
//       </div>
//       {/* End Detail Actions */}
//     </div>
//   );
// }
// // export Detail component.
// export default Detail;

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
