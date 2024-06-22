import React from 'react';
import { Post } from './components/Post.jsx';
import { Get } from './components/Get.jsx';
import { Update } from './components/Update.jsx';
import { Delete } from './components/Delete.jsx';

export const App = () => (
  <div>
    <h1 className='text-3xl'>Sitemate Issue Tracker</h1>
    <Post/>
    <Get />
    <Update />
    <Delete />
  </div>
);
