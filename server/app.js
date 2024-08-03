require("dotenv").config();
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
const client_Id = process.env.ID;
const client_Secret = process.env.SECRET;
const bodyParser = require('body-parser');

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.json());
//setup seesion
app.use(
  session({
    secret: "session/secre/${myloginpage}/123123321321",
    resave: false,
    saveUninitialized: true,
    // saveUninitialized: false,
    cookie: { secure: false }
  })
);

// setup passport
app.use(passport.initialize());
app.use(passport.session());

// use id's
function generatePassword(email, name) {
  const emailPart = email.split("@")[0].slice(0, 4);
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
            password: generatePassword(profile.email, profile.family_name),
          });
        }
        await user.save(user);
        return done(null, user); //done is callback dunction
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((id, done) => {
  done(null, { id });
});
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/login",
    failureFlash: true,
  })
);

app.get("/login/success", (req, res) => {
  // console.log("req.user: ", req.user);
  if (req.user) {
    res
      .status(200)
      .json({ message: "User Login Successfully", user: req.user });
  } else {
    res.status(404).json({ error: "Not Authorized !" });
  }
});
// logout

app.get('/logout' , (req,res , next)=>{
  req.logout(function (err) {
    if(err){ return next(err)}
    res.redirect('http://localhost:3000/login');
  })
})


// app.use("/api/data", authRoutes); 


//login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email, password }).exec();
    // console.log('user: ', user);

    if (user) {
       res.status(200).json({ message: "Login successful", user });
    } else {
       res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error!" }); 
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body; 

    if (name && email && password) {
      const existingUser = await userModel.findOne({ email }).exec();
      // console.log('existingUser: ', existingUser);

      if (existingUser) {
         res.status(409).json({ message: "User already exists" });
      } else {
        const newUser = new userModel({ name, email, password }); 
        await newUser.save(); 
         res.status(201).json({ message: "Signup successful", user: newUser });
      }
    } else {
      return res.status(400).json({ message: "Missing required fields" }); 
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error!" }); 
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
