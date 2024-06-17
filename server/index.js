const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Enable parsing of JSON bodies in requests

// In-memory data store
let skills = [
  { id: 1, name: "HTML5" },
  { id: 2, name: "CSS3" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "React" },
  { id: 5, name: "TypeScript" },
  { id: 6, name: "SQL" },
  { id: 7, name: "REST APIs" },
  { id: 8, name: "Java" },
  { id: 9, name: "Git" }
];

// GET route to fetch all skills
app.get('/api/skills', (req, res) => {
  res.send(skills);
});

// POST route to add a new skill
app.post('/api/skills', (req, res) => {
  const newSkill = { id: skills.length + 1, name: req.body.name }; // Create a new skill object
  skills.push(newSkill); // Add the new skill to the array
  res.send(newSkill); // Send the new skill as the response
});

// PUT route to update an existing skill
app.put('/api/skills/:id', (req, res) => {
  const skill = skills.find(s => s.id === parseInt(req.params.id)); // Find the skill by ID
  if (!skill) return res.status(404).send('The skill with the given ID was not found.'); // If not found, send 404

  skill.name = req.body.name; // Update the skill name
  res.send(skill); // Send the updated skill as the response
});

// DELETE route to delete an existing skill
app.delete('/api/skills/:id', (req, res) => {
  const skill = skills.find(s => s.id === parseInt(req.params.id)); // Find the skill by ID
  if (!skill) return res.status(404).send('The skill with the given ID was not found.'); // If not found, send 404

  const index = skills.indexOf(skill); // Get the index of the skill in the array
  skills.splice(index, 1); // Remove the skill from the array

  res.send(skill); // Send the deleted skill as the response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
