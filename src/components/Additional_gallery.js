import style from "../styles/additional_gallery.module.css";
import Card from "./Card";


import img1 from "../ImageBase/additional_img1.png";
import img2 from "../ImageBase/additional_img2.png";
import img3 from "../ImageBase/additional_img3.png";

let add_image=[img1,img2,img3];


function Additional_gallery(props) {
  return (
    <>
      <Card>
        <div className={style.heading}>Customers in Banglore also booked</div>
        <div className={style.main}>
        {add_image.map(el=>
              <div className={style.main_child}> 
              <img src={el} alt="logo" />
               <div className={style.main_name}>Cleaning & Disinfection</div>
               </div>
        )}
        <div className={style.scrollX}>&#8594;</div>
       </div> 
      </Card>
    </>
  );
}

export default Additional_gallery;
