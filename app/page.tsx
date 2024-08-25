import './styles/styles.css';

export default function Home() {
  return (
    <header className="header">
      <nav className="navbar">
        <a className="brand" href="#">
          Brand
        </a>
        <input type="checkbox" id="nav" className="hidden" />
        <label className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="wrapper">
          <ul className="menu">
            <li className="menu-item">
              <a href="#">Menu Item</a>
            </li>
            <li className="menu-item">
              <a href="#">Menu Item</a>
            </li>
            <li className="menu-item">
              <a href="#">Menu Item</a>
            </li>
            <li className="menu-item">
              <a href="ui/auth/register">Sign Up</a>
            </li>
            <li className="menu-item">
              <a href="/ui/auth/login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
