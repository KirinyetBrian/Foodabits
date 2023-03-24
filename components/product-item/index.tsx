import Link from 'next/link';
import { some } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavProduct } from 'store/reducers/user';
import { RootState } from 'store';
import { ProductTypeList } from 'types';
import axios from 'src/lib/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductItem = ({  id, title, image_url }: ProductTypeList) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);



  const isFavourite = some(favProducts, productId => productId === id);

  const like_recipe = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Likes?recipe_id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(function(result){
      console.log("likes:"+result.data.status)

      if (result.data.status=="success") {
        toast.success(result.data.response+'!', {
            position: toast.POSITION.TOP_CENTER
          });


 }
    })
    .catch(function(error){
      console.log("error:"+error)
    }
      );
    //  return response.data;
  };

  const toggleFav = () => {    
    like_recipe()
    dispatch(toggleFavProduct(
      { 
        id,
      }
    ))
  }

  return (
    
    <div className="product-item">
         <ToastContainer autoClose={2000} />
      <div className="product__image">
        <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>

        <Link href={`/product/${id}`}>
          <a>
            {/* <img src='/public/images/'{image_url} alt="product" /> */}
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${image_url}`} alt="product" />

            {/* {discount && 
              <span className="product__discount">{discount}%</span>
            } */}
          </a>
        </Link>
      </div>
      
      <div className="product__description">
        <h3>{title}</h3>
        {/* <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
          <h4>${ currentPrice }</h4>

          {discount &&  
            <span>${ price }</span>
          }
        </div> */}
      </div>
    </div>
  )
};


export default ProductItem