import React, { useState, useCallback, useRef } from 'react';
import { TextField, Button } from '@mui/material';
import SimpleMde from 'react-simplemde-editor';
import styles from './AddPost.module.scss';
import Header from '../../components/Header';
import { useCreatePostMutation, useUploadImageMutation } from '../../redux/services/postApi';
import Tags from '../../components/Tags';

const AddPost = () => {
  const [ title, setTitle ] = useState('');
  const [ image, setImage ] = useState('');
  const [ tags, setTags ] = useState([]);
  const [ text, setText ] = useState('');
  const [isEditing, setIsEditing] = useState(false)
  const [imageUrl, setImageUrl ] = useState('');
  const [uploadPost] = useCreatePostMutation();
  const [uploadImage] = useUploadImageMutation();

  const inputRef = useRef(null)

  const onSubmitText = useCallback((value) => {
    setText(value)
  }, []);

const handleUploadImage = async (event) => {
  const file = event.target.files[0];

  const formData = new FormData();
  formData.append('image', file);

  const { data } = await uploadImage(formData);

  setImageUrl(data.url)
  console.log(data)
}

const removeImage = () => {
  setImageUrl('')
}

const createPost = async () => {
  // const formData = new FormData();

  try {
    const fields = {
      title,
      text,
      tags,
      image
    }

    if (isEditing) {
      console.log('editing')
    } else {
      const response = await uploadPost(fields);

      console.log(response)
    }
  } catch(err) {
    console.log(err)
  }
}
  return (
    <>
      <Header/>
      <div className='post-editor'>
      <div className="container">
      <h1>Creating Post</h1>
        <div className="image">
          <Button onClick={() => inputRef.current.click()}>Load preview</Button>
          <input ref={inputRef} hidden type="file" onChange={handleUploadImage} />
          { imageUrl && (
            <div className='image-inner'>
              <img src={`http://localhost:4444${imageUrl}`} alt=""  />
              <Button variant='contained' color='error' onClick={removeImage}>Delete</Button>
            </div>
          )}
        </div>
        <br /><br />
        <TextField value={title || ''} placeholder='Post title' variant='standard' fullWidth classes={{root: styles.title}}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <TextField 
          value={tags || []} 
          placeholder='Tags' 
          variant='standard' 
          classes={{root: styles.tags}}
          onChange={(e) => setTags(e.target.value)}
          /> */}
        <Tags/>
        <SimpleMde 
          value={text || ''} 
          className={styles.editor}
          onChange={onSubmitText}
          />
        <div classes={styles.buttons}>
          <Button size="large" variant='contained' onClick={createPost}>Add Post</Button>
          <Button size="large" variant='outlined'>Cancel</Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddPost