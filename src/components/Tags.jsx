import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { useDispatch, useSelector } from 'react-redux';

import { addTag, removeTag } from '../redux/slices/tagSlice';
import { useCreateTagMutation, useGetTagsQuery } from '../redux/services/postApi';

const Tags = () => {
    const { data } = useGetTagsQuery();
    const [setTagMutation] = useCreateTagMutation();
    const dispatch = useDispatch();
    const tags = useSelector((state) => state.tagSlice.selectedTags)

    const handleAddition = async (tag) => {
        if (data && Array.isArray(data)) {
            const exTags = data.find(ex => ex.title === tag.text);

            if (exTags) {
                dispatch(addTag({ id: exTags._id, title: exTags.title }))
            } else {
                try {
                    const { data } = await setTagMutation({title: tag.text});
                    const { title, _id } = data
                    dispatch(addTag({ id: _id, title: title }))
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }

    const suggestion = data?.map(tag => ({id: String(tag._id), text: tag.title}));

    const handleDelete = async (index) => {
        const tagToDelete = tags[index];
        dispatch(removeTag(tagToDelete._id))
    }
  return (
    <div>
        <ReactTags
            tags={tags?.map(tag => ({id: String(tag._id), text: tag.title}))}
            handleAddition={handleAddition}
            handleDelete={handleDelete}
            suggestions={suggestion}
            placeholder='Set tags to the article'
        />
    </div>
  )
}

export default Tags