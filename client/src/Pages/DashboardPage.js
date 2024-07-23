import React from 'react'
import Layout from "../components/layout.js"
import { Table, Avatar } from 'antd';
import Form from '../components/Form.js';
import { FaCircle } from "react-icons/fa";
import Ecgform from './Ecgform.js';
import "./Ecg_styles.css"



const HomePage = () => {
    let img = "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg        "
    let img2 = "https://img.freepik.com/free-photo/medium-shot-doctor-wearing-coat_23-2148816198.jpg?t=st=1716893300~exp=1716896900~hmac=cac9dcecb27171dad4371edcd89223fdaba76efacfd35ecaf4faf33b83ec1dd2&w=996"
    let img3 = "https://img.freepik.com/free-photo/young-woman-doctor-white-coat-with-phonendoscope-looking-confident-standing-with-crossed-arms-blue-isolated-background_141793-9779.jpg?size=626&ext=jpg"
    let img4 = "https://media.istockphoto.com/id/92347250/photo/portrait-of-a-doctor.jpg?s=612x612&w=0&k=20&c=yKBhDy7ch065QV8mE4ocec8n9uec9VmBDmT137ZjHFo="
    return (
        <Layout>
            <div>
                <div className='dataRow ' style={{ padding: '5px 0', display: 'flex', borderBottom: '1px solid gray' }}>
                    <div className='text-end  ps-5  d-flex flex-column justify-content-center alignt-items-center ' style={{ height: '120px', padding: '20px', width: '250px', borderRight: "4px solid #383Bfb", fontWeight: '500' }} >
                        <p>02/05/24(10:30am)</p>
                        <p>02/05/24(10:30am)</p>
                        <p><FaCircle style={{ color: '#40ff00' }} className=' me-2' />(24 Days)</p>
                    </div>
                    <div className="card  ps-3 pe-3" style={{ width: 500, border: 'none' }}  >
                        <div className="row g-0" style={{}} >
                            <div className="col-md-4 d-flex align-items-center " style={{ paddingLeft: '50px' }}>
                                <Avatar src={img3} style={{ width: '120px', height: '80px' }} className="" alt="..." />
                            </div>
                            <div className="col-md-8" style={{ lineHeight: '13px' }}>
                                <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }} >
                                    <h5 className="card-title" style={{ color: '#383Bfb' }}  >Andrea Wright</h5>
                                    <p className="card-text" style={{ fontWeight: '600' }} >04-03-1975</p>
                                    <p className="card-text" style={{ display: 'flex', flexDirection: 'column', fontWeight: '600' }} >
                                        <small className="text-body-secondary pb-2">CC: Heart Palpitations</small>
                                        <small className="text-body-secondary" >Doctor: Grace Kerr</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ecgBox'>
                        <Ecgform />
                    </div>
                </div>
                <div className=' dataRow ' style={{ padding: '5px 0', display: 'flex', borderBottom: '1px solid gray' }} >
                    <div className='text-end ps-5  d-flex flex-column alignt-items-center justify-content-center' style={{ height: '120px', padding: '20px', width: '250px', borderRight: "4px solid #faa150", fontWeight: '500' }} >
                        <p>02/05/24(10:30am)</p>
                        <p>02/05/24(10:30am)</p>
                        <p><FaCircle style={{ color: '#40ff00' }} className=' me-2' />(24 Days)</p>
                    </div>
                    <div className="card  ps-3 pe-3" style={{ width: 500, border: 'none' }}  >
                        <div className="row g-0" style={{}} >
                            <div className="col-md-4 d-flex align-items-center " style={{ paddingLeft: '50px' }}>
                                <Avatar src={img2} style={{ width: '120px', height: '80px' }} className="" alt="..." />
                            </div>
                            <div className="col-md-8" style={{ lineHeight: '13px' }} >
                                <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }} >
                                    <h5 className="card-title" style={{ color: '#faa150' }}  >Andrea Wright</h5>
                                    <p className="card-text" style={{ fontWeight: '600' }} >04-03-1975</p>
                                    <p className="card-text" style={{ display: 'flex', flexDirection: 'column', fontWeight: '600' }} >
                                        <small className="text-body-secondary pb-2">CC: Heart Palpitations</small>
                                        <small className="text-body-secondary" >Doctor: Grace Kerr</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ecgBox'>
                        <Ecgform />
                    </div>
                </div>
                <div className=' dataRow ' style={{ padding: '5px 0', display: 'flex', borderBottom: '1px solid gray' }} >
                    <div className='text-end ps-5  d-flex flex-column alignt-items-center justify-content-center' style={{ height: '120px', padding: '20px', width: '250px', borderRight: "4px solid #8af98b", fontWeight: '500' }} >
                        <p>02/05/24(10:30am)</p>
                        <p>02/05/24(10:30am)</p>
                        <p><FaCircle style={{ color: '#40ff00' }} className='me-2' />(24 Days)</p>
                    </div>
                    <div className="card  ps-3 pe-3" style={{ width: 500, border: 'none' }}  >
                        <div className="row g-0 d-flex flex-row" style={{}} >
                            <div className="col-md-4 d-flex align-items-center " style={{ paddingLeft: '50px' }}>
                                <Avatar src={img} style={{ width: '100px', height: '80px' }} className="" alt="..." />
                            </div>
                            <div className="col-md-8" style={{ lineHeight: '13px' }} >
                                <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}  >
                                    <h5 className="card-title" style={{ color: '#8ad98b' }}  >Trasy Ellision</h5>
                                    <p className="card-text" style={{ fontWeight: '600' }} >04-03-1975</p>
                                    <p className="card-text" style={{ display: 'flex', flexDirection: 'column', fontWeight: '600' }} >
                                        <small className="text-body-secondary pb-2">CC: Heart Palpitations</small>
                                        <small className="text-body-secondary" >Doctor: Grace Kerr</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ecgBox'  >
                        <div><Ecgform /></div>
                    </div>
                </div>
                <div className=' dataRow ' style={{ padding: '5px 0', display: 'flex', borderBottom: '1px solid gray' }} >
                    <div className='text-end ps-5  d-flex flex-column alignt-items-center justify-content-center' style={{ height: '120px', padding: '20px', width: '250px', borderRight: "4px solid #e6e817", fontWeight: '500' }} >
                        <p>02/05/24(10:30am)</p>
                        <p>02/05/24(10:30am)</p>
                        <p><FaCircle style={{ color: '#40ff00' }} className='me-2' />(24 Days)</p>
                    </div>
                    <div className="card  ps-3 pe-3" style={{ width: 500, border: 'none' }}  >
                        <div className="row g-0" style={{}} >
                            <div className="col-md-4 d-flex align-items-center " style={{ paddingLeft: '50px' }}>
                                <Avatar src={img4} style={{ width: '120px', height: '80px' }} className="" alt="..." />
                            </div>
                            <div className="col-md-8" style={{ lineHeight: '13px' }} >
                                <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}  >
                                    <h5 className="card-title" style={{ color: '#e6e817' }} >Matt Dowd</h5>
                                    <p className="card-text" style={{ fontWeight: '600' }} >04-03-1975</p>
                                    <p className="card-text" style={{ display: 'flex', flexDirection: 'column', fontWeight: '600' }} >
                                        <small className="text-body-secondary pb-2">CC: Heart Palpitations</small>
                                        <small className="text-body-secondary" >Doctor: Grace Kerr</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ecgBox'>
                        <Ecgform />
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default HomePage