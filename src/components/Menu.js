import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import iconHome from '../images/home.svg';
import iconCalendar from '../images/calendar.svg';
import iconExit from '../images/exit.svg';
import iconFinancial from '../images/financial.svg';
import iconMap from '../images/map.svg';
import iconProfile from '../images/profile.svg';
import iconSearch from '../images/search.svg';
import iconSettings from '../images/settings.svg';
import iconTable from '../images/table.svg';
import iconWidgets from '../images/widgets.svg';


function Menu() {

  const [settings, setSettings]=useState('menu__settings_hide');
  const [btn, setBtn]=useState('menu__link_type_btn-triangle-off');

  function handleSettings() {
    if(settings === '') {
      setSettings('menu__settings_hide');
      setBtn('menu__link_type_btn-triangle-off');
    }else {
      setSettings('');
      setBtn('menu__link_type_btn-triangle-on');
    }
  }

  return (
    <div className="menu">
      <div className='menu__burger'>
        <span className='menu__burger-span'></span>
      </div>
      <h2 className="menu__title">Меню</h2>
      <nav className="menu__nav">
        <NavLink exact to="/" activeClassName="menu__link_type_active" className="menu__link">
          <img className="menu__icon" src={iconHome} alt="иконка" />
          <p className="menu__text">Главная</p>
        </NavLink>
        <NavLink to="/address" activeClassName="menu__link_type_active" className="menu__link">
          <img className="menu__icon" src={iconSearch} alt="иконка" />
          <p className="menu__text">Поиск адресов</p>
        </NavLink>
        <NavLink to="/tables" activeClassName="menu__link_type_active" className="menu__link">
          <img className="menu__icon" src={iconTable} alt="иконка" />
          <p className="menu__text">Таблицы</p>
        </NavLink>
        <NavLink exact to="/calendar" activeClassName="menu__link_type_active" className="menu__link">
          <img className="menu__icon" src={iconCalendar} alt="иконка" />
          <p className="menu__text">Календарь</p>
        </NavLink>
        <NavLink exact to="/maps" activeClassName="menu__link_type_active" className="menu__link">
          <img className="menu__icon" src={iconMap} alt="иконка" />
          <p className="menu__text">Карты</p>
        </NavLink>
        <NavLink exact to="/widgets" activeClassName="menu__link_type_active" className="menu__link">
          <img className="menu__icon" src={iconWidgets} alt="иконка" />
          <p className="menu__text">Виджеты</p>
        </NavLink>
        <button className={`menu__link ${btn}`} onClick={handleSettings}>
          <img className="menu__icon" src={iconSettings} alt="иконка" />
          <p className="menu__text">Настройки</p>
        </button>
        <div className={`menu__settings ${settings}`}>
          <NavLink exact to="/set-profile" activeClassName="menu__link_type_active" className="menu__link menu__link_type_setting">
            <img className="menu__icon" src={iconProfile} alt="иконка" />
            <p className="menu__text">Настройки профиля</p>
          </NavLink>
          <NavLink exact to="/financial" activeClassName="menu__link_type_active" className="menu__link menu__link_type_setting">
            <img className="menu__icon" src={iconFinancial} alt="иконка" />
            <p className="menu__text">Управление финансами</p>
          </NavLink>
        </div>
        <NavLink exact to="/exit" activeClassName="menu__link_type_active" className="menu__link">
          <img className="menu__icon" src={iconExit} alt="иконка" />
          <p className="menu__text">Выход</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Menu;