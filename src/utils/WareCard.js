import React, {useRef, useState} from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';


function WareCard(props) {
    const [state, setState] = useState({
        cardMode: "btn-description"
    });

    const swiperRef = useRef(null);

    const swiper1 = <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        ref={swiperRef}
    >
        <SwiperSlide>
            <div className="ware-cards--description">
                <div className="card-text ">
                    <p>
                        {props.text}
                    </p>
                </div>
                <span className="price-background-blue">400 руб. / 700 гр.</span>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <div className="ware-cards--params">
                <p>
                    <b>Масса:</b> 0,7 кг. (595-805 г.).
                </p>
                <p>
                    <b>Срок годности:</b> 6 суток
                </p>
                <p>
                    <b>Порода:</b> КОББ 500.
                </p>
                <p>
                    <b>Срок годности:</b> 6 суток.
                </p>
                <p>
                    <b>Место происхождения:</b> Тверская область
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="ware-cards--properties">
                <p>
                    <b>Энергетическая ценность:</b> 135 ккал./565 кДж.
                </p>
                <p>
                    <b>Пищевая ценность:</b> белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.
                </p>
            </div>
        </SwiperSlide>
    </Swiper>;

    return (
        <div className="ware-cards--wrap">
            <img src={props.imgpath} alt={props.imgAlt}/>
            <div className="ware-cards--innerwrap">
                <h4 >{props.title}</h4>
                <div>
                    <div className="swiper-pagination" onClick={function (evt) {
                        if (evt.target.classList.contains("btn-description")) {
                            swiperRef.current.swiper.slideTo(0);
                            setState({
                                cardMode: "btn-description"
                            });

                        }

                        if (evt.target.classList.contains("btn-params")) {
                            swiperRef.current.swiper.slideTo(1);

                            setState({
                                cardMode: "btn-params"
                            });

                        }

                        if (evt.target.classList.contains("btn-properties")) {
                            swiperRef.current.swiper.slideTo(2);
                            setState({
                                cardMode: "btn-properties"
                            });
                        }
                    }} >
                        <button className={state.cardMode === "btn-description" ?
                            "btn btn-default btn-description btn-active" : "btn btn-default btn-description"}>Описание</button>
                        <button className={state.cardMode === "btn-params" ?
                            "btn btn-default btn-params btn-active" : "btn btn-default btn-params"}>Характеристики</button>
                        <button className={state.cardMode === "btn-properties" ?
                            "btn btn-default btn-properties btn-active" : "btn btn-default btn-properties"}>Свойства</button>
                    </div>
                    <div className="swiper-pagination1">
                        <button className={state.cardMode === "btn-description" ?
                            "btn btn-default btn-description btn-active" : "btn btn-default btn-description"}>Описание</button>
                        <button className={state.cardMode === "btn-params" ?
                            "btn btn-default btn-params btn-active" : "btn btn-default btn-params"}>Характеристики</button>
                        <button className={state.cardMode === "btn-properties" ?
                            "btn btn-default btn-properties btn-active" : "btn btn-default btn-properties"}>Свойства</button>
                    </div>
                    {swiper1}
                </div>
            </div>
        </div>
    );
}

export default WareCard;