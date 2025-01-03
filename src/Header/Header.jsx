import './Header.css'
import logo from '../../public/logo/YouTube.svg'
import search from '../../public/logo/search.svg'

export default function () {
    return (
        <div>
            
            <header>
                <div className="menu">
                    <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                    <label htmlFor="burger-checkbox" className="burger"></label>
                    <ul className="menu-list">
                        <li><a href="#" className="menu-item">Главная</a></li>
                        <li><a href="#" className="menu-item">Shorts</a></li>
                        <li><a href="#" className="menu-item">Подписки</a></li>
                        <li><a href="#" className="menu-item">Настройки</a></li>
                        <li><a href="#" className="menu-item">Жалобы</a></li>
                        <li><a href="#" className="menu-item">О нас</a></li>
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