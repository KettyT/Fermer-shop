import {Link} from "react-router-dom";
import Slogan from "../utils/Slogan";


function MainPage (props) {
    const className = props.className;

    return (
        <div className={"App " + className}>
            <div className="header-shadow">
            <header className="slogan frame">
                <div className="logo-wrapper">
                    <div className="logo-wrapper--img">
                    </div>
                    <div className="logo-wrapper--name-shop">
                        Фермерские продукты
                    </div>
                </div>
                <Link to="/shop" className="btn-header" onClick={function (evt) {
                }}>
                    Купить
                </Link>
            </header>
            </div>

            <section className="description ">
                <div className="frame-blue frame">
                    <div className="description-text">
                        <h1>Магазин фермерских <br/> продуктов с доставкой</h1>
                        <div className="description-p">
                            <p>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам.
                                Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.</p>
                        </div>
                    </div>
                    <div className="description-img">
                        <div className="description-img--elipse">

                        </div>
                        <div className="description-img--man">

                        </div>

                    </div>
                </div>
            </section>

            <div className="advances frame">
                <h2>Почему фермерские продукты лучше?</h2>
                <div className="advances-ul">
                    <div className="farm-products advances-width advances-squares--green">
                        <div className="advances-title">
                            <img src="images/eat 1.svg"></img>
                            <div className="advances-title--text">
                                <h3>Фермерские продукты</h3>
                                <h4>Еда намного вкуснее</h4>
                            </div>
                        </div>
                        <div >
                            <p>Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта,
                                что&nbsp;они даже не родственники.</p>
                        </div>
                    </div>

                    <div className="farm-products advances-width advances-squares--red">
                        <div className="advances-title">
                            <img src="images/garbage 1.svg"></img>
                            <div className="advances-title--text">
                                <h3>Магазинные продукты</h3>
                                <h4>Просроченные продукты</h4>
                            </div>
                        </div>
                        <div className="advances-p">
                            <p>Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара.</p>
                        </div>
                    </div>
                    <div className="farm-products advances-width advances-squares--green">
                        <div className="advances-title">
                            <img src="images/sprout 1.svg"></img>
                            <div className="advances-title--text">
                                <h3>Фермерские продукты</h3>
                                <h4>Натуральные продукты</h4>
                            </div>
                        </div>
                        <div className="advances-p">
                            <p>Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.</p>
                        </div>
                    </div>
                    <div className="farm-products advances-width advances-squares--red">
                        <div className="advances-title">
                            <img src="images/no-meat 1.svg"></img>
                            <div className="advances-title--text">
                                <h3>Магазинные продукты</h3>
                                <h4>Некачественное мясо</h4>
                            </div>
                        </div>
                        <div className="advances-p">
                            <p>Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов.</p>
                        </div>
                    </div>
                </div>
                <Link to="/shop" className="btn-header btn-center" onClick={function (evt) {
                }}>
                    Купить
                </Link>
            </div>
        </div>
    );
}

export default MainPage;