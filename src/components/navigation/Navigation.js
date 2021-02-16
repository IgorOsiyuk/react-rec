import { Link } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="main-menu">
      <Link to="/" className='main-menu_link'> Главная страница </Link>
      <Link to="/employees" className='main-menu_link'> Сотрудники </Link>
    </nav>
  );
};

export default Navigation;
