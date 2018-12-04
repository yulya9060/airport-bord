import React from 'react';
import './Copyright.scss';

const iframeIcon = '<iframe frameborder="0" style="overflow: hidden; border: 0; width: 240px; height: 130px;" src="//yandex.st/rasp/media/apicc/copyright_vert_mono.html"></iframe>';
const iframe = () => ({ __html: iframeIcon });
const Copyright = () => (
    <div className="Copyright">
        <div className="Copyright-Banner">
            <div dangerouslySetInnerHTML={iframe()} />
            <a href="http://rasp.yandex.ru/" className="Link">
                http://rasp.yandex.ru/
            </a>
        </div>

        <div className="Copyright-Text">Данные предоставлены сервисом Яндекс.Расписания</div>
    </div>
);

export default Copyright;
