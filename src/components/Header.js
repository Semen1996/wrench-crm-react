import wrench from '../images/wrench.svg';
import user from '../images/user.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__block">
        <img className="header__icon header__icon_wrench" src={wrench} alt="Иконка Wrench CRM" />
        <p className="header__text">Wrench CRM</p>
      </div>
      <div className="header__block">
        <img className="header__icon" src={user} alt="Иконка пользователя" />
        <p className="header__text">Имя Фамилия</p>
      </div>
    </header>
  );
}

export default Header;