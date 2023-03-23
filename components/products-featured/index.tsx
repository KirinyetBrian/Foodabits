import ProductsCarousel from './carousel';
import useSwr from 'swr';
import axios from 'src/lib/axios'
const ProductsFeatured = () => {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const fetchRecipes = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Recipe`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    // .then(function(res){
    //   console.log("res:"+res.data)
    // })
    // .catch(function(error){
    //   console.log("error:"+error)
    // }
    //   );
     return response.data;
  };
  
  const { data ,error} = useSwr(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Recipe`, fetchRecipes,{ refreshInterval: 1000 });
  

  // const { data ,error} = useSwr(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Recipe`, fetcher,{ refreshInterval: 1000 });

  if (error) return <div>Failed to load</div>
  

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <a href="/products" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured