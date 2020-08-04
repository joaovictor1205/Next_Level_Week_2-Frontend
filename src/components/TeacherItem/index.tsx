import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/36923102?s=460&u=9af71375b6860ee166acd2820fd4292afbb6df14&v=4" alt="João Victor" />
                <div>
                    <strong>João Victor</strong>
                    <span>Full Stack Developer</span>
                </div>
            </header>
            <p>teste testetestetestetestetestetestetesteteste teste teste teste</p>

            <footer>
                <p>
                    Preço/hora
                            <strong> R$ 80,00 </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>

    );
}

export default TeacherItem;