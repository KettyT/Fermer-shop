
import ShopPage from "../pages/ShopPage";
import styled from "styled-components"

const StyledShopPage = styled(ShopPage) `


.menu-column-flex {
    display: flex;
}

.filters {
    background-color: #fff;
    margin-right: 20px;
}

.filters {
    width: 353px;
    box-sizing: border-box;
}

.filters-products {
    margin-top: 40px;
    padding: 0 20px 20px;
}

.filters-products li{
    height: 56px;
    align-items: center;

    list-style: none;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
}

.filters-products ul {
    margin-top: 12px;
}

.filters-padding-override {
    padding: 0 20px 8px;
}

.fieldset-title {
    padding-top: 24px;
    /*padding-left: 20px;*/
}

.filter-input {
    /*accent-color: rgba(252, 155, 39, 1);*/
    border: 1px solid #dddddd;
    width: 24px;
    height: 24px;
    appearance:none;
    background-color: #f6f6f6;
    /*margin-right: 16px;*/
}

.filter-input:checked {
    background-color: rgba(252, 155, 39, 1);
    border-color: #e38b23;
}

.filter-input:checked::after {
    content: "";
    width: 24px;
    height: 24px;
    background: url("/images/tick 1.svg") no-repeat center;
    position: absolute;
    background-size: 70%;
}

.filters-order {
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    padding: 0 20px 20px;
}

.order-input {
    border: 1px solid #dddddd;
    /*width: 313px;*/
    height: 48px;
    background-color: #f6f6f6;
    margin-top: 24px;
}

.span-price {
    margin-top: 20px;
}

.span-value {
    margin-top: 8px;
    font-size: 24px;
    font-weight: 700;
}

.btn-second-page {
    margin-top: 32px;
    width: 100%;
}

.products {
    margin-top: 40px;
    flex-grow: 1;
}


.ware-cards {
    display: flex;
    width: 727px;
}

.ware-cards--wrap {
    display: flex;
    padding: 20px;
    background-color: #fff;
    margin-bottom: 12px;
}
.ware-cards--innerwrap {
    display: flex;
    flex-direction: column;
    width: 412px;
    overflow: hidden;
}
.ware-cards .ware-cards--wrap .ware-cards--innerwrap {
    overflow: hidden;
}

.ware-cards img {
    margin-right: 20px;

}

.ware-cards h4 {
    margin: 0;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 700;
    font-family: Inter-light;
}


.ware-cards .btn:last-of-type {
    margin-right: 0;
}

.card-text {
    font-size: 14px;
    height: 129px;
    /*flex-grow: 1;*/
}

.price-background-blue {
    background-color: rgba(216, 236, 254, 1);
    padding: 4px 8px;
}

.ware-cards--description {
    /*display: flex;*/
    /*flex-direction: column;*/
    /*height: 166px;*/
}

.ware-cards--params {
    font-size: 14px;
}

.ware-cards--params p:last-of-type {
    margin: 0;
}

.ware-cards--properties {
    font-size: 14px;
}

.swiper {
    width: 600px;
    height: 300px;
}

.swiper-slide {
    width: 412px !important;
}

`

export default StyledShopPage;


