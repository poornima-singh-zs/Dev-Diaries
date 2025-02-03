import "./Header.css";
import githubIcon from '../assets/githubIcon.png'
const Header = () => {
  return (
    <div className="nav">
      <div className="navbar-left">
        <p className="logo">Dev Diaries</p>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="navbar-right">
        <img src={githubIcon} alt="github icon" className="github-icon" loading="lazy"></img>
        <a href="https://github.com/poornima-singh-zs/Dev-Diaries" className="link"> GitHub Link</a>
       
      </div>
    </div>
  );
};

export default Header;
