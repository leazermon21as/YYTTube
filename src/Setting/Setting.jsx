import { Component } from "react";
import Header from "../Header/Header";
import './Setting.css'

export default class About extends Component {
    render(){
        return (
            <>
            <Header />
            <div className="setting__menu">
                <div className="setting__menu-block">
                    <div className="set__title">
                        <h2>Настройки</h2>
                    </div>
                    <div className="set__list">
                        <ul>
                            <li>Аккаунт</li>
                            <li>Уведомления</li>
                            <li>Воспроизведение</li>
                            <li>Конфидициальность</li>
                            <li>Расширеные возможности</li>
                            <li>Разное</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            </>
        )
    }
}