import React from 'react';

const Snapshot = ({ snapshot }) => {
  return (
    <div className="snapshot">
      <h4>Campaign Snapshot</h4>
      <p>Posts Per Day: {snapshot.postsPerDay}</p>
      <p>Estimated Total Engagement: {snapshot.totalEngagement}</p>
      <p>Total Earnings: ${snapshot.totalEarnings}</p>
    </div>
  );
};

export default Snapshot;