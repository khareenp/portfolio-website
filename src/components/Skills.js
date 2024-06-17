import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Skills.css';

const Skills = () => {
  const url = `http://localhost:5000/api/skills`;
  // Initialize state to manage skills and new skill input
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  // useEffect hook to fetch skills data on component mount
  useEffect(() => {
    fetchSkills();
  }, []);

  // Function to fetch skills from the backend
  const fetchSkills = async () => {
    try {
      const response = await axios.get(url);
      setSkills(response.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  // Function to add a new skill
  const addSkill = async () => {
    try {
      const response = await axios.post(url, { name: newSkill });
      setSkills([...skills, response.data]);
      setNewSkill('');
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  };

  // Function to delete a skill by ID
  const deleteSkill = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/skills/${id}`);
      setSkills(skills.filter(skill => skill.id !== id));
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  };

  return (
    <div className="skills">
      <h1>Skills</h1>
      {/* Grid container for skills */}
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
