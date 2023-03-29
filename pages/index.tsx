import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import { useAuth } from '../src/hooks/auth';

const IndexPage = () => {
  const { user } = useAuth({ middleware: 'auth' })
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/slider-2.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Hydrate all throughout the day!</h3>
              <a href="/products" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/slider-5.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Eat fruits</h3>
              <a href="/products" className="btn btn--rounded">More details</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/slider-7.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Avoid Junk!</h3>
              <a href="/products" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why use Foodabits?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Easy to Use</h4>
                <p>Our app is user-friendly and easy to navigate, so you can quickly find the information you need.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Reliable Information</h4>
                <p>All of our recommendations are backed by reliable sources and reviewed by our team of nutrition experts.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Save Time and Money</h4>
                <p>Our recommendations can help you save time and money by making informed choices about the food you eat.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Free to Use</h4>
                <p>Our app is completely free to use, with no hidden fees or charges.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage