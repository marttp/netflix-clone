/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
import UserContext from "../../context/UserContext";
/**
 * create Nav component.
 */
function Nav() {
  return (
    <UserContext.Consumer>
      {({ user }) => {
        return (
          <div className="nav false">
            <img
              className="nav__logo"
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt=""
            />
            {user && <span className="nav__greeting">Hello, {user}</span>}
            <img
              className="nav__avatar"
              src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
              alt=""
            />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
// export Nav component.
export default Nav;
