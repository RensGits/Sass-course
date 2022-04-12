import '../scss/components/_gridItem.scss'
import { BsArrowRight } from 'react-icons/bs'
import { useState } from 'react'


export default function GridItem(props){

    const [showVideo, setShowVideo] = useState(false);

    const handleShowVideo = () => {
        setShowVideo(true)
    }

    return(
        <> {!showVideo &&
                <div className='grid-item'>
                    <img src={props.image} alt="" />
                    <div className='grid-item-overlay left'>
                        <div className='grid-item-overlay-info-left'>
                            <h2>Building title</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores a adipisci quasi optio cumque recusandae consectetur soluta eum quibusdam deserunt.</p>
                        </div>
                    </div>
                    <div className='grid-item-overlay right'>
                        <div className='grid-item-overlay-info-right'>
                            <BsArrowRight color='white' onClick={handleShowVideo}/>
                        </div>
                    </div>
                </div>
            }
            {showVideo &&
                <div className='grid-video'>
                    <video loop autoPlay>
                        <source
                            src="/architecture-video.mp4"
                        type="video/mp4"
                    />
                    </video>
                </div>
            }
                
        </>  
    )
}