import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SimpleMde from 'react-simplemde-editor';
import styles from './AddPost.module.scss';
import Header from '../../components/Header';
import { useCreatePostMutation } from '../../redux/services/postApi';

const AddPost = () => {
  const [ title, setTitle ] = useState('');
  const [ image, setImage ] = useState('');
  const [ tags, setTags ] = useState([]);
  const [ text, setText ] = useState('');
  const [imageUrl, setImageUrl ] = useState('');

const createPost = () => {
  // const formData = new FormData();

  try {
    const fields = {
      title,
      text,
      tags,
      image
    }

  } catch(err) {

  }
}
  return (
    <>
      <Header/>
      <div className='post-editor'>
      <div className="container">
      <h1>Creating Post</h1>
        <div className="image">
          <Button>Load preview</Button>
          <input hidden type="file" />
          { imageUrl && (
            <>
              <Button variant='contained' color='error'>Delete</Button>
              <img src="" alt=""  />
            </>
          )}
        </div>
        <br /><br />
        <TextField value={title || ''} placeholder='Post title' variant='standard' fullWidth classes={{root: styles.title}}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField 
          value={tags || []} 
          placeholder='Tags' 
          variant='standard' 
          classes={{root: styles.tags}}
          onChange={(e) => setTags(e.target.value)}
          />
        <SimpleMde 
          value={text || ''} 
          className={styles.editor}
          onChange={(e) => setText(e.target.value)}
          />
        <div classes={styles.buttons}>
          <Button size="large" variant='contained'>Add Post</Button>
          <Button size="large" variant='outlined'>Cancel</Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddPost