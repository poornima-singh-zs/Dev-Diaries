import "./Header.css";
const Header = () => {
  return (
    <div className="nav">
      <div className="navbar-left">
        <p className="logo">Dev Diaries</p>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="navbar-right">
        <button className="btn">Sign Up</button>
        <button className="btn">Sign In</button>
       
      </div>
    </div>
  );
};

export default Header;
