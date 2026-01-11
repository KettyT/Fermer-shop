import React, {useRef, useState} from 'react';



function WareCard(props) {
    console.log("rerender");

    const [state, setState] = useState({
        cardMode: "btn-description",
        longText: false
    });
    const longLength = 230;
    const longText = props.text.length > longLength;
    const learnMoreBtn = <div className="card-text__info-intro-more"
    onClick={(evt) => {
        console.log("&& !state.longText clicked");

        const cardText = evt.target.closest(".card-text");
        cardText.style.height = 'auto';

        setState(Object.assign({}, state, {
            longText: true
        }));
    }}
    >Подробнее</div>;

    return (
        <div className="ware-cards--wrap">
            <div>
                <img src={props.imgpath} alt={props.imgAlt}/>
            </div>
            <div className="ware-cards--innerwrap">
                <h4 >{props.title}</h4>
                <div>
                    <div onClick={function (evt) {
                        if (evt.target.classList.contains("btn-description")) {
                            setState(Object.assign({}, state, {
                                cardMode: "btn-description"
                            }));
                        }

                        if (evt.target.classList.contains("btn-params")) {
                            setState(Object.assign({}, state, {
                                cardMode: "btn-params"
                            }));
                        }

                        if (evt.target.classList.contains("btn-properties")) {
                            setState(Object.assign({}, state, {
                                cardMode: "btn-properties"
                            }));
                        }
                    }} >
                        <button className={state.cardMode === "btn-description" ?
                            "btn btn-default btn-description btn-active" : "btn btn-default btn-description"}>Описание</button>
                        <button className={state.cardMode === "btn-params" ?
                            "btn btn-default btn-params btn-active" : "btn btn-default btn-params"}>Характеристики</button>
                        <button className={state.cardMode === "btn-properties" ?
                            "btn btn-default btn-properties btn-active" : "btn btn-default btn-properties"}>Свойства</button>
                    </div>
                    <div className={state.cardMode === "btn-description" ?
                        "ware-cards--description" : "hidden"}>
                        <div className="card-text ">
                            <p>
                                {(longText && !state.longText) ? props.text.substring(0, longLength) + "..." : props.text}
                            </p>
                            {longText && !state.longText ? learnMoreBtn: ""}
                        </div>
                        <span className="price-background-blue">{`${props.absPrice} руб. / ${props.absWeight} гр.`}</span>
                    </div>
                    <div className={state.cardMode === "btn-params" ?
                        "ware-cards--params" : "hidden"}>
                        {props.params.map(function (param) {
                            return <p>
                                <b>{param.name}:</b> {param.value}
                            </p>
                        })}
                    </div>
                    <div className={state.cardMode === "btn-properties" ?
                        "ware-cards--properties" : "hidden"}>
                        {props.properties.map(function (param) {
                            return <p>
                                <b>{param.name}:</b> {param.value}
                            </p>
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default WareCard;