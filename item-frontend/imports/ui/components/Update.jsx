import React, { useState } from 'react';

export const Update = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [issueId, setIssueId] = useState("")

  const update = () => {

    let issue = {
      "issue_id": issueId,
      "title" : title,
      "description": description
    }

    Meteor.call('update', issue)
    
  };

  return (
    <div className='flex flex-col'>
      <h1 className='text-2xl'>Update</h1>
      <div className='mb-3'>
        <a className='p-3 m-3'>Issue Id</a>
        <input value={issueId}
        onChange={(e) => setIssueId(e.target.value)} className='border border-black'></input>
      </div>
      <div className='mb-3'>
        <a className='p-3 m-3'>Issue Title</a>
        <input value={title}
        onChange={(e) => setTitle(e.target.value)} className='border border-black'></input>
      </div>
      <div className='mb-3'>
      <a className='p-3 m-3'>Issue Description</a>
        <input value={description}
        onChange={(e) => setDescription(e.target.value)} className='border border-black'></input>
      </div>
      <div>
        <button className='border border-black rounded-xl p-3' onClick={update}>Update</button>
      </div>
    </div>
  );
};
