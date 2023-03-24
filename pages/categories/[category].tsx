import { GetServerSideProps } from 'next'

import { useState } from 'react';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import Reviews from '../../components/product-single/reviews';
import { server } from '../../utils/server'; 
import axios from '../../src/lib/axios'
import useSwr from 'swr';
import { useAuth } from '../../src/hooks/auth';
// types
import { ProductType } from 'types';

type ProductPageType = {
  pid: ProductType;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log("pid:"+query.pid)
  const pid = query.pid;
  // const res = await fetch(`${server}/api/product/${pid}`);
  // const product = await res.json();

  return {
    props: {
      pid,
    },
  }
}

const Product = ({ pid }: ProductPageType) => {
  const [showBlock, setShowBlock] = useState('description');
  // const { user } = useAuth({ middleware: 'auth' })
  const fetchRecipes = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-recipe?id=${pid}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
     .then(function (result){
      // console.log("error:"+result.data.error);
      // console.log("status:"+result.data.Data.id)
      return result.data.Data;
      ;})
    // .then(function(res){

    //   console.log("res:"+res.data.id)
    //   return response.data
    // })
    // .catch(function(error){
    //   console.log("error:"+error)
    // }
      // );
   return response
  };

  const { data ,error} = useSwr(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-recipe`, fetchRecipes,{ refreshInterval: 1000 });
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log("data:"+data.id)
  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={data} />
            <Content product={data} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button type="button" onClick={() => setShowBlock('description')} className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}>Description</button>
              <button type="button" onClick={() => setShowBlock('reviews')} className={`btn btn--rounded ${showBlock === 'reviews' ? 'btn--active' : ''}`}>Reviews (2)</button>
            </div>

            <Description show={data}  />
            {/* <Description  show={showBlock === 'description'} /> */}
            {/* <Reviews product={data} show={showBlock === 'reviews'} /> */}
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
}

export default Product
