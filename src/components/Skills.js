import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  // Define the base URL for the API
  const baseURL = 'http://localhost:5000/api/skills';

  // Use useCallback to  fetchSkills function so that it doesn't change on every render
  const fetchSkills = useCallback(async () => {
    try {
      // Fetch skills from the API
      const response = await axios.get(baseURL);
      setSkills(response.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  }, [baseURL]);

  // Add fetchSkills to the dependency array
  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  // Function to add a new skill
  const addSkill = async () => {
    try {
      // Post new skill to the API
      const response = await axios.post(baseURL, { name: newSkill });
      // Update skills state with the new skill
      setSkills([...skills, response.data]);
      // Clear the input field
      setNewSkill('');
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  };

  // Function to delete a skill
  const deleteSkill = async (id) => {
    try {
      // Delete skill from the API
      await axios.delete(`${baseURL}/${id}`);
      // Update skills state by filtering out the deleted skill
      setSkills(skills.filter(skill => skill.id !== id));
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  };

  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-grid">
        {/* Map over the skills array and render each skill */}
        {skills.map(skill => (
          <div key={skill.id} className="skill-item">
            {skill.name}
            <button onClick={() => deleteSkill(skill.id)}>-</button>
          </div>
        ))}
      </div>
      <div className="add-skill">
        <input
          type="text"
          value={newSkill}
          onChange={e => setNewSkill(e.target.value)}
          placeholder="Add a new skill"
        />
        <button onClick={addSkill}>Add Skill</button>
      </div>
    </div>
  );
};

export default Skills;
