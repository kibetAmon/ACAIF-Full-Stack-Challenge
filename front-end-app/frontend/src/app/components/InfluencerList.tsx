import React from 'react';

const InfluencerList = ({ influencers }) => {
  return (
    <div className="influencer-list">
      <h4>Influencers in this Campaign</h4>
      {influencers.map((influencer) => (
        <div key={influencer._id}>
          <p>{influencer.name}</p>
          <p>Submission Date: {new Date(influencer.submissionDate).toLocaleDateString()}</p>
          <p>Post Count: {influencer.postsCount}</p>
        </div>
      ))}
    </div>
  );
};

export default InfluencerList;