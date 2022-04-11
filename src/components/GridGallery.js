import '../scss/components/_gridGallery.scss'

export default function GridGallery(){

    const images = ['architect3.webp','architect4.jpeg','architect5.jpeg','architect6.jpeg','architect7.jpg','architect8.jpeg','architect9.jpeg','architect10.webp','architect11.jpeg']

    return(
        <div className='grid-container'>
            {
                images.map(image => {
                    return  <div className='grid-container-item'>
                                <img src={image} alt="" />
                                <div className='grid-container-item-overlay left'></div>
                                <div className='grid-container-item-overlay right'></div>
                            </div>
                })
            }
      </div>
    )
}