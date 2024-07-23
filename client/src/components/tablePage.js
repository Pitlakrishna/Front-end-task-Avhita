import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TablePage = () => {
    const [list, setList] = useState([])

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
        console.log(list)
    }, [])
    return (
        <div className='mt-5' style={{ height: "300px", overflowY: 'auto', border: '1px solid black' }}    >
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Enrollment Type</th>
                        <th scope="col">Device ID</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Remaining Time</th>
                        <th scope="col">Provider</th>
                        <th scope="col">Location</th>
                        <th scope="col">Primary Location</th>
                    </tr>
                </thead>
                <tbody>

                    {list?.map(item =>
                        <tr key={item._id} >
                            <td>{`${item.firstName} ${item.lastName}`}</td>
                            <td>Active</td>
                            <td>{item.type} Day MCT</td>
                            <td>{item.device}</td>
                            <td>{(item.createdAt)}</td>
                            <td>{(item.createdAt)}</td>
                            <td>{item.type}</td>
                            <td>{item.clinic}</td>
                            <td>Cardiovascular Institute of Orlando-Orlando</td>
                            <td>Palpitations</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TablePage