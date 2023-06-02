// Import Swiper React components
import { LIST_PRODUCT_DATA } from "../../data/list-product";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles for moule
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
const imageUrl = LIST_PRODUCT_DATA.map((item) => {
    return item.items.map((item) => item.imageUrl
    );
})
const [first,second, ...rest] = imageUrl;
export function SliderComponent() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={true}
            effect="fade"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{border: "1px solid #000"}}
        >
            {rest.map((slideContent) => (
                slideContent.map((image) =>
                    <SwiperSlide key={image} >
                        <img src={image} width="100%" height="500px" />
                    </SwiperSlide>)
            ))}
        </Swiper>
    );
}