import React, { useState } from 'react';

export const Post = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const post = () => {
    let issue_id = Math.floor(Math.random() * 99999);

    let issue = {
      "issue_id": issue_id,
      "title" : title,
      "description": description
    }

    Meteor.call('post', issue)
    
  };

  return (
    <div className='flex flex-col'>
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
