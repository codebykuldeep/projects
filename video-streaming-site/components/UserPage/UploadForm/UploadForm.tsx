import { FormControl, InputLabel, MenuItem, TextField } from '@mui/material';
import classes from './upload-video.module.css'
import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface fieldType{
  title:string;
  description:string;
}

export default function UploadForm() {
    const [category, setCategory] = useState('');
    const [fieldState,setFieldState] =useState<fieldType>({
      title:'',
      description:''
    })
    
    
     const [image,setImage] =useState<any>(null)
     const [video,setVideo] =useState<any>(null)
    const [sizeError,setSizeError] =useState(false);
  
    const handleFieldChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
      
      setFieldState(prev=>({...prev,[event.target.name]:event.target.value}))
    }

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  function handleFileCheck(event:React.ChangeEvent<HTMLInputElement>){
    let file;
    if(event.target.files){
      file =event.target.files[0];
      setVideo(file);
    }
    if(file){
      console.log(file);
      
      if(file.size >= 50*1024*1024){
        setSizeError(true)
      }
    }
    if(sizeError){
      setSizeError(false);
    }
  }
  
  return (
    <>
      <div>
        <TextField
          className={classes.input}
          name="title"
          id="title"
          label="Video Title"
          variant="outlined"
          onChange={handleFieldChange}
          defaultValue={fieldState.title}
        />
      </div>
      <div>
        <TextField
          className={classes.input}
          id="description"
          name="description"
          label="Description"
          multiline
          rows={6}
          helperText={''}
          placeholder="Enter your video description"
          onChange={handleFieldChange}
          defaultValue={fieldState.description}
        />
      </div>
      <div>
        <FormControl fullWidth>
          <InputLabel id="category">Category</InputLabel>
          <Select
            className={classes.input}
            labelId="category"
            id="category"
            value={category}
            label="Category"
            name="category"
            onChange={handleChange}
          >
            {categoryList.map(({ id, label, value }) => (
              <MenuItem key={id} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <div className={classes.upload}>
          <label htmlFor="image">Thumbnail</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/png, image/gif, image/jpeg"
            
          />
        </div>
        <div className={classes.upload}>
          <label htmlFor="video">Video</label>
          <input
            type="file"
            id="video"
            name="video"
            accept="video/mp4,video/x-m4v,video/*"
            onChange={handleFileCheck}
          />
          {sizeError && <p className={classes.error}>File size should be under 50Mb</p>}
        </div>
      </div>
    </>
  );
}





const categoryList = [
    {
        id: 1,
        label: 'Entertainment',
        value: 'entertainment',
    },
    {
        id: 2,
        label: 'Education',
        value: 'education',
    },
    {
        id: 3,
        label: 'Sports',
        value: 'sports',
    },
    {
        id: 4,
        label: 'Music',
        value: 'music',
    },
    {
        id: 5,
        label: 'News',
        value: 'news',
    },
    {
        id: 6,
        label: 'Technology',
        value: 'technology',
    },
    {
        id: 7,
        label: 'Gaming',
        value: 'gaming',
    },
    {
        id: 8,
        label: 'Comedy',
        value: 'comedy',
    },
    {
        id: 9,
        label: 'Documentary',
        value: 'documentary',
    },
    {
        id: 10,
        label: 'Lifestyle',
        value: 'lifestyle',
    },
    {
        id: 11,
        label: 'Cooking',
        value: 'cooking',
    },
    {
        id: 12,
        label: 'Fitness',
        value: 'fitness',
    },
    {
        id: 13,
        label: 'Travel',
        value: 'travel',
    },
    {
        id: 14,
        label: 'Arts & Crafts',
        value: 'arts-crafts',
    },
    {
        id: 15,
        label: 'Health',
        value: 'health',
    },
];

