import React from 'react';

const PerformanceSnapshot = ({ performance }) => {
  return (
    <div className="performance-snapshot">
      <h4>Performance Snapshot</h4>
      <p>Total Posts Submitted: {performance.totalPosts}</p>
      <p>Posts Submission Dates: {performance.postDates.join(', ')}</p>
      <p>Estimated Engagement: {performance.likes} Likes, {performance.shares} Shares</p>
    </div>
  );
};

export default PerformanceSnapshot;