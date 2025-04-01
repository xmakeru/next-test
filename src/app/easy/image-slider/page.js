import ImageSlider from "./slider"
import photo1 from '../../../../public/photo-1.jpg'
import photo2 from '../../../../public/photo-2.jpg'
import photo3 from '../../../../public/photo-1.jpg'
import photo4 from '../../../../public/photo-2.jpg'
import photo5 from '../../../../public/photo-1.jpg'

const imageUrls = [photo1, photo2, photo3, photo4, photo5]

export const metadata = {
    title: 'image-slider',
    description: 'slider of images'
}
 
export default function App() {
    return(
    <ImageSlider imageUrls={imageUrls}/>
    )
}