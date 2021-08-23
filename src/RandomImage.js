import {useState} from 'react';
import axios from 'axios';

const imgStyle ={
  height:"20rem",
  width:"20rem"
}

function RandomImage() {

  let [img_src, setimg_src] = useState('')
  let [loader, setLoader] = useState(true)

  // Method-1 without api
  
  // let img_src1 = './images/';
  // let img_src2 = '.jpeg';

  // function random_img(){
  //   let n = Math.floor(Math.random()*10);
  //   let img_src3 = img_src1.concat(n, img_src2);
  //   setimg_src(img_src3)
  // }

  // Method-1 with api

  function random_img(){

    // with fetch api

    // fetch('https://api.thecatapi.com/v1/images/search?format=json')
    // .then(response => response.json())
    // .then((data) => {
    //   console.log(data[0].url);
    //   setimg_src(data[0].url);
    // })
    

    // with axios
    
    axios.get('https://api.thecatapi.com/v1/images/search?format=json')
    .then(response => response.data)
    .then((data) => {
      setLoader(false)
      // console.log(data[0].url);
      setimg_src(data[0].url);
    })
    setLoader(true);
    console.log(img_src);
    }

  if(loader === true){
    return (
      <>
        <button onClick = {random_img}>Click Me</button>
        <br/>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <button onClick = {random_img}>Click Me</button>
      <br/>
  <img src={img_src} alt='try' style={imgStyle}/>
    </>
  );
}

export default RandomImage;
