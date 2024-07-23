import React from 'react'
import Layout from "../components/layout.js"
import { Table, Avatar } from 'antd';
import Form from '../components/Form.js'
import { FaCaretDown } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import "../Style.css"

const columns = [
    {
        title: 'Patient Name',
        width: 150,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        render: (text, record) => (
            <div>
                <Avatar src={img} style={{ marginRight: 8 }} />
                {record.name}
                <FaCaretDown style={{ marginLeft: 18 }} />
            </div>
        ),
    },
    {
        title: 'Status',
        width: 100,
        dataIndex: 'status',
        key: 'status',
        fixed: 'left',
        render: (text, record) => (
            <span className={`status-${record.status.toLowerCase()}  text-success`} style={{ fontWeight: 'bold' }} >
                {record.status}
            </span >
        ),
    },
    {
        title: 'Enroolment Type',
        dataIndex: 'type',
        key: 'type',
        width: 150,
    },
    {
        title: 'Device ID',
        dataIndex: 'device',
        key: 'device',
        width: 150,
    },
    {
        title: 'Start Date',
        dataIndex: 'srtdate',
        key: 'srtdate',
        width: 150,
    },
    {
        title: 'End Date',
        dataIndex: 'enddate',
        key: 'enddate',
        width: 150,
    },
    {
        title: 'Remaininig Time',
        dataIndex: 'time',
        key: 'time',
        width: 150,
    },
    {
        title: 'Provider',
        dataIndex: 'provider',
        key: 'provider',
        width: 150,
    },
    {
        title: '',
        dataIndex: 'delete',
        key: 'delete',
        width: 65,
        render: (text, record) => (
            <div className='d-flex justify-content-between align-items-center ' >
                <MdOutlineDeleteOutline style={{ marginRight: 8, fontSize: 20, color: '#001a4d' }} />
                <FaRegEdit style={{ marginLeft: 8, color: '#001a4d' }} />
            </div>
        ),
    }

];
const data = [];
let img = "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600/https://www.corporatephotographerslondon.com/wp-content/uploads/2023/02/LinkedIn_Profile_Photo.jpg"
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward ${i}`,
        status: `Active`,
        type: '30 DAY MCT',
        device: '1224511152541541',
        srtdate: "4/26/2024 (1:30pm)",
        enddate: "5/26/2024 (1:30pm)",
        time: "50 Days",
        provider: "Survarchala Dara",
    });
}

const HomePage = () => {
    return (
        <Layout>
            <Form />
            <Table
                // style={{ borderRadius: '0' }}
                className="custom-table"
                columns={columns}
                dataSource={data}
                scroll={{
                    x: 1500,
                    y: 333,
                }}
            />
        </Layout>
    )
}

export default HomePage