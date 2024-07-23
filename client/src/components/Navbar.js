import React, { useState } from 'react';
import { Button, Popconfirm } from 'antd';
import "./authStyle.css"
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { PiSquaresFour } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { FaCaretDown } from "react-icons/fa";
import ProfileCard from '../cards/ProfileCard';
import { IoMdSearch } from "react-icons/io";




const Navbar = () => {

    const navigate = useNavigate()

    // const LagoutHandle = () => {
    //     navigate('/login')
    // }

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showPopconfirm = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            navigate('/login')
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <div className='navbar' style={{ backgroundColor: '#001a4d' }} >
            <div className='imageIconHeader1 d-flex'>
                <div className='d-flex align-items-center pe-3 me-3 ps-4 borderGrad '>
                    <Link to='/page'> <img width={60} src='https://res.cloudinary.com/dntrdevpr/image/upload/v1716468401/Logo_Icon_zzldpu.png' /></Link>
                    <hr className='hr-line1' />
                </div>
                <div className='dashboard'>
                    <Link to='/dashboard' className="dashboardLink" >
                        <img className='imageDashboard' src='https://res.cloudinary.com/dntrdevpr/image/upload/v1716459697/Header_Dashboard_icon_u5rn4z.png' />
                    </Link>
                    <Link to='/page' className="dashboardLink" >
                        <img src='https://res.cloudinary.com/dntrdevpr/image/upload/v1716459698/Header_registration_icon_xqjvi0.png' />
                    </Link>
                    <Link to='' className="dashboardLink" >
                        <img src='https://res.cloudinary.com/dntrdevpr/image/upload/v1716459696/Header_Reports_Icon_llsjn6.png' />
                    </Link>
                </div>
                <div className='d-flex justify-content-center align-items-center  ms-4 search-container '     >
                    <div className="d-flex align-items-center search">
                        <IoMdSearch style={{ color: 'black', fontSize: '23px' }} className='ms-2 me-2' />
                        <input
                            className=" me-2  search-input"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{ border: 'none', width: '300px', height: '25px' }}
                        />
                        <VscSettings style={{ color: 'black', width: '25px', outline: 'none', fontSize: '30px' }} className='pe-2' />
                    </div>
                    <PiSquaresFour className='fs-3 text-white ms-3' />
                </div>
            </div>
            <div className='imageIconHeader2' >
                <ul className='nameContainer' style={{ listStyleType: 'none', display: 'flex' }} >
                    <li className='text-center  pe-1'  >Dr.Suresh Kumar</li> <hr className='hr-line' />
                    <li className='text-center  pe-1 ' >
                        <button
                            type="button"
                            style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Profile & Settings<FaCaretDown className=' ms-1' />
                        </button>
                    </li> <hr className='hr-line' />
                    <li className='text-center'   >
                        <Popconfirm
                            title="Confirm Logout"
                            description="Are you sure you want to logout?"
                            open={open}
                            onConfirm={handleOk}
                            okButtonProps={{
                                loading: confirmLoading,
                            }}
                            onCancel={handleCancel}
                        >
                            <Button className='' style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }} onClick={showPopconfirm}>
                                Logout
                                <FiLogOut className='fs-5 ms-1' />
                            </Button>
                        </Popconfirm>
                    </li>
                </ul>
            </div>
            <div
                className="modal modal-sm fade profileBox"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-md p-5 ">
                    <div className="modal-content boxContent " style={{ padding: '12px' }} >
                        <div className="modal-body profileItems bg-light " style={{ lineHeight: '5px' }} >
                            <div className='d-flex justify-content-end' >
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="ntn btn-close btn-sm mb-3" style={{ height: '5px' }} ></button>
                            </div>
                            <p className='d-flex justify-content-between align-items-center' > My Profile </p>
                            <p>Change Password</p>
                            <p>Settings</p>
                            <p style={{ borderBottom: 'none', padding: '0' }} >Help</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar


