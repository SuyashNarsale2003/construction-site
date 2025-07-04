import React from 'react';
import { teamData } from '../data/teamData';

const Team = () => {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">Meet our experts</p>
        
        <div className="team-grid">
          {teamData.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <p className="bio">{member.bio}</p>
              <div className="expertise">
                {member.expertise.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;