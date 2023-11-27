const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require("./models/User");

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000',  // Adjust to your React app's origin
    credentials: true,
  }));
  

app.use(express.json());

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://mernForm:xmAIhPGn0O8yIh0B@cluster0.b7mqrgu.mongodb.net/?retryWrites=true&w=majority",
      {}
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Handle the error appropriately, you might want to exit the process or do some other cleanup
  }
}

connect();

app.post('/register', async (req, res) => {
  const { name, email, gender, msg } = req.body;

  try {

    const userDoc = await User.create({
      name,
      email,
      gender,
      msg
    });
    res.json(userDoc);
   
  } catch (e) {
    res.status(400).json(e);
  
  }
});
const PORT = 4000;  // Use HTTP
app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});
