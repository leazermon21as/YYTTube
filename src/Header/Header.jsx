import './Header.css'
import logo from '../../public/logo/YouTube.svg'
import search from '../../public/logo/search.svg'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div>
            
            <header>
            <div className="menu">
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
            <label htmlFor="burger-checkbox" className="burger"></label>
            <ul className="menu-list">
                <li><Link to="/" className="menu-item">Главная</Link></li>
                <li><Link to="/shorts" className="menu-item">Shorts</Link></li>
                <li><Link to="/folowing" className="menu-item">Подписки</Link></li>
                <li><Link to="/setting" className="menu-item">Настройки</Link></li>
                <li><Link to="/report" className="menu-item">Жалобы</Link></li>
                <li><Link to="/about" className="menu-item">О нас</Link></li>
            </ul>
            </div>


                <div className="header__icon">
                    <img src={logo} alt="YouTube" />
                    <h2>LoloTube</h2>
                    <p>KZ</p>
                </div>

                <div className="header__input">
                    <input type="text" placeholder='Введите запрос'/>
                    <div className="button">
                    <button className="header__button"><img src={search} alt="search" /></button>
                    </div>
                </div>

                <div className="header__footer">
                    <button className="header__custom"><p className='plus'>+</p>Создать</button>

                    <div className="header__user-logo">
                        <h1>M</h1>
                    </div>
                </div>
            </header>
        </div>
    )
}