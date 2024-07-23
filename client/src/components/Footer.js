import React from 'react'
import "./authStyle.css"

const Footer = () => {
    return (
        <div className=' footerBox' style={{ lineHeight: '10px', backgroundColor: '#f5f5f0', padding: '10px 50px' }} >
            <p style={{ color: 'red', fontWeight: '700', }}  >If This is a medical emergency, then please dial 911 or goto near medical facality immediatly</p>
            <div className='footerBoxIn' >
                <div>
                    <p style={{ fontWeight: '600', }} >Copiright @ 2024 <span style={{ fontWeight: '700' }} >avitha.Inc.</span> All rights reserved.</p>
                    <span>Terms of use</span>
                    <span>Privacy Policy</span>
                    <span>HIPAA Compliance</span>
                </div>
                <div>
                    <span>1-877-XXX-XXX</span>
                    <span>info@avitha,health</span>
                </div>
            </div>
        </div>
    )
}


export default Footer