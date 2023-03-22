import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
// import { server } from '../utils/server'; 
// import { postData } from '../utils/services'; 
import axios from 'src/lib/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { result } from 'lodash';
import { useAuth } from '/src/hooks/auth';
import { useState, useEffect } from "react";

const newRecipe = () => {

  const { register, handleSubmit, errors } = useForm();
  const { user } = useAuth({ middleware: 'auth' })
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
// console.log(user);
 const submitForm = async (event) => {
        event.preventDefault()

        const formData = new FormData();
formData.append('title', event.target.title.value);
formData.append('description', event.target.description.value);
formData.append('image_url', event.target.image_url.files[0]);
formData.append('no_of_people', event.target.no_of_people.value);
formData.append('cooking_time', event.target.cooking_time.value);
formData.append('difficulty', event.target.difficulty.value);
formData.append('category_id', event.target.category_id.value);
formData.append('ingredients', event.target.ingredients.value);
formData.append('instructions', event.target.instructions.value);
         
const results = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Recipe`, formData, {
  headers: {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
  },
})
        .then(function (result){
          console.log("error:"+result.data.error);
          console.log("status:"+result.data.status);
          if (result.data.status=='success') {
            toast.success(result.message+'!', {
                position: toast.POSITION.TOP_CENTER
              });
             
             
              // function openDashboard() {
              //   router.reload();
              // }

              // setTimeout(openDashboard, 5000);

     } else {

            toast.error(result.data.message+'!', {
                position: toast.POSITION.TOP_LEFT
              });
            
          }
        })
        // .catch(error => {
        //   toast.error('we cant upload recipe!', {
        //     position: toast.POSITION.TOP_LEFT
        //   });
        // });
          //  console.log("results:"+results.status);

      


    }
    


  return (
    <Layout>
       <ToastContainer autoClose={8000} />
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/">
              <a><i className="icon-left"></i> Home</a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Upload New Recipe</h2>            
            <form className="form" onSubmit={submitForm}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="Title" 
                  type="text" 
                  name="title"
                />

                
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="textarea" 
                  placeholder="description" 
                  name="description"

                  required
               
                />
              
              </div>

              {/* <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="file" 
                  placeholder="image" 
                  name="image_url"
                 
                />
                
              </div> */}
                    <div className="form__input-row">
            <input 
              className="form__input" 
              type="file" 
              placeholder="image" 
              name="image_url"
              required
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            {imageUrl && (
            <img src={imageUrl} 
            alt="Selected Image" 
            style={{ maxWidth: '100%', maxHeight: '300px' }}
            />

            )}
          </div>


              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="number" 
                  placeholder="serving" 
                  name="no_of_people"
                  required
                />
              
              </div>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="text" 
                  placeholder="time in minutes" 
                  name="cooking_time"
                  required
                />
                
              </div>


              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="text" 
                  placeholder="difficulty" 
                  name="difficulty"
                  required
                />
             
              </div>

              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="text" 
                  placeholder="category" 
                  name="category_id"
                 
                />
               
              </div>

              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="text" 
                  placeholder="ingredients" 
                  name="ingredients"
                 
                />
               
              </div>

              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="text" 
                  placeholder="instructions" 
                  name="instructions"
                 
                />
               
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Post</button>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default newRecipe
  