import React, { useState } from 'react';

export const Post = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [issueId, setIssueId] = useState("")

  const post = () => {
    if (issueId == "") {
      setIssueId(Math.floor(Math.random() * 99999))
    }

    let issue = {
      "issue_id": issueId,
      "title" : title,
      "description": description
    }

    Meteor.call('post', issue)
    
  };

  return (
    <div className='flex flex-col'>
      <h1 className='text-2xl'>Post</h1>
      <div className='mb-3'>
        <a className='p-3 m-3'>Manual Issue Id</a>
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
        <button className='border border-black rounded-xl p-3' onClick={post}>Post</button>
      </div>
    </div>
  );
};
