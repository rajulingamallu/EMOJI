import React ,{useState}from 'react'
import { BsEmojiSmile} from 'react-icons/bs';
 import {ImAttachment} from'react-icons/im';
 import {ImCamera} from'react-icons/im';
 import {ImMic} from'react-icons/im';
//  import AttachmentIcons from './Attachment';
import {IoMdPhotos} from'react-icons/io';
//  import {BiCamera} from 'react-icons/bi'
 import {BsFileEarmark} from 'react-icons/bs'
 import {IoMdContact} from 'react-icons/io'
 import {IoIosPin} from 'react-icons/io'
//  import Emoji from './Emoji';
 import EmojiPicker from "emoji-picker-react";
const box={
    
border:'2px solid black',
outline:'none',
padding:'5px 0px ',
borderRadius:'10px',
width:'350px',
position:'sticky'
}
const sendd={
  position:'absolute',
  left:'470px',
  bottom:'16px',
  backgroundColor:'green',
  borderRadius:'5px',
  border:'none',
  padding:'8px 8px ',
  color:'white',
  fontSize:'16px'
}
const message_input={
    width:'100%',
    padding:'5px 10px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    position:'relative'
   }
   const inputt={
    backgroundColor:'white',
    padding:'5px 10px',
    width:'600px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:'40px',
    position:'relative'
   }

   const mic={
     
     width:'40px',
     height:'40px',
     backgroundColor:'green',
     display:'flex',
     justifyContent:'space-around',
     alignItems:'center',
     color:'white',
     fontSize:'1.3rem',
     borderRadius:'50%',
     curser:'pointer',
     marginRight:'140px'
   }
   const icc={

    position:"absolute",
    bottom:'75px',
    left:'50px',
    fontSize:'25px',
    color:'#636362',
   
   }
      

   

   
// const FileUpload = () => {
  
{/* <AttachmentIcons /> */}
function FileUpload(){

  const myfun=()=>{
  const fileInput = document.getElementById('fileInput');
const fileIcon = document.querySelector('.file-icon');

fileIcon.addEventListener('click', () => {
  fileInput.click();
})};


  const [showIcons, setShowIcons] = useState(false);
  const handleClick = () => {
    setShowIcons(!showIcons);
  };
   
  const [inputstr,setInputstr]=useState('')
  // const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showPicker,setShowPicker] =useState(false);




  const onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject);
    setInputstr(emojiObject.emoji);
  };

  const clickHandler=()=>{
    console.log(inputstr)
    alert(`Sending ${inputstr}...`);
    setInputstr('')
  }

//   const handleSendClick = () => {
//     if (chosenEmoji) {
//       alert(`Sending ${chosenEmoji.emoji}...`);
//       setChosenEmoji(null);
//     } else {
//       alert("Please choose an emoji before sending.");
//     }
//   };
//   return(
//   <div>
//   {chosenEmoji && (<span>You chose: {chosenEmoji.emoji}</span>)}
//   <EmojiPicker onEmojiClick={handleEmojiClick} />
//   <button onClick={handleSendClick}>Send</button>
// </div>)
// }
  return (
    <div style={message_input}>
     
        <div style={inputt}>
            <div>
            <BsEmojiSmile style={{color:'#777',cursor:'pointer',fontSize:'1.4rem',margin:'10px'}} onClick={()=>setShowPicker(val=> !val)} />
            {
              showPicker && <EmojiPicker 
              pickerStyle={{width:'80%',position:'absolute',bottom:'100px',left:'90px'}}
              onEmojiClick={onEmojiClick}/>
            }
            <input type='text'  placeholder='Type Message here' style={box} value={inputstr} onChange={e=>setInputstr(e.target.value)} />
            <ImAttachment  style={{color:'#777',cursor:'pointer',fontSize:'1.4rem',margin:'5px',position:'absolute',left:'330px',bottom:'10px'}} 
           onClick={handleClick} 
           /> {!showPicker}

{showIcons && (
        <div style={icc}>
          {/* <p> <HiPhoto/></p> */}
          <input type="file" id="fileInput" style={{display: 'none'}}/>

          <p className='file-icon'> <IoMdPhotos onClick={myfun}/> </p>
          
          <p> <BsFileEarmark/> </p>
          <p> <IoMdContact/> </p>
          <p> <IoIosPin/> </p>

        </div>
      )}
            <ImCamera className='camera'style={{color:'#777',cursor:'pointer',fontSize:'1.4rem',margin:'2px',position:'absolute',left:'370px',bottom:'14px'}}/>
            </div>
           <div style={mic}><ImMic /></div>
        </div>
        <button onClick={clickHandler} style={sendd}>Send</button>
    </div>
    
  )
}
// }


export default FileUpload
