import React from 'react'
import { Select } from 'antd';
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { DatePicker, TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';



const Form = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const format = 'HH:mm';
    return (
        <div className="" style={{ backgroundColor: '#ffebcc', padding: '10px' }}  >
            <div className="btn-group">
                <h5 className='d-flex align-items-center me-2 ms-3' style={{ fontSize: '14px' }}  >Status:</h5>
                <Select
                    showSearch
                    style={{
                        width: 100,
                    }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                        {
                            value: '1',
                            label: 'Not Identified',
                        },
                        {
                            value: '2',
                            label: 'Closed',
                        },
                        {
                            value: '3',
                            label: 'Communicated',
                        },
                        {
                            value: '4',
                            label: 'Identified',
                        },
                        {
                            value: '5',
                            label: 'Resolved',
                        },
                        {
                            value: '6',
                            label: 'Cancelled',
                        },
                    ]}
                />
            </div>
            <div className="btn-group">
                <h5 className='d-flex align-items-center me-2 ms-3' style={{ fontSize: '14px' }}  >Alerts Settings: Critically:</h5>
                <Select
                    showSearch
                    style={{
                        width: 100,
                    }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                        {
                            value: '1',
                            label: 'Not Identified',
                        },
                        {
                            value: '2',
                            label: 'Closed',
                        },
                        {
                            value: '3',
                            label: 'Communicated',
                        },
                        {
                            value: '4',
                            label: 'Identified',
                        },
                        {
                            value: '5',
                            label: 'Resolved',
                        },
                        {
                            value: '6',
                            label: 'Cancelled',
                        },
                    ]}
                />
            </div>
            <div className="btn-group">
                <h5 className='d-flex align-items-center me-2 ms-3' style={{ fontSize: '14px' }}  >Trigger:</h5>
                <Select
                    showSearch
                    style={{
                        width: 100,
                    }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                        {
                            value: '1',
                            label: 'Not Identified',
                        },
                        {
                            value: '2',
                            label: 'Closed',
                        },
                        {
                            value: '3',
                            label: 'Communicated',
                        },
                        {
                            value: '4',
                            label: 'Identified',
                        },
                        {
                            value: '5',
                            label: 'Resolved',
                        },
                        {
                            value: '6',
                            label: 'Cancelled',
                        },
                    ]}
                />
            </div>
            <div className="btn-group">
                <h5 className='d-flex align-items-center me-2 ms-3' style={{ fontSize: '14px' }}  >Arrtymia Type:</h5>
                <Select
                    showSearch
                    style={{
                        width: 100,
                    }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                        {
                            value: '1',
                            label: 'Not Identified',
                        },
                        {
                            value: '2',
                            label: 'Closed',
                        },
                        {
                            value: '3',
                            label: 'Communicated',
                        },
                        {
                            value: '4',
                            label: 'Identified',
                        },
                        {
                            value: '5',
                            label: 'Resolved',
                        },
                        {
                            value: '6',
                            label: 'Cancelled',
                        },
                    ]}
                />
            </div>
            <div className="btn-group">
                <h5 className='d-flex align-items-center me-1 ms-3' style={{ fontSize: '14px' }}  >Start Date/Time:</h5>
                <DatePicker
                    defaultValue={dayjs('2019-09-03', dateFormat)}
                    minDate={dayjs('2019-08-01', dateFormat)}
                    maxDate={dayjs('2020-10-31', dateFormat)}
                    style={{ width: 100 }}

                />
                <button type="button" className="" style={{ padding: '0 10px', height: '32px', backgroundColor: 'transparent', border: 'none' }} >
                    <button style={{ border: 'none', borderRadius: '5px', backgroundColor: 'white' }} >
                        <TimePicker defaultValue={dayjs('12:08', format)} format={format} style={{ width: 80, border: 'none', outline: 'none' }} />
                        <IoMdArrowDropdown />
                    </button>
                </button>
            </div>
            <div className="btn-group">
                <h5 className='d-flex align-items-center me-1 ms-1' style={{ fontSize: '14px' }}  >End Date/Time:</h5>
                <DatePicker
                    defaultValue={dayjs('2019-09-03', dateFormat)}
                    minDate={dayjs('2019-08-01', dateFormat)}
                    maxDate={dayjs('2020-10-31', dateFormat)}
                    style={{ width: 100 }}
                    className='me-2'
                />
                <button style={{ border: 'none', borderRadius: '5px', backgroundColor: 'white' }} >
                    <TimePicker defaultValue={dayjs('12:08', format)} format={format} style={{ width: '75px', border: 'none', outline: 'none' }} />
                    <IoMdArrowDropdown />
                </button>
            </div>
        </div >
    )
}

export default Form