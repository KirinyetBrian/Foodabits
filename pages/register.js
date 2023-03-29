import ApplicationLogo from '/components/ApplicationLogo'
import AuthCard from '/components/AuthCard'
import Button from '/components/Button'
import GuestLayout from '/components/Layouts/GuestLayout'
import Input from '/components/Input'
import InputError from '/components/InputError'
import Label from '/components/Label'
import Link from 'next/link'
import { useAuth } from '/src/hooks/auth'
import { useState } from 'react'
import Layout from '../layouts/Main'; 
import AuthSessionStatus from '/components/AuthSessionStatus';





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

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
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
                    {/* Name */}
                    <div className="form__input-row">
                      

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="form__input" 
                            placeholder="name"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.name} className="mt-2" />
                    </div>

                    {/* Email Address */}
                    <div className="form__input-row">
                     

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="form__input" 
                            placeholder="email"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="form__input-row">
                      

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="password"
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
                            placeholder="Confirm password"
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

                    <div className="flex items-center justify-end mt-4">
                     
                        <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign up</button>
                    </div>
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
