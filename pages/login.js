import ApplicationLogo from '/components/ApplicationLogo'
import AuthCard from '/components/AuthCard'
import AuthSessionStatus from '/components/AuthSessionStatus'
import Button from '/components/Button'
import GuestLayout from '/components/Layouts/GuestLayout'
import Input from '/components/Input'
import InputError from '/components/InputError'
import Label from '/components/Label'
import Link from 'next/link'
import { useAuth } from '/src/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../layouts/Main';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 

// type LoginMail = {
//   email: string;
//   password: string;
// }

const LoginPage = () => {
  // const { register, handleSubmit, errors } = useForm();

  // const onSubmit = async (data: LoginMail) => {
  //   const res = await postData(`${server}/api/login`, {
  //     email: data.email,
  //     password: data.password
  //   });

  //   console.log(res);
  // };

  const router = useRouter()

  const { login } = useAuth({
      middleware: 'guest',
      redirectIfAuthenticated: '/products',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRemember, setShouldRemember] = useState(false)
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  useEffect(() => {
      if (router.query.reset?.length > 0 && errors.length === 0) {
          setStatus(atob(router.query.reset))
      } else {
          setStatus(null)
      }
  })

  const submitForm = async event => {
      event.preventDefault()

      login({
          email,
          password,
          remember: shouldRemember,
          setErrors,
          setStatus,
      })
  }

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a><i className="icon-left"></i> Back to store</a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>
     
            
            <form className="form" onSubmit={submitForm}>
              <div className="form__input-row">
                <Input 
                  className="form__input" 
                  placeholder="email" 
                  id="email"
                  type="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  required
                  autoFocus
                />
<InputError messages={errors.email} className="mt-2" />
                {errors.email && errors.email.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }

                {errors.email && errors.email.type === 'pattern' && 
                  <p className="message message--error">Please write a valid email</p>
                }
              </div>
              
              <div className="form__input-row">
                <Input 
                  className="form__input" 
                  placeholder="password" 
                  id="password"
                  type="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                />
                <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="keepSigned" 
                      id="check-signed-in" 
                      // ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Keep me signed in</p>
                  </label>
                </div>
                <a href="/forgot-password" className="form__info__forgot-password">Forgot password?</a>
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social fb-btn"><i className="icon-facebook"></i>Facebook</button>
                <button type="button" className="btn-social google-btn"><img src="/images/icons/gmail.svg" alt="gmail" /> Gmail</button>
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign in</button>

              <p className="form__signup-link">Not a member yet? <a href="/register">Sign up</a></p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default LoginPage
  