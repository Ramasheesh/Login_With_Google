require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const Db = require("./dbConnection/db");
// const authRoutes = require("./routes/auth");
const port = process.env.PORT || 6000;
const userModel = require("./models/userModel");
const session = require("express-session");
const passport = require("passport");
const Oauth2Strategy = require("passport-google-oauth2").Strategy;
const client_Id =process.env.ID;
const client_Secret =process.env.SECRET ;


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST",'PUT',"DELETE"],
    credentials: true,
  })
);

app.use(express.json());

//setup seesion
app.use(
  session({
    secret: "session/secre/${myloginpage}/123123321321",
    resave: false,
    saveUninitialized: true,
  })
);

// setup passport
app.use(passport.initialize());
app.use(passport.session());

// use id's
function generatePassword(email, name) {
  const emailPart = email.split('@')[0].slice(0, 4);
  const namePart = name.slice(0, 4);
  const password = emailPart + namePart + "123";
  return password;
}

passport.use(
  new Oauth2Strategy(
    {
      clientID: client_Id,
      clientSecret: client_Secret,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("profile: ", profile);
      try {
        let user = await userModel.findOne({ googleId: profile.id });
        if (!user) {
          user = new userModel({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.email,
            image: profile.photos[0].value,
            password:  generatePassword(profile.email, profile.family_name)
          });
        }
        await user.save(user)
        // console.log('user: ', user);

        return done(null, user); //done is callback dunction
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  done(null,  { id });
});
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login",
    failureFlash: true,
  })
);

app.get('/login/succes', async(req,res)=>{
  if (req.user) {
    res.status(200).json({message: "User Login Successfully" , user: req.user});
  }
  else{
    res.status(400).json({error: "Not Authorized !"})
  }
})
// app.use("/api/data", authRoutes);
app.post("/login", (req, res ,next) => {
  try {
    const { email, password } = req.body;

    const user = userModel.find({ email: email, password: password });

    if (user) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
    next();
  } catch (error) {
    res.status(401).json({ error: "internal server error!" });
  }
});

// Controller for signup
app.post("/signup", (req, res) => {
  try {
    const { email } = req.body;

    if (name && email && password) {
      // Check if user already exists
      const existingUser = userModel.find({ email });
      if (existingUser) {
        res.status(409).json({ message: "User already exists" });
      } else {
        const newUser = { name, email, password };
        users.push(newUser);
        res.status(201).json({ message: "Signup successful", user: newUser });
      }
    } else {
      res.status(400).json({ message: "All fields are required" });
    }
  } catch (error) {
    res.status(401).json({ error: "internal server error!" });
  }
});

// Placeholder data for demonstration purposes

app.listen(port, (req, res) => {
  try {
    console.log(`Server is runnig at http://localhost:${port}`);
    Db.dbConnect;
  } catch (error) {
    console.log("server creshed ", error);
  }
});
