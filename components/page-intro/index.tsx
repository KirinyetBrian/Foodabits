import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slider-9.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>What do you want to cook?</h2>
                <a href="/products" className="btn-shop"><i className="icon-right"></i>Explore</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slider-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Thousands of recipes to choose from </h2>
                <a href="/products" className="btn-shop"><i className="icon-right"></i>Explore</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Eat Healthy</h4>
                <p>We help you decide what to eat instantly</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Lots of recipes</h4>
                <p>Choose from thousands of recipes</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>No skipping meals</h4>
                <p>We remind you when to eat</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro