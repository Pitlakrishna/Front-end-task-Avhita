import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../Style.css"

const Banner = () => {
    return (
        <div className='banner' style={{ backgroundColor: '#cd9028' }} >
            <ul className='bannerItems' style={{ listStyleType: 'none', margin: '0', padding: '0' }}  >
                <li>
                    <Link to='/page' className='dashboardLink'  > <img src='https://res.cloudinary.com/dntrdevpr/image/upload/v1716459697/Registration_icon_owv1vu.png' /> <span>Registrations .......</span> </Link>
                </li>
                <li>
                    <Link to='/' className='dashboardLink' >  <img src="https://res.cloudinary.com/dntrdevpr/image/upload/v1716459696/New_Registration_icon_yvcesw.png" /> New Registration .......</Link>
                </li>
                <li>
                    <Link to='' className='dashboardLink' ><img src="https://res.cloudinary.com/dntrdevpr/image/upload/v1716459695/Alerts_icon_x9ais3.png" /> Alerts ....... </Link>
                </li>
                <li>
                    <Link to='' className='dashboardLink' > <img src="https://res.cloudinary.com/dntrdevpr/image/upload/v1716459697/Signature_icon_bqktaq.png" /> Signature ....... </Link>
                </li>
                <li>
                    <Link to='' className='dashboardLink' > <img src="https://res.cloudinary.com/dntrdevpr/image/upload/v1716459696/Patient_called_icon_kphlfi.png" /> Patients Called .......</Link>
                </li>
                <li>
                    <Link to='' className='dashboardLink' > <img src="https://res.cloudinary.com/dntrdevpr/image/upload/v1716459695/dr.ai_icon_koaqzo.png" /> Dr.AI ....... </Link>
                </li>
            </ul>
        </div >
    )
}

export default Banner