require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userauthRoutes = require("./routes/userauth");
const adminauthRoutes = require("./routes/adminauth");

const employeeRoutes = require("./routes/employee");

const fetchemployeeRoutes = require("./routes/fetchemployee");

const deleteemployeeRoutes = require("./routes/deleteemployee");

const updateemployeeRoutes = require("./routes/updateemployee");

// updates

const updates = require("./routes/updates");

const adminhodRoutes = require("./routes/hod");

const deletehodRoutes = require("./routes/deletehod");

const updatehodRoutes = require("./routes/updatehod");

const fetchhodRoutes = require("./routes/fetchhod");

const adminprincipleRoutes = require("./routes/principle");

const fetchprincipleRoutes = require("./routes/fetchprinciple");

const updateprincipleRoutes = require("./routes/updateprinciple");

const deleteprincipleRoutes = require("./routes/deleteprinciple");

const router = require("./routes/Employeedash");

const router1 = require("./routes/Admindash");

const employeeappraisalRoutes = require("./routes/employeeappraisal");

const fetchemployeehodRoutes = require("./routes/fetchemployeehod");

const fetchappraisalRoutes = require("./routes/fetchappraisal");

const hodfetchappraisalRoutes = require("./routes/hodfetchappraisal");

const hodappraisalRoutes = require("./routes/hodappraisal");

const fetchhodappraisalRoutes = require("./routes/fetchhodappraisal");

const fetchempdeptRoutes = require("./routes/fetchempdept");

const changepasswordempRoutes = require("./routes/changepasswordemp");

const changepasswordhodRoutes = require("./routes/changepasswordhod");

const feedpostsRoutes = require("./routes/feedposts");

const createpostRoutes = require("./routes/posts");

const feedRoutes = require("./routes/fetchempfeed");

const fetchemployeeappraisalRoutes = require("./routes/fetchemployeeappraisal");

const notificationRoutes = require("./routes/Notification");

const fetchnotificationRoutes = require("./routes/fetchnotification");

const fetchhodappraisalnewRoutes = require("./routes/fetchhodappraisalnew");
// database connection
connection();

// middlewares
app.use(express.json());

app.use(cors());

//user auth

app.use("/api/userauth", userauthRoutes);

// routes employee

app.use("/api/employee", employeeRoutes);

app.use("/api/fetchemployee", fetchemployeeRoutes);

app.use("/api/deleteemployee", deleteemployeeRoutes);

app.use("/api/updateemployee", updateemployeeRoutes);

app.use("/api/department", fetchempdeptRoutes);

app.use("/api/changepasswordemp", changepasswordempRoutes);

//admin auth

app.use("/api/adminauth", adminauthRoutes);

//routes hod

app.use("/api/adminhod", adminhodRoutes);

app.use("/api/fetchhod", fetchhodRoutes);

app.use("/api/deletehod", deletehodRoutes);

app.use("/api/updatehod", updatehodRoutes);

app.use("/api/changepasswordhod", changepasswordhodRoutes);

//routes principle

app.use("/api/adminprinciple", adminprincipleRoutes);

app.use("/api/fetchprinciple", fetchprincipleRoutes);

app.use("/api/deleteprinciple", deleteprincipleRoutes);

app.use("/api/updateprinciple", updateprincipleRoutes);

app.use(router);

app.use(router1);

//appraisal

app.use("/api/employeeappraisal", employeeappraisalRoutes);

//hod fetch appraisal

app.use("/api/fetchemployeehod", fetchemployeehodRoutes);

app.use("/api/fetchappraisal", fetchappraisalRoutes);

app.use("/api/hodfetchappraisal", hodfetchappraisalRoutes);

app.use("/api/hodappraisal", hodappraisalRoutes);

app.use("/api/fetchhodappraisal", fetchhodappraisalRoutes);

// posts

app.use("/api/createposts", createpostRoutes);

app.use("/api/feedposts", feedpostsRoutes);

app.use("/api/feed", feedRoutes);

//appraisal

app.use("/api/fetchemployeeappraisal", fetchemployeeappraisalRoutes);

//notification

app.use("/api/notification", notificationRoutes);
app.use("/api/fetchnotification", fetchnotificationRoutes);

//update
app.use("/api/updates", updates);


app.use("/api/fetchhodappraisalnew", fetchhodappraisalnewRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
