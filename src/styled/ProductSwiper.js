import styled from "styled-components";
import { Swiper } from 'swiper/react';

export const ProductSwiper = styled(Swiper)`
  // width: 727px;
  width: 100%;
  height: 100%;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export default ProductSwiper;