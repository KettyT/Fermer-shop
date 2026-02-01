import WareCard from "./utils/WareCard";
import mainStorage from "./utils/Storage"
import {UlStyled} from "./styled/tags";
import React, {useRef, useState} from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import ProductSwiper from "./styled/ProductSwiper";

function Menu () {

    const [swiperRef, setSwiperRef] = useState(null);

    const [state, setState] = useState({
        cart: 0,
        cartList: {},
        delivery: ""
    });

    return (
        <div className="menu-column-flex frame">
            <section>
                <fieldset className="filters filters-products filters-padding-override">
                    <legend className="hidden">Выбор продукта</legend>
                    <div className="fieldset-title"><b>Выберите продукты</b></div>
                    <UlStyled>
                        {mainStorage.wares.map(function (ware){
                            return <li className="filter-option filter-checkbox">
                                <input className="visually-hidden filter-input-checkbox filter-input" type="checkbox"
                                       name="hang" id={ware.checkboxId}
                                       onClick = {function (evt) {
                                               const inputIdCheckbox = evt.target.id;
                                               let currentWare = null;

                                               for (let i = 0; i < mainStorage.wares.length; i++) {
                                                   if (inputIdCheckbox === mainStorage.wares[i].checkboxId) {
                                                       currentWare = mainStorage.wares[i];
                                                       break;
                                                   }
                                               }

                                               if (!currentWare) {
                                                   return;
                                               }

                                           const list = state.cartList;
                                           let summ = 0;

                                               if (evt.target.checked) {
                                                   list[currentWare.checkboxId] = currentWare;
                                                   summ = state.cart + currentWare.absPrice;
                                               } else {
                                                   list[currentWare.checkboxId] = null;
                                                   summ = state.cart - currentWare.absPrice;
                                               }

                                               setState({
                                                   cart: summ,
                                                   cartList: list,
                                                   delivery: state.delivery
                                               });

                                               // alert("the Message");
                                           }}
                                />

                                <label className="label-margin" htmlFor={ware.checkboxId}>{ware.title}</label>
                            </li>
                        })}
                    </UlStyled>
                </fieldset>
                <fieldset className="filters filters-order">
                    <legend className="hidden">Сделать заказ</legend>
                    <div className="fieldset-title"><b>Сделать заказ</b></div>
                    <input className="order-input" name="input-adress" id="input-adress"
                           value = {state.delivery}
                           placeholder="Введите адрес доставки"
                           onChange={function (evt) {

                               setState(Object.assign({}, state, {
                                   delivery: evt.target.value
                               }))
                           }}
                    />
                    <span className="span-price">Цена</span>
                    <span className="span-value">{state.cart} руб.</span>
                    <button className="btn-header btn-second-page"
                            disabled={(state.delivery.length == 0) ? true : false }
                            onClick = {function (evt) {
                                let finalList = "Товары в корзине: \n";

                                for (let i in state.cartList) {
                                    if (!state.cartList[i]) {
                                        continue;
                                    }

                                    finalList = finalList + " " + state.cartList[i].title + ":  " + state.cartList[i].absPrice +  " руб." + "\n";
                                }

                                alert(finalList + "всего продуктов:  " + state.cart + " руб." + "\n"
                                      + "адрес доставки:  " + state.delivery);
                            }}


                            > Купить </button>
                </fieldset>
            </section>

            <section className="products">
                <legend></legend>
                <Swiper
                    onSwiper={setSwiperRef}
                    spaceBetween={12}
                    direction="vertical"
                    slidesPerView="auto"
                    scrollbar={{ draggable: true }}
                    mousewheel="true"
                    pagination={{
                        type: "function"
                    }}
                    // width="100%"

                    autoHeight="true"
                >
                    {mainStorage.wares.map(function (ware) {
                        return <SwiperSlide className="ware-cards" height="292">
                            <WareCard imgpath={ware.imgpath}
                                      imgAlt={ware.imgAlt}
                                      title={ware.title}
                                      text={ware.text}
                                // priceProduct={ware.priceProduct}
                                      params={ware.params}
                                      properties={ware.properties}
                                      absPrice={ware.absPrice}
                                      absWeight={ware.absWeight}
                            />
                        </SwiperSlide>
                    })}
                </Swiper>
                {/*<UlStyled>
                    {mainStorage.wares.map(function (ware) {
                        return <li className="ware-cards">
                                    <WareCard imgpath={ware.imgpath}
                                             imgAlt={ware.imgAlt}
                                             title={ware.title}
                                             text={ware.text}
                                             // priceProduct={ware.priceProduct}
                                             params={ware.params}
                                             properties={ware.properties}
                                             absPrice={ware.absPrice}
                                             absWeight={ware.absWeight}
                                    />
                                 </li>
                    })}
                </UlStyled>*/}

            </section>

        </div>
    );
}

export default Menu;