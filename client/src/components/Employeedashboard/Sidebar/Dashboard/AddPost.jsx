import React, { useState, useContext } from "react";
import Appraisal from "../Appraisal/Appraisal";
import { useClassification } from "../ClassificationContext";
import {
  Button,
  Typography,
  InputBase,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import { EmojiEmotions, Attachment, Mic, MoreHoriz } from "@mui/icons-material";
import axios from "axios";
import profilePhoto from "../Dashboard/profile.jpg";
import { Link } from "react-router-dom";
import {
  EditOutlined,
  CameraAltOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import useTheme from "@mui/material/styles/useTheme";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropzone from "react-dropzone";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
const employeeId = localStorage.getItem("employeeid");

const AddPost = ({
  profilePhotoURL,
  employeeName,
  designation,
  updatePosts,
}) => {
  const { palette } = useTheme();
  const [showDropzone, setShowDropzone] = useState(false);
  const { setClassificationTag } = useClassification();

  const [image, setImage] = useState(null);
  const [post, setPost] = useState({
    name: "",
    description: "",
    picturePath: "",
    profilePhotoURL: profilePhotoURL,
    designation: designation,
    employeeName: employeeName,
  });

  const handleCameraClick = () => {
    setShowDropzone(!showDropzone);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      if (image) {
        const fileName = `${Date.now()}_${image.name}`;
        const storageRef = ref(storage, `Socialimages/${fileName}`);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);

        // Call classification API with the description
        const descriptionForClassification = post.description;
        const classificationResponse = await axios.post(
          "http://127.0.0.1:8000/classify/",
          {
            text: descriptionForClassification,
          }
        );

        // Send the post data, including the Firebase Storage URL and classification tag, to your server
        const response = await axios.post(
          "http://localhost:8080/api/createposts",
          {
            ...post,
            employeeid: employeeId,
            picturePath: downloadURL,
            profilePhotoURL: profilePhotoURL,
            designation: designation,
            employeeName: employeeName,
            classification_tag: classificationResponse.data.label, // Assuming classification is under classification key in the response
          }
        );

        // Update the UI with the new post
        updatePosts(response.data);

        // Set the classification tag in the context
        setClassificationTag(classificationResponse.data.label);
        console.log(
          "Classification Tag Updated Successfully:",
          classificationResponse.data.label
        );

        // Clear form fields and state
        setPost({
          name: "",
          description: "",
          picturePath: "",
          profilePhotoURL: profilePhotoURL,
          designation: designation,
          employeeName: employeeName,
        });
        setShowDropzone(false);
        setImage(null);
        toast.success("Post created successfully!");

        // Handle the classification response here (update UI, etc.)
        console.log(
          "Classification Response:",
          classificationResponse.data.label
        );
      } else {
        console.error("Please select an image to upload.");
      }
    } catch (error) {
      console.error(
        "Error uploading image to Firebase or creating post:",
        error
      );
      toast.error("Post failed!");
    }
  };

  return (
    <Box
      border="1px solid #ddd"
      borderRadius="30px"
      padding="16px"
      margin="16px"
      width="600px"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      background="#fff"
      backgroundColor="white"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      marginTop="-0.5px">
      <Box display="flex" alignItems="center" marginBottom="16px">
        <img
          src={profilePhotoURL || profilePhoto}
          alt="User Profile"
          style={{
            borderRadius: "50%",
            marginRight: "12px",
            width: "40px",
            height: "40px",
          }}
        />
        <div>
          <Typography
            variant="h6"
            style={{
              margin: "0",
              fontSize: "18px",
              color: "black",
              fontWeight: "bold",
            }}>
            {employeeName}
          </Typography>
          <Typography style={{ margin: "0", fontSize: "14px", color: "#555" }}>
            {designation}
          </Typography>
        </div>
      </Box>
      <InputBase
        placeholder="What's on your mind..."
        name="description"
        value={post.description}
        onChange={handleChange}
        style={{
          width: "100%",
          backgroundColor: "#f0f2f5",
          borderRadius: "2rem",
          padding: "1rem 2rem",
          marginBottom: "16px",
        }}
      />

      {showDropzone && (
        <Box
          border={`1px solid `}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
          // maxWidthwidth="100%"
          width={"566px"}>
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png,.pdf"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
              <div>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  // maxWidthwidth="100%"
                  width={"530px"}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center">
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <>
                      <Typography>{image.name}</Typography>
                      <IconButton
                        onClick={() => setImage(null)}
                        sx={{ width: "15%" }}>
                        <EditOutlined />
                      </IconButton>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}>
                        <IconButton
                          onClick={() => setImage(null)}
                          sx={{ width: "15%" }}>
                          <DeleteOutlined />
                        </IconButton>
                      </div>
                    </>
                  )}
                </Box>
              </div>
            )}
          </Dropzone>
        </Box>
      )}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton onClick={handleCameraClick}>
          {showDropzone ? (
            <CameraAltOutlined style={{ color: "#000" }} />
          ) : (
            <CameraAltOutlined style={{ color: "#000" }} />
          )}
        </IconButton>
        <Typography
          style={{ fontSize: "16px", color: "#000", cursor: "pointer" }}>
          Post Image
        </Typography>
      </Box>

      <Divider style={{ marginBottom: "16px" }} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%">
        <Link to="/Employeedashboard/profile">
          <Box display="flex" alignItems="center">
            <IconButton>
              <EmojiEmotions style={{ color: "#000" }} />
            </IconButton>
            <Typography
              style={{ fontSize: "16px", color: "#000", cursor: "pointer" }}>
              Feeling/Activity
            </Typography>
          </Box>
        </Link>
        <Box display="flex" alignItems="center">
          <IconButton>
            <Attachment style={{ color: "#000" }} />
          </IconButton>
          <Typography
            style={{ fontSize: "16px", color: "#000", cursor: "pointer" }}>
            Attach a file
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton>
            <Mic style={{ color: "#000" }} />
          </IconButton>
          <Typography
            style={{ fontSize: "16px", color: "#000", cursor: "pointer" }}>
            Record Audio
          </Typography>
        </Box>
        <IconButton>
          <MoreHoriz style={{ color: "#000" }} />
        </IconButton>
      </Box>
      <Button
        disabled={!post.description}
        onClick={handlePostSubmit}
        style={{
          color: post.description ? "#fff" : "grey",
          backgroundColor: "#000",
          borderRadius: "3rem",
          marginTop: "16px",
          width: "100%",
        }}>
        POST
      </Button>
    </Box>
  );
};

export default AddPost;
