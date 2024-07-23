import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './authStyle.css'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [answer, setAnswer] = useState('')

    const navigate = useNavigate()

    // form Function

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address, answer });
            if (res && res.data.success) {
                toast.success(res.data.message)
                navigate("/login")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {

            // console.log(error)

            toast.error('Somthing went wrong')
        }
    }




    const handlePhoneNumberChange = (e) => {
        let input = e.target.value;

        // Remove non-digit characters
        input = input.replace(/\D/g, '');

        // Limit input to 12 characters (including '+')
        if (input.length > 12) {
            input = input.slice(0, 12);
        }

        // Format as +91 XXXXX-XXXXX
        let formattedPhoneNumber = '';
        if (input.startsWith('91')) {
            formattedPhoneNumber = input.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2-$3');
        } else {
            formattedPhoneNumber = input.replace(/(\d{3})(\d{4})(\d{4})/, '+$1 $2-$3');
        }

        setPhone(formattedPhoneNumber);
    };


    const handleNameChange = (e) => {
        const input = e.target.value;

        // Check if input contains only alphabetic characters
        if (/^[a-zA-Z\s]*$/.test(input) || input === '') {
            setName(input);
        }
    };



    console.log(process.env.REACT_APP_API)
    return (
        <>
            <section className='' >
                <div className="login_box">
                    <form onSubmit={handleSubmit} className='bg-[#eee3d1]'  >
                        <h1 className="heading text-dark" >Sign Up</h1>
                        <div className="input_box">
                            <input type="text" style={{ width: '300px', height: '40px' }} placeholder='Name' onChange={handleNameChange} value={name} id="exampleInputName" required />
                        </div>
                        <div className="input_box">
                            <input type="email" style={{ width: '300px', height: '40px' }} placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} id="exampleInputEmail" required />
                        </div>
                        <div className="input_box">
                            <input type="password" style={{ width: '300px', height: '40px' }} placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} id="exampleInputPassword1" required />
                        </div>
                        <div className="input_box">
                            <input type="tel" style={{ width: '300px', height: '40px' }} maxLength={12} placeholder='Phone No' onChange={handlePhoneNumberChange} value={phone} id="exampleInputPhone" required />
                        </div>
                        <div className="input_box">
                            <input type="text" style={{ width: '300px', height: '40px' }} placeholder='Address' onChange={(e) => setAddress(e.target.value)} value={address} id="exampleInputAddress" required />
                        </div>
                        <div className="input_box">
                            <input type="text" style={{ width: '300px', height: '40px' }} placeholder='answer' onChange={(e) => setAnswer(e.target.value)} value={answer} id="exampleInputAnswer" required />
                        </div>
                        <div className="remember_forgot mt-3 ">
                            <lable>
                                <input type="checkbox" required="" /> Remember me
                            </lable>
                        </div>
                        <button type="submit" style={{ backgroundColor: '#2d68a3', color: 'white' }} className="buttom">Register</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register