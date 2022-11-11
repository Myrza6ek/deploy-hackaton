import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerbg">
      <div className="f1">
        <div className="footer_one">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/59/46/logo-combination-of-d-letter-and-tooth-vector-5925946.jpg"
            alt="Второе logo"
          />
          <h2>©2022 DENTAL-SHOP</h2>
        </div>
        <div className="footer_text">
          <ul>
            <li>Политика конфедициальности</li>
            <li>Пользователькое соглашение</li>
            <li>Все права защищены.</li>
          </ul>
          <ul>
            <li>О магазине</li>
            <li>Каталог</li>
            <li>Доставка и оплата</li>
          </ul>
          <ul>
            <li>Бонусная система</li>
            <li>Вопрос и ответы</li>
            <li>Контакты</li>
          </ul>
        </div>
      </div>
      {/* icons start */}
      <div className="wrapper">
        <div className="icon facebook">
          <div className="fooltip">Facebook</div>
          <span>
            <i className="fab fa-facebook-f"></i>
          </span>
        </div>
        <div className="icon whatsapp">
          <div className="fooltip">Whatsapp</div>
          <span>
            <i className="fab fa-whatsapp"></i>
          </span>
        </div>
        <div className="icon instagram">
          <div className="fooltip">Instagram</div>
          <span>
            <i className="fab fa-instagram"></i>
          </span>
        </div>
        <div className="icon telegram">
          <div className="fooltip">Telegram</div>
          <span>
            <i className="fab fa-telegram"></i>
          </span>
        </div>
        {/* icons end */}
      </div>
    </div>
  );
}

export default Footer;
