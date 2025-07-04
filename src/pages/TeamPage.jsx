import React from 'react';
import { Link } from 'react-router-dom';
import { teamData } from '../data/teamData'; // Changed from teamMembers to teamData

const TeamPage = () => {
  return (
    <section className="team-page">
      <div className="container">
        <br />
        <h1 className="page-title">Our Team</h1>
        <div className="team-grid">
          {teamData.map((member) => ( // Changed from teamMembers to teamData
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <p className="bio">{member.bio}</p>
              <div className="social-links">
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Twitter`}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="text-center mt-5">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;