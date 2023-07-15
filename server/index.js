const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const User = require("./signUpDataSchema");

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://aniket1:hianiket123@cluster0.z69mafx.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
).then(()=>{
  console.log("database connected")
});


app.post("/loginData", async (req, res) => {
    //   console.log(req.body);
    const userName = req.body.userName;
    const passWord = req.body.passWord;
   
    const user = await User.findOne({
      userName: userName,
      passWord:passWord
    });
    
    //login successful
    if (user) {
      // console.log(presentUserType);
      res.send(user);
      console.log("logged in");
    }
    //login failed
    else {
      res.send("wrong Credentials");
      console.log("Wrong credentials");
    }
  });
  app.post("/signUpData", async (req, res) => {
    // console.log(req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const passWord = req.body.passWord;
    const formData = new User({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      passWord: passWord,
    });
    try {
      await formData.save();
      console.log("data inserted");
      // console.log("duplicate found")
    } catch (err) {
      console.log(err);
      res.send("userName already exist");
    }
  });
  















const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
