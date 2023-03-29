import Layout from '../layouts/Main';
import Link from 'next/link';
import { useAuth } from '/src/hooks/auth';
import AuthCard from '/components/AuthCard';
import AuthSessionStatus from '/components/AuthSessionStatus';
import { useState } from 'react';
import Label from '/components/Label';
import Input from '/components/Input'
import InputError from '/components/InputError' 

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        Register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

return(
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/">
            <a><i className="icon-left"></i> Back to store</a>
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">Create an account and Live healthy</h2>
          <p className="form-block__description"></p>
          
          <form className="form" onSubmit={submitForm} >
            <div className="form__input-row">
            <Input
            
                            id="name"
                            placeholder="name"
                            type="text"
                            value={name}
                            className="form__input" 
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                        />
                              <InputError messages={errors.name} className="mt-2" />
            </div>
            
            {/* <div className="form__input-row">
              <input className="form__input" placeholder="Last Name" type="text" name />
            </div> */}
            
            <div className="form__input-row">
              {/* <input className="form__input" placeholder="Email" type="text"  name='email'/> */}
              <Input
                            id="email"
                            className="form__input" 
                            type="email"
                            value={email}
                         placeholder='email'
                            onChange={event => setEmail(event.target.value)}
                            required
                        />
                         <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
            </div>
            
            <div className="form__input-row">
              {/* <input className="form__input" type="Password" placeholder="Password" name="password" /> */}
              <Input
                            id="password"
                            type="password"
                            placeholder="password"
                            value={password}
                            className="form__input" 
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />

<InputError
                            messages={errors.password}
                            className="mt-2"
                        />
            </div>

            
              {/* Confirm Password */}
              <div className="form__input-row">
              <Input
                            id="passwordConfirmation"
                            type="password"
                            placeholder="Confirm Password"
                            value={passwordConfirmation}
                            className="form__input" 
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />

                        <InputError
                            messages={errors.password_confirmation}
                            className="mt-2"
                        />
              </div>

            {/* <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check"></span>
                    <p>I agree to the Google Terms of Service and Privacy Policy</p>
                </label>
              </div>
            </div> */}

            <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign up</button>

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Are you already a member?</a>
              </Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  </Layout>
)
          }
export default Register
  