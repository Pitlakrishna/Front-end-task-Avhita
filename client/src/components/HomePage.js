import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { Select, Radio } from "antd"
import '../App.css'
import TablePage from './tablePage'
const { Option } = Select


const HomePage = () => {
    const [list, setList] = useState([])
    const [clinic, setSelectedClinic] = useState('');
    const [device, setSelectedDevice] = useState('');
    const [type, setSelectedType] = useState('');

    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')

    const [state, setState] = useState([{ value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "West Bengal", label: "West Bengal" },])

    const navigate = useNavigate()

    const getData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/v1/form/getformdata`)
            setList(data?.patient)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [list])

    const handlerSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/api/v1/form/formdata', { firstName, lastName, clinic, device, type });
            console.log({ firstName, lastName, clinic, device, type })
            if (res && res.data.success) {
                navigate("/page")
            }
            navigate("/page")
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className='container' >
            <div className='row mt-5' >
                <div style={{ border: '1px solid', overflow: 'none' }} className='col-md-12 p-5 mb-5' >
                    <div className='d-flex justify-content-between mb-4' style={{ borderBottom: '1px solid #f5f5f0' }} >
                        <h1 className='fs-4 fw-bold text-info ' >New Enrollment</h1>
                        <p className='fs-6' ><span className='star' >*</span> Required Field</p>
                    </div>
                    <div className='form-container' >
                        <form className='' onSubmit={handlerSubmit} >
                            <div style={{ width: '500px' }} >
                                <label>Select Clinic<span className='star' >*</span></label>
                                <Select
                                    showSearch
                                    variant={false}
                                    placeholder="---Select---"
                                    size='large'
                                    className='form-select mb-3'
                                    onChange={(value) => setSelectedClinic(value)}
                                    required
                                >
                                    <Option value="Suvarchala Dara" >Suvarchala Dara</Option>
                                    <Option value="Amitra Caines" >Amitra Caines</Option>
                                </Select>
                            </div>
                            <div style={{ width: '500px' }} >
                                <label>Select Device<span className='star' >*</span></label>
                                <Select
                                    showSearch
                                    variant={false}
                                    placeholder="---Select---"
                                    size='large'
                                    className='form-select mb-3'
                                    onChange={(value) => setSelectedDevice(value)}
                                >
                                    <Option key={0} value="202309/C881508" >202309/C881508</Option>
                                    <Option key={1} value="202345/C9B6357" >202345/C9B6357</Option>
                                    <Option key={2} value="202345/C9B6370" >202345/C9B6370</Option>
                                    <Option key={3} value="202345/C9B6339" >202345/C9B6339</Option>
                                    <Option key={4} value="202345/C9B6339" >202345/C9B6339</Option>
                                    <Option key={5} value="202311/C882541" >202311/C882541</Option>
                                </Select>
                            </div>
                            <div style={{ width: '500px' }} >
                                <label>Enrollment Type<span className='star' >*</span></label>
                                <Select
                                    showSearch
                                    variant={false}
                                    placeholder="---Select---"
                                    size='large'
                                    className='form-select mb-3'
                                    onChange={(value) => setSelectedType(value)}
                                >
                                    <Option value="jack" >jack</Option>
                                    <Option value="lucy" >Lucy</Option>
                                    <Option value="Yiminghe" >yiminghe</Option>

                                </Select>
                            </div>
                            <div className=' row mt-3' >
                                <div className='col-md-2'>
                                    <p style={{ alignSelf: 'flex-start', }} >Enter Patient info</p>
                                </div>
                                <div className='info col-md-10 p-4 ps-5' style={{ border: '1px solid black', borderRadius: '15px' }} >
                                    <div style={{ flexWrap: 'wrap' }}>
                                        <div className=""  >
                                            <label>Last Name<span className='star' >*</span> </label>
                                            <input type='text' style={{ width: '200px' }} onChange={(e) => setLastName(e.target.value)} value={lastName} className='form-control' placeholder='Last Name' />
                                        </div>
                                        <div className=""  >
                                            <label>First Name<span className='star' >*</span> </label>
                                            <input type='text' style={{ width: '200px' }} onChange={(e) => setFirstName(e.target.value)} value={firstName} className='form-control' placeholder='first Name' />
                                        </div>
                                        <div className=""  >
                                            <label>Middle Name</label>
                                            <input type='text' style={{ width: '200px' }} className='form-control' placeholder='middle Name' />
                                        </div>
                                        <div className=""      >
                                            <label>Date Of Birth<span className='star' >*</span> </label>
                                            <input type='text' style={{ width: '200px' }} className='form-control' placeholder='Date Of Birth' />
                                        </div>
                                    </div>
                                    <div style={{ flexWrap: 'wrap' }} className='data d-flex justify-content-center align-items-center ' >
                                        <div className='gender' >
                                            <label style={{ fontWeight: 'bolder' }}>Gender<span className='star' >*</span> </label>
                                            <Radio.Group className='ms-2' >
                                                <Radio value={'Male'}  >Male</Radio>
                                                <Radio value={"Female"}>Female</Radio>
                                            </Radio.Group>
                                        </div>
                                        <div className='pacemaker'>
                                            <label style={{ fontWeight: 'bolder' }} >Has PlaceMaker<span className='star' >*</span> </label>
                                            <Radio.Group className='ms-2'>
                                                <Radio value={'N/A'}  >N/A</Radio>
                                                <Radio value={"Yes"}>Yes</Radio>
                                                <Radio value={"No"}>No</Radio>
                                            </Radio.Group>
                                        </div>
                                        <div className='ICD'>
                                            <label style={{ fontWeight: 'bolder' }} >Has ICD<span className='star' >*</span> </label>
                                            <Radio.Group className='ms-2'  >
                                                <Radio value={'N/A'}  >N/A</Radio>
                                                <Radio value={"Yes"}>Yes</Radio>
                                                <Radio value={"No"}>No</Radio>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                    <div className='w-100 ' >
                                        <p style={{ width: '130px' }} >Address line 1<span className='star' >*</span> </p>
                                        <input type='text' className='form-control' placeholder='Address line 1*' />
                                    </div>
                                    <div className='w-100 ' >
                                        <p style={{ width: '130px' }} >Address line 2*</p>
                                        <input type='text' className='form-control' placeholder='Address line 2*' />
                                    </div>
                                    <div className='addressData' style={{ flexWrap: 'wrap' }}  >
                                        <label className='d-flex align-items-center me-4' >
                                            City<span className='star' >*</span> <input type='text' className='form-control ms-2' placeholder='City *' />
                                        </label>
                                        <label className='d-flex align-items-center me-4' >Select Clinic<span className='star' >*</span>
                                            <Select
                                                placeholder="---Select---"
                                                style={{
                                                    flex: 1,
                                                }}
                                                options={state}
                                                className=' ms-2'
                                            />
                                        </label>
                                        <label className='d-flex align-items-center me-4' >
                                            Zip<span className='star' >*</span>  <input type='text' className='form-control ms-2' placeholder='Zip*' />
                                        </label>
                                        <label className='d-flex align-items-center me-4' >
                                            <Select
                                                placeholder="USA"
                                                style={{
                                                    flex: 1,
                                                }}
                                                options={[
                                                    {
                                                        value: 'USA',
                                                        label: 'USA',
                                                    }
                                                ]}
                                                className=' ms-2'
                                                disabled
                                            />
                                        </label>
                                        <label className='d-flex align-items-center me-4' >
                                            PrimaryPhone<span className='star' >*</span>  <input type='phone' className='form-control ms-2' placeholder='Primary Phone *' />
                                            <Select
                                                placeholder="---Select---"
                                                style={{
                                                    flex: 1,
                                                }}
                                                options={[
                                                    {
                                                        value: 'mobile',
                                                        label: 'mobile',
                                                    }
                                                ]}
                                                className=' ms-2'
                                            />
                                        </label>
                                        <label className='d-flex align-items-center me-4' >
                                            SecondaryPhone <input type='phone' className='form-control ms-2' placeholder='Secondary Phone *' />
                                            <Select
                                                placeholder="---Select---"
                                                style={{
                                                    flex: 1,
                                                }}
                                                options={[
                                                    {
                                                        value: 'mobile',
                                                        label: 'mobile',
                                                    }
                                                ]}
                                                className=' ms-2'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '500px' }} >
                                <label>Ordering Provider<span className='star' >*</span> </label>
                                <Select
                                    showSearch
                                    variant={false}
                                    placeholder="---Select---"
                                    size='large'
                                    className='form-select mb-3'

                                >
                                    <Option value="14" >14</Option>
                                    <Option value="30" >30</Option>

                                </Select>
                            </div>
                            <div style={{ width: '500px' }} >
                                <label>Reading Provider<span className='star' >*</span> </label>
                                <Select
                                    showSearch
                                    variant={false}
                                    placeholder="---Select---"
                                    size='large'
                                    className='form-select mb-3'

                                >
                                    <Option value="14" >14</Option>
                                    <Option value="30" >30</Option>
                                </Select>
                            </div>
                            <div className="">
                                <label>Referring Provider</label>
                                <input type='text' style={{ width: '400px' }} className='form-control' placeholder='referring provider' />
                            </div>
                            <div className='mt-3' style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <button className='btn btn-outline-secondary' onClick={() => window.location.reload()}  >Cancel</button>
                                <div>
                                    <button className='btn btn-primary ps-5 pe-5' type='submit' >Save</button>
                                    <Link to='/page' >  <button className='btn btn-primary ps-5 pe-5' >Back</button> </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div>
                    <TablePage className='col-md-12' />
                </div> */}
            </div>
        </div>
    )
}

export default HomePage
