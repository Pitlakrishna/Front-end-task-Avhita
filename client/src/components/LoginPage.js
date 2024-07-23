import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
import { Spin } from 'antd';
import './authStyle.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    // const [auth, setAuth] = useAuth()

    console.log(password)

    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password })

            if (res && res.data.success) {
                < Spin size="large" />
                setTimeout(() => {
                    navigate(location.state || "/page")
                }, 1000);
            } else {
                setError(true)
            }
        } catch (error) {
            toast.error('Somthing went wrong')
            console.log(error)
        }
    }




    return (
        <section className='' >
            <div className="login_box" >
                <form onSubmit={handleSubmit} >
                    <div className='d-flex justify-content-center flex-column align-items-center    ' >
                        <img className='mb-2 pb-2' style={{ width: '230px', height: '70px', borderBottom: '1px solid #d3d3d3' }} src='https://res.cloudinary.com/dntrdevpr/image/upload/v1716623518/logo_svg_q9o7l7.png' />
                        <p className='text-center' style={{ color: '#027daf', fontSize: '15px', fontWeight: '600', width: '300px' }} >Login using social media to <br /> get quick acces</p>
                    </div>
                    <h1 className='title text-center mt-3' style={{ fontSize: '20px' }} >Login</h1>
                    <div className="input_box">
                        <input type="email" style={{ height: '38px' }} placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} id="exampleInputEmail" required />
                    </div>
                    <div className="input_box">
                        <input type="password" style={{ height: '38px' }} placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} id="exampleInputPassword1" required />
                    </div>
                    <div className="remember_forgot mt-3 d-flex justify-content-end">
                        <Link to={"/forgotpassword"} >
                            <a href="#" className="for_text text-dark" style={{ fontSize: '13px' }} >
                                Forgot Password?
                                <b> Change Password</b>
                            </a>
                        </Link>
                    </div>
                    <button type="submit" className="buttom mb-5" style={{ backgroundColor: '#007aac', color: 'white' }} >Login</button>
                    <p className='' >{error ? "Name or Password Invalid" : ""}</p>
                </form>
            </div>
        </section>
    )
}

export default Login

