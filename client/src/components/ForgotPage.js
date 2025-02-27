import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import './authStyle.css'

// "proxy": "http://localhost:8080",

const ForgotPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [answer, setAnswer] = useState("")
    // const [auth, setAuth] = useAuth()

    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgotpassword`, { email, password })
            if (res && res.data.success) {
                toast.success(res.data && res.data.message)
                navigate("/login")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error('Somthing went wrong')
            console.log(error)
        }
    }
    return (
        <section className='' >
            <div className="login_box" style={{ backgroundColor: '#eee3d1' }} >
                <form onSubmit={handleSubmit} >
                    <div className='d-flex justify-content-center flex-column align-items-center    ' >
                        <img className='mb-2 pb-2' style={{ width: '230px', height: '70px', borderBottom: '1px solid #d3d3d3' }} src='https://res.cloudinary.com/dntrdevpr/image/upload/v1716623518/logo_svg_q9o7l7.png' />
                        <p className='text-center' style={{ color: '#377fc8', fontSize: '15px', fontWeight: '600', width: '300px' }} >Login using social media to <br /> get quick acces</p>
                    </div>
                    <h1 className='title text-center' style={{ fontSize: '20px' }} >Reset Password</h1>
                    <div className="input_box">
                        <label>Email</label>
                        <input type="email" style={{ height: '38px' }} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} value={email} id="exampleInputEmail" required />
                    </div>
                    <div className="input_box">
                        {/* <span className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="#ffffff"
                                className="bi bi-shield-lock-fill"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"
                                />
                            </svg>
                        </span> */}
                        <label>Password</label>
                        <input type="password" style={{ height: '38px' }} placeholder='Reset your password' onChange={(e) => setPassword(e.target.value)} value={password} id="exampleInputPassword1" required />
                    </div>
                    {/* <div className="input_box">
                        <label>Answer</label>
                        <input type="email" style={{ height: '38px' }} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} value={email} id="exampleInputEmail" required />
                    </div> */}
                    <button type="submit" className="buttom mb-2" style={{ backgroundColor: '#007aac', color: 'white' }} >Reset</button>
                </form>
            </div>
        </section>
    )
}



export default ForgotPage