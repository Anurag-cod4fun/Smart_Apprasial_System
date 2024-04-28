
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard2.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profilePhoto from "../Dashboard/profile.jpg"
import coverPhoto from "../Dashboard/images.jpeg"
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { v4 } from "uuid";
import Post from "../../../Employeedashboard/Sidebar/Dashboard/Post";
import { FaEdit } from 'react-icons/fa';

const Dashboard = () => {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [profilePhotoURL, setProfilePhotoURL] = useState(null);
  const Adminid = localStorage.getItem("Adminid");
  const [posts, setPosts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/feedposts');
      console.log(response.data)
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleUpload = async () => {
    if (selectedFile) {
      const storageRef = ref(
        storage,
        `AdminprofilePhotos/${selectedFile.name + v4()}`
      );

      try {
        setUploading(true);
        await uploadBytes(storageRef, selectedFile);
        console.log("Image uploaded");

        const downloadURL = await getDownloadURL(storageRef);
        const updatedHod = { ...admin, profilePhotoURL: downloadURL };

        try {
          const response = await axios.put(`http://localhost:8080/api/updatehod/${Adminid}`, updatedHod

          );
          const data = response.data;
          if (data.error) {
            console.log(data.error);
          } else {
            fetchAdmin();
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

  const fetchAdmin = async () => {
    try {
      const token = localStorage.getItem('token');
      // console.log(token);
      const response = await axios.get("http://localhost:8080/validadmin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAdmin(response.data.admin);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };


  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem('token');
        // console.log(token);
        const response = await axios.get("http://localhost:8080/validadmin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAdmin(response.data.admin);
        // console.log(response.data.admin);
        setProfilePhotoURL(response.data.admin.profilePhotoURL);
        localStorage.setItem("Adminid", response.data.admin.Adminid);

        // console.log(response.data)
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data.message);
      }
    };
    fetchAdminData();
  }, []);

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
  return (
    <>

      <div className="dashboard">
        {error && <div className="error">{error}</div>}
        {isLoading ? (
          <div className="loaderEmp"></div>
        ) : (
          <div className="profileH">
              <div className="container">
              <div className="cover-photo">
                <img src={coverPhoto} alt="Cover" />
              </div>
              <div className="profileH-details">
                <label htmlFor="file-input">
                  <div
                    className="profileH-photo"
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
                <h1>{admin.name}</h1>
                <h3>{admin.role}</h3>


                <hr />
                <div className="info">
                  <div className="info-item">
                    <h4>College</h4>
                    <p>{admin.college}</p>
                  </div>
                  <div className="info-item">
                    <h4>Department</h4>
                    <p>{admin.department}</p>
                  </div>
                  <div className="info-item">
                    <h4>Email</h4>
                    <p>{admin.email}</p>
                  </div>
                  <div className="info-item">
                    <h4>Mobile</h4>
                    <p>{admin.mobile}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
         {!isLoading  && (
        <div
          className="social"
        >
         
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
      </div>
    </>
  );
};

export default Dashboard;
