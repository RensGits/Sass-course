import '../scss/components/_gridGallery.scss'
import GridItem from './GridItem'

export default function GridGallery(){

    const images = ['architect3.webp','architect4.jpeg','architect5.jpeg','architect6.jpeg','architect7.jpg','architect8.jpeg','architect9.jpeg','architect10.webp','architect11.jpeg','architect12.jpeg','architect13.webp','architect14.png']

    return(
        <div className='grid-container'>
            {
                images.map(image => {
                    return  <GridItem image={image}/>
                })
            }
      </div>
    )
}