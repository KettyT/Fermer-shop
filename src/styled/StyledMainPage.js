import MainPage from "../pages/MainPage";
import styled from "styled-components"

const StyledMainPage = styled(MainPage) `



.frame-blue {
    display: flex;
    align-items: center;

}

.description {
    background-color: rgba(216, 236, 254, 1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 600px;
}

.description-text {
    width: 637px;

}

.description-text h1 {
    font-size: 44px;
    text-align: left;
}

.description-p {
    width: 538px;
    text-align: left;
    font-size: 18px;
}

.description-img {
    flex-grow: 1;
    /*display: inline-block;*/
position: relative;
    background-repeat: no-repeat;
    /*height: 627px;*/
    /*width: 436px;*/
}

.description-img--elipse {
    background: url("/images/ellipse .svg");
    width: 446px;
    height: 447px;
    position: absolute;
    top: 76px;
    right: 0;
}

.description-img--man {
    background-image: url("/images/man.svg");
    background-repeat: no-repeat;
    width: 273px;
    height: 627px;
    z-index: 1;
    position: relative;
    right: -91px;
    bottom: -69px;
}

.advances h2 {
    margin-top: 100px;
    margin-bottom: 64px;
}

.advances-width {
    width: 540px;
    margin-bottom: 20px;

}

.advances-ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}

.advances-title {
    display: flex;
    margin-top: 20px;
}

.advances-title img {
    margin-left: 20px;
    margin-right: 20px;
}

.advances-title--text {

}

.advances-squares--green {
    background-color: rgba(225, 237, 206, 1);
}

.advances-squares--green h3 {
    background-color: rgba(136, 170, 77, 1);

}

.farm-products h3 {
    font-family: "Inter-light";
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    margin: 0;
    padding: 0;
}

.farm-products h4 {
    font-family: "Inter-light";
    font-size: 18px;
    font-weight: 900;
    margin: 0;
    padding: 0;
    margin-top: 11px;
}

.farm-products p {
    font-family: "Inter-light";
    font-size: 18px;
    font-weight: 300;
    line-height: 150%;
    text-align: left;

}

.advances-p {
    margin-left: 20px;
    margin-bottom: 20px;
    width: 467px;
}

.advances-squares--red{
    background-color: rgba(248, 221, 215, 1);
}

.advances-squares--red h3 {
    background-color: rgba(247, 85, 49, 1);
}









































`;

export default StyledMainPage;

