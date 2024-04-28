import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard1.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profilePhoto from "../Dashboard/profile.jpg";
import coverPhoto from "../Dashboard/images.jpeg";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { v4 } from "uuid";
import AddPost from "./AddPost";
import Post from "./Post";
import { FaEdit } from 'react-icons/fa';
import Notification from "./Notification"

const Myfeed = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [employee, setEmployee] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [appraisals, setAppraisals] = useState([]);
    const employeeId = localStorage.getItem("employeeid");
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [profilePhotoURL, setProfilePhotoURL] = useState(null);
    const [posts, setPosts] = useState([]);

    const updatePosts = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    const fetchUserFeed = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/feed/${employeeId}`);
            //   console.log(employeeId)
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching user feed:', error);
        }
    };

    useEffect(() => {
        fetchUserFeed();
    }, [employeeId]);

    const handleUpload = async () => {
        if (selectedFile) {
            const storageRef = ref(
                storage,
                `profilePhotos/${employeeId}/${selectedFile.name + v4()}`
            );

            try {
                setUploading(true);
                await uploadBytes(storageRef, selectedFile);
                console.log("Image uploaded");

                const downloadURL = await getDownloadURL(storageRef);
                const updatedEmployee = { ...employee, profilePhotoURL: downloadURL };

                try {
                    const response = await axios.put(
                        `http://localhost:8080/api/updateemployee/${employeeId}`,
                        updatedEmployee
                    );
                    const data = response.data;
                    if (data.error) {
                        console.log(data.error);
                    } else {
                        fetchEmployee();
                    }
                } catch (error) {
                    console.error("Failed to update employee:", error);
                }
            } catch (error) {
                console.error("Error uploading image:", error);
                toast.error("File upload failed!");
            } finally {
                setUploading(false);
                toast.success("Image uploaded successfully!");
            }
        } else {
            toast.error("No file selected!");
        }
    };

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

    const fetchEmployee = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:8080/validuser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            setEmployee(data.employee);
            localStorage.setItem("employeeid", response.data.employee.employeeid);

            setIsLoading(false);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:8080/validuser", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = response.data;
                if (data.error) {
                    console.log(data.error);
                } else {
                    setEmployee(data.employee);
                    setProfilePhotoURL(data.employee.profilePhotoURL);
                    localStorage.setItem("employeeid", response.data.employee.employeeid);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Failed to fetch employee data:", error);
                setError(error.message);
            }
        };

        fetchEmployeeData();
    }, [employeeId]);

    const handleImageClick = (e) => {
        if (e.target.className === 'profile-photo') {
            const fileInput = document.getElementById('file-input');
            if (fileInput) {
                fileInput.click();
            }
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setProfilePhotoURL(URL.createObjectURL(file));
    };


    return (<>
        <div style={{ backgroundColor: "#F2F4F4" }}>
            <div className="dashboard">
                {error && <div className="error">{error}</div>}
                {isLoading ? (
                    <div className="loaderEmp" ></div>
                ) : (
                    <div className="profileA" style={{ marginLeft: "30px" }}>
                        <div className="container1">
                            <div className="cover-photo">
                                <img src={coverPhoto} alt="Cover" />
                            </div>
                            <div className="profileA-details">
                                <label htmlFor="file-input">
                                    <div
                                        className="profileA-photo"
                                        onClick={handleImageClick}
                                        style={{ cursor: "pointer" }}

                                    >
                                        <div
                                            className="image-container"
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                        > <img src={profilePhotoURL || profilePhoto} alt="Profile" />
                                            {isHovered && (
                                                <div className="image-overlay">
                                                    <FaEdit className="edit-icon" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    required
                                    id="file-input"
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                                {uploading && <span>Uploading...</span>}

                                <button className="buttonDownload" onClick={handleUpload} disabled={uploading}>
                                    Upload Profile Photo
                                </button>
                                <h1 style={{ fontWeight: 'bold', color: 'black' }}>
                                    {employee.name}
                                </h1>
                                <h3>{employee.designation}</h3>
                                <hr />
                                <div className="info">
                                    <div className="info-item">
                                        <h4>College</h4>
                                        <p>{employee.college}</p>
                                    </div>
                                    <div className="info-item">
                                        <h4>Department</h4>
                                        <p>{employee.department}</p>
                                    </div>
                                    <div className="info-item">
                                        <h4>Email</h4>
                                        <p>{employee.email}</p>
                                    </div>
                                    <div className="info-item">
                                        <h4>Mobile</h4>
                                        <p>{employee.mobile}</p>
                                    </div>
                                    <div className="progress-bar-container">
                                        {appraisals.length > 0 ? (
                                            <div className="progress-bar">
                                                <div
                                                    className={`progress-bar-fill ${appraisals[0].progress === 100 ? "animated" : ""
                                                        }`}
                                                    style={{ width: `${appraisals[0].progress}%` }}
                                                ></div>
                                                {appraisals[0].progress === 100 && (
                                                    <span className="appraisal-done">Appraisal done!</span>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="progress-bar">
                                                <div
                                                    className="progress-bar-fill"
                                                    style={{ width: "0%" }}
                                                ></div>
                                                <span className="appraisal-pending">
                                                    Appraisal pending
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {!isLoading && employee && (
                    <div className="social">
                        <AddPost
                            profilePhotoURL={profilePhotoURL}
                            employeeName={employee.name}
                            designation={employee.designation}
                            updatePosts={updatePosts}
                        />
                        <div>
                            {posts.map((post, index) => (
                                <Post
                                    key={index}
                                    profilePhotoURL={post.profilePhotoURL}
                                    description={post.description}
                                    picturePath={post.picturePath}
                                    designation={post.designation}
                                    employeeName={post.employeeName}
                                />
                            ))}
                        </div>
                    </div>
                )}
                  {/* {!isLoading && employee && (
      <Notification notifications={notification} />
      )} */}
            </div>
        </div>
    </>
    );
};

export default Myfeed;
