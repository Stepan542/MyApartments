import './FooterStyles.css'
import { Fragment } from 'react'

export default function Footer() {
    return (
        <Fragment>
            <footer>
                <div className="footer__container-contacts">
                    <ul>
                        <li><p>Контакты: </p></li>
                        <li>Ольга: <a href="tel:+ 7-(747)-144-44-96">+ 7-(747)-144-44-96</a></li>
                        <li>Саша: <a href="tel:+ 7-(702)-144-44-96">+ 7-(702)-144-44-96</a></li>
                    </ul>
                </div>

                <div className="footer__container-rights">
                    <ul>
                        <li><p> Данный продукт, используется исключительно в целях осведомления пользователя,<br /> 
                                информации касательно доступности квартир. Сайт не преслудет цели коммерции.</p></li>
                        <li>Автор сайта - Макаров Степан.</li>
                        <li>&copy; Все права защищены.</li>
                    </ul>
                </div>
                
            </footer>
        </Fragment>
    )
}