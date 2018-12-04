import React from 'react';
import './Copyright.scss';

const iframeIcon = '<iframe frameborder="0" style="overflow: hidden; border: 0; width: 240px; height: 130px;" src="//yandex.st/rasp/media/apicc/copyright_vert_mono.html"></iframe>';
const iframe = () => ({ __html: iframeIcon });
const Copyright = () => (
    <div className="copyright">
        <div className="copyright__banner">
            <div dangerouslySetInnerHTML={iframe()} />
            <a href="http://rasp.yandex.ru/" className="link">
                http://rasp.yandex.ru/
            </a>
        </div>

        <div className="copyright-text">Данные предоставлены сервисом Яндекс.Расписания</div>
    </div>
);

export default Copyright;
