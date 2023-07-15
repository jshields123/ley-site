const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const password = process.env.MONGO_PASSWORD;

// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://jackshields:${password}@cluster0.lbduihv.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB", error));

// Define a schema for the data
const formDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: String,
  phone: String,
  email: String,
});

// Create a model based on the schema
const FormData = mongoose.model("FormData", formDataSchema);

// Handle form submission
app.post("/api/submit-form", (req, res) => {
  const formData = req.body;

  // Create a new document using the model
  const newFormData = new FormData(formData);

  // Save the document to the database
  newFormData
    .save()
    .then(() => res.json({ message: "Form data saved successfully" }))
    .catch((error) =>
      res.status(500).json({ error: "Error saving form data" })
    );
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
