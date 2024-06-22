import React, { useState } from 'react';

export const Delete = () => {
  const [issueId, setIssueId] = useState("")

  const post = () => {
    let issue = {
      "issue_id": issueId,
    }

    Meteor.call('delete', issue)
    
  };

  return (
    <div className='flex flex-col'>
      <h1 className='text-2xl'>Delete</h1>
      <div className='mb-3'>
        <a className='p-3 m-3'>Issue Id</a>
        <input value={issueId}
        onChange={(e) => setIssueId(e.target.value)} className='border border-black'></input>
      </div>
      <div>
        <button className='border border-black rounded-xl p-3' onClick={post}>Delete</button>
      </div>
    </div>
  );
};
