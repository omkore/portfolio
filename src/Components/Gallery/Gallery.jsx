import React, { useState } from 'react'
import "./Gallery.css";
import image1 from "../../assets/videoCover.jpg" 
import image2 from "../../assets/gamingCover.jpg" 
import image3 from "../../assets/tutCover.jpg" 

const Gallery = () => {
    
    const [toggleState,setToggleState] = useState(0);
    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
    <section className="gallery section" id="gallery">
    <h2 className="section__title">Gallery</h2>
    <span className="section__subtitle">some of my other interests</span>
    <div className="gallery__container grid">   

        <div className="gallery__card" >
            <div className="gallery__header" onClick={()=>toggleTab(1)} >
                <img className='gallery__image' src={image2} alt="cover" />
            </div>
        {/* <h2 className="gallery__title">Gamer</h2> */}
            <div className={toggleState === 1 ? "gallery__modal active__modal" : "gallery__modal"}>
                <div className="gallery__modal-content">
                <h2 className='gallery__content-title'>Gaming</h2>

                    <i onClick={()=>toggleTab(0)} className="uil uil-times gallery__modal-close"></i>
                    <iframe className='player' width="560" height="315" src="https://www.youtube.com/embed/e-8dDq5S5dY" title="Gaming Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h2 className='lssText'>DO Like, Share, and Subscribe!</h2>
                </div>
            </div>
        </div>
        <div className="gallery__card" >
            <div className="gallery__header" onClick={()=>toggleTab(2)} >
                <img className='gallery__image' src={image1} alt="cover" />
            </div>
            <div className={toggleState === 2 ? "gallery__modal active__modal" : "gallery__modal"}>
                <div className="gallery__modal-content">
                <h2 className='gallery__content-title'>Editing</h2>

                    <i onClick={()=>toggleTab(0)} className="uil uil-times gallery__modal-close"></i>
                    <iframe  className='player' width="560" height="315" src="https://www.youtube.com/embed/35fbAljN-tQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h2 className='lssText'>DO Like, Share, and Subscribe!</h2>

                </div>
            </div>
        </div>
        <div className="gallery__card" >
            <div className="gallery__header" onClick={()=>toggleTab(3)} >
                <img className='gallery__image' src={image3} alt="cover" />
            </div>
            <div className={toggleState === 3 ? "gallery__modal active__modal" : "gallery__modal"}>
                <div className="gallery__modal-content">
                    <h2 className='gallery__content-title'>Teaching (Tutorials)</h2>
                    <i onClick={()=>toggleTab(0)} className="uil uil-times gallery__modal-close"></i>
                    <iframe className='player'  width="560" height="315" src="https://www.youtube.com/embed/h117C6HrfLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h2 className='lssText'>DO Like, Share, and Subscribe!</h2>

                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Gallery