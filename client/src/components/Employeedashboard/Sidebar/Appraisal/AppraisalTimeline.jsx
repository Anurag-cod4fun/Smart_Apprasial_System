import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Appraisal.css';
import { Info } from 'lucide-react';

const AppraisalTimeline = () => {
    const employeeId = localStorage.getItem("employeeid");
    const [appraisals, setAppraisals] = useState([]);
    const [appraisalsh, setAppraisalsh] = useState([]);
    const [notification, setNotification] = useState([]);

    useEffect(() => {
        const fetchAppraisals = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/fetchemployeeappraisal/${employeeId}`
                );
                const data = response.data;
                if (response.status === 200) {
                    const updatedAppraisals = data.appraisals.map((appraisal) => ({
                        ...appraisal,
                        progress: 100,
                    }));
                    setAppraisals(updatedAppraisals);
                } else {
                    console.error(data.message);
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchAppraisals();
    }, [employeeId]);

    useEffect(() => {
        const fetchAppraisals = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/fetchhodappraisal/${employeeId}`
                );
                const data = response.data;
                if (response.status === 200) {
                    const updatedAppraisals = data.appraisals.map((appraisal) => ({
                        ...appraisal,
                        progress: 100,
                    }));
                    setAppraisalsh(updatedAppraisals);
                } else {
                    console.error(data.message);
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchAppraisals();
    }, [employeeId]);


    const fetchUserNotification = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/fetchnotification/${employeeId}`);
            // console.log(response.data)
            setNotification(response.data);
        } catch (error) {
            console.error('Error fetching user feed:', error);
        }
    };

    useEffect(() => {
        fetchUserNotification();
    }, [employeeId]);

    return (
        <>
            <div className='Appraisaltimelinecard'>
                <h3>Review Timeline</h3>
                <div className="containerg">

                    <div className='line'>


                        <div className='one' >
                            <div className="circle circle1">1</div>
                            <div className="circle circle2">2</div>
                            <div className="circle circle3">3</div>
                            <div className="circle circle4">4</div>
                            <div className="circle circle5">5</div>
                        </div>
                    </div>
                    <div className='two' >

                        <div style={{ padding: '20px', fontWeight: 'bold', fontSize: "20px" }}>
                            {appraisals.length > 0 ? (
                                <div >

                                    {appraisals[0].progress === 100 && (
                                        <>
                                            <span>🟢  </span>

                                            <span style={{ color: "black" }}>Review cycle started</span>
                                        </>
                                    )}
                                    <div style={{ padding: '20px' }} >

                                        <div className="progress-barx">
                                            <div
                                                className={`progress-bar-fillx ${appraisals[0].progress === 100 ? "animated" : ""
                                                    }`}
                                                style={{ width: `${appraisals[0].progress}%` }}
                                            ></div>
                                        </div>
                                    </div>


                                </div>
                            ) : (
                                <div >
                                    <>
                                        <span>🔴  </span>
                                        <span style={{ color: "Grey" }}>Review cycle started</span>
                                    </>
                                    <div style={{ padding: '20px' }} >
                                        <div className="progress-barx">
                                            <div
                                                className='progress-bar-notfill'

                                                style={{ width: "100%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                        <div style={{ padding: '20px', fontWeight: 'bold', fontSize: "20px" }}>
                            {appraisals.length > 0 ? (
                                <div >

                                    {appraisals[0].progress === 100 && (
                                        <>
                                            <span>🟢  </span>
                                            <span style={{ color: "black" }}>Self review completed</span>
                                        </>
                                    )}
                                    <div style={{ padding: '20px' }} >

                                        <div className="progress-barx">
                                            <div
                                                className={`progress-bar-fillx ${appraisals[0].progress === 100 ? "animated" : ""
                                                    }`}
                                                style={{ width: `${appraisals[0].progress}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <div >
                                    <>
                                        <span>🔴  </span>
                                        <span style={{ color: "Grey" }}>Self review completed</span>
                                    </>
                                    <div style={{ padding: '20px' }} >
                                        <div className="progress-barx">
                                            <div
                                                className='progress-bar-notfill'

                                                style={{ width: "100%" }}
                                            ></div>
                                        </div>
                                    </div>

                                </div>
                            )}

                        </div>
                        <div style={{ padding: '20px', fontWeight: 'bold', fontSize: "20px" }}>
                            {appraisalsh.length > 0 ? (
                                <div >

                                    {appraisalsh[0].progress === 100 && (
                                        <>
                                            <span>🟢  </span>
                                            <span style={{ color: "black" }}>HOD review completed</span>
                                        </>
                                    )}
                                    <div style={{ padding: '20px' }} >

                                        <div className="progress-barx">
                                            <div
                                                className={`progress-bar-fillx ${appraisalsh[0].progress === 100 ? "animated" : ""
                                                    }`}
                                                style={{ width: `${appraisalsh[0].progress}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <div >
                                    <>
                                        <span>🔴  </span>
                                        <span style={{ color: "Grey" }}>HOD review completed</span>
                                    </>
                                    <div style={{ padding: '20px' }} >
                                        <div className="progress-barx">
                                            <div
                                                className='progress-bar-notfill'

                                                style={{ width: "100%" }}
                                            ></div>
                                        </div>
                                    </div>

                                </div>
                            )}

                        </div>
                        <div className="info-banner">
                            <div className="flex">
                                <div>
                                    <Info className="icon" />
                                </div>
                                <div>
                                    <p className="text">
                                        {notification.map((notification) => (
                                            <>
                                                <div>{notification.message}</div>
                                                <div style={{ color: '#555', fontSize: '12px', }}>
                                                    {new Date(notification.timestamp).toLocaleString()}
                                                </div>
                                            </>

                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '20px', fontWeight: 'bold', fontSize: "20px" }}>
                            {appraisalsh.length > 0 ? (
                                <div >

                                    {appraisalsh[0].progress === 100 && (
                                        <>
                                            <span>🟢  </span>
                                            <span style={{ color: "black" }}>External review completed</span>
                                        </>
                                    )}
                                    <div style={{ padding: '20px' }} >

                                        <div className="progress-barx">
                                            <div
                                                className={`progress-bar-fillx ${appraisalsh[0].progress === 100 ? "animated" : ""
                                                    }`}
                                                style={{ width: `${appraisalsh[0].progress}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <div >
                                    <>
                                        <span>🔴  </span>
                                        <span style={{ color: "Grey" }}>External review completed</span>
                                    </>
                                    <div style={{ padding: '20px' }} >
                                        <div className="progress-barx">
                                            <div
                                                className='progress-bar-notfill'

                                                style={{ width: "100%" }}
                                            ></div>
                                        </div>
                                    </div>

                                </div>
                            )}

                        </div>
                        <div className="info-banner">
                            <div className="flex">
                                <div>
                                    <Info className="icon" />
                                </div>
                                <div>
                                    <p className="text">
                                        This is some informational text that you can use to show some informational content
                                    </p>
                                </div>
                                {/* <div>
          <X className="close-icon" />
        </div> */}
                            </div>
                        </div>
                        <div style={{ padding: '20px', fontWeight: 'bold', fontSize: "20px" }}>
                            {appraisalsh.length > 0 ? (
                                <div >

                                    {appraisalsh[0].progress === 100 && (
                                        <>
                                            <span>🟢  </span>
                                            <span style={{ color: "black" }}>Review cycle ended</span>
                                        </>
                                    )}
                                    <div style={{ padding: '20px' }} >

                                        <div className="progress-barx">
                                            <div
                                                className={`progress-bar-fillx ${appraisalsh[0].progress === 100 ? "animated" : ""
                                                    }`}
                                                style={{ width: `${appraisalsh[0].progress}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <div >
                                    <>
                                        <span>🔴  </span>
                                        <span style={{ color: "Grey" }}>Review cycle ended</span>
                                    </>
                                    <div style={{ padding: '20px' }} >
                                        <div className="progress-barx">
                                            <div
                                                className='progress-bar-notfill'

                                                style={{ width: "100%" }}
                                            ></div>
                                        </div>
                                    </div>

                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppraisalTimeline;
