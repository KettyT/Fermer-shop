import WareCard from "./utils/WareCard";
import mainStorage from "./utils/Storage"
import {UlStyled} from "./styled/tags";

function Menu () {



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
                    <input className="order-input" name="input-adress" id="input-adress" placeholder="Введите адрес доставки"/>
                    <span className="span-price">Цена</span>
                    <span className="span-value">1200 руб.</span>
                    <button className="btn-header btn-second-page"> Купить </button>
                </fieldset>
            </section>

            <section className="products">
                <legend></legend>
                <UlStyled>
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

                    {/*<li className="ware-cards">
                        <WareCard imgpath="/images/Rectangle 2 .png"
                                  imgAlt="Филе бедра цыпленка"
                                  title="Филе бедра цыпленка" text="Филе бедра без кожи и кости. Птица содержится
                        в свободных птичниках, выращивается на натуральных
                        зерновых кормах, что влияет положительно на вкус мяса.
                        Филейная часть бедра обладает насыщенным вкусом
                        и мясным ароматом."
                        />
                    </li>
                    <li className="ware-cards">
                        <WareCard
                            imgpath="/images/Rectangle 1.png"
                            imgAlt="Филе бедра гуся" title="Филе бедра гуся"
                            text="Филе бедра гуся - это тонко нарезанный продукт, который
                         понравится всем любителям сырокопченых продуктов.
                         Необычный вкус, аппетитный аромат и тонкое послевкусия
                         отличает сырокопченого гуся от других подобных продуктов."
                            priceProduct="400 руб. / 700 гр."
                            params="<p>
                            <b></b>
                        </p>
                        <p>
                            <b></b>
                        </p>
                        <p>
                            <b>:</b> .
                        </p>
                        <p>
                            <b>:</b> 6 суток.
                        </p>
                        <p>
                            <b>:</b>
                        </p>"

                            properties="<p>
                            <b>:</b>
                        </p>
                        <p>
                            <b>:</b>
                        </p>"
                        />
                        <div className="ware-cards--wrap">
                            <img src="images/Rectangle 1.png" alt="Филе бедра гуся"/>
                        </div>

                    </li>
                    <li className="ware-cards">
                        <WareCard imgpath="/images/potato.webp"
                                  imgAlt="Филе бедра цыпленка"  title="Картофель"
                                  text="Картофель отличается нежной, рассыпчатой текстурой
                         и приятным сладковатым вкусом. Такой картофель
                          можно запекать или отваривать, не очищая тонкую кожицу."/>
                        <div className="ware-cards--wrap">
                            <img src="images/Rectangle 1.png" alt="Мякоть бедра говяжья"/>
                        </div>

                    </li>
                    <li className="ware-cards">
                        <WareCard imgpath="/images/mashroom.webp"
                                  imgAlt="Шампиньоны мини"
                                  title="Шампиньоны мини" text="Эти шампиньоны – миниатюрные и очень питательные грибы,
                         которые не только обладают неповторимым вкусом,
                          но и способствуют укреплению здоровья. Они богаты витаминами группы B,
                           калием, фосфором, железом и медью, а также антиоксидантами.
                           Мелкие шампиньоны идеально подходят для приготовления соусов,
                           супов, гарниров и различных мясных блюд.
                           Их нежный аромат и приятная текстура добавят утонченности каждому блюду,
                           придадут особый вкус и аппетитный вид."/>


                    </li>
                    <li className="ware-cards">
                        <WareCard imgpath="/images/berry.webp"
                                  imgAlt="Голубика"
                                  title="Голубика" text="Голубика – синяя ягода с белесым налетом, вкусная, ароматная,
                         обладающая массой полезных свойств. Голубика используется как в свежем,
                          так и в переработанном виде. Из нее готовят варенье, пастилу, компот, желе,
                           кисель, мусс, вино, квас, сырое варенье (протертая с сахаром ягода)."/>
                    </li>*/}
                </UlStyled>

            </section>

        </div>
    );
}

export default Menu;