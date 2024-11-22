import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SimpleMde from 'react-simplemde-editor';
import styles from './AddPost.module.scss';
import Header from '../../components/Header';

const AddPost = () => {
  const [ title, setTitle ] = useState('');
  const [ image, setImage ] = useState('');
  const [ tags, setTags ] = useState('');
  const [ text, setText ] = useState('');
  const [imageUrl, setImageUrl ] = useState('');
  return (
    <>
      <Header/>
      <div className='post-editor'>
      <div className="container">
        <div className="image">
          <Button>Load preview</Button>
          <input/>
          { imageUrl && (
            <>
              <Button variant='contained' color='error'>Delete</Button>
              <img src="" alt="" />
            </>
          ) }
        </div>
        <br /><br />
        <TextField placeholder='Post title' variant='standard' fullWidth classes={{root: styles.title}}/>
        <TextField placeholder='Tags' variant='standard' classes={{root: styles.tags}}/>
        <SimpleMde className={styles.editor}/>
        <div classes={styles.button}>
          <Button size="large" variant='contained'>Add Post</Button>
          <Button size="large" variant='outlined'>Cancel</Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddPost