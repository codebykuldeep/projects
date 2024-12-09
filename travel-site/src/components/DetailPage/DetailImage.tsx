import { Box, ImageList, ImageListItem, Modal } from "@mui/material";
import { imgDataType } from "./DetailModelType";
import { useState } from "react";

interface DetailImageProps{
  imageData:imgDataType[];
}

function DetailImage({imageData}:DetailImageProps) {
  const [selectedImage,setSelectedImage] =useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleImageModal(imgUrl:string){
    console.log(imgUrl);
    
    setSelectedImage(imgUrl);
    handleOpen();
  }
  return (
    <div style={{padding: "0 20px"}}>
        <h1 >Image Gallery</h1>
        <br />
       <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {imageData.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={`${item.webformatURL}`}
            src={`${item.webformatURL}`}
            alt={item.tags}
            style={{width:'164px',height:'158px',objectFit:'cover'}}
            loading="lazy"
            onClick={()=>handleImageModal(item.webformatURL)}
          />
        </ImageListItem>
      ))}
    </ImageList>
    <ImageModal open={open} handleClose={handleClose} imgUrl={selectedImage}/>
    </div>
  );
}

export default DetailImage;


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  maxHeight:'516px',
  p:1
};

interface ImageModalProps{
  open:boolean;
  imgUrl:string;
  handleClose:()=>void;
}

 function ImageModal({imgUrl,open,handleClose}:ImageModalProps) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <img src={imgUrl} style={{width:'484px',maxHeight:'500px',objectFit:'cover'}} alt="modal img"/>
        </Box>
      </Modal>
    </div>
  );
}








// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//     cols: 2,
//   },
// ];
