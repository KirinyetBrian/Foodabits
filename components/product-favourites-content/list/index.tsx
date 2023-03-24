import useSwr from 'swr';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';
import axios from 'src/lib/axios'
const ProductsContent = () => {
  //const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const fetchRecipes = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Likes/{Like}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    // .then(function(res){
    //   console.log("res:"+res.data)
    //   return res.data
    // })
    // .catch(function(error){
    //   console.log("error:"+error)
    // }
    //   );
       return response.data;
  };
  const { data, error } = useSwr(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Likes/{Like}`, fetchRecipes,{ refreshInterval: 1000 });

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <>
      {!data && 
        <ProductsLoading />
      }

      {data &&
        <section className="products-list">
          {data.map((item: ProductTypeList)  => (
            <ProductItem 
              id={item.id} 
              title={item.title}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              image_url={item.image_url} 
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent