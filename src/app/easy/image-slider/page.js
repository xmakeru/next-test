import ImageSlider from "./slider"
import satoru1 from '../../../../public/satoru-1.jpg'
import satoru2 from '../../../../public/satoru-2.jpg'
import satoru3 from '../../../../public/satoru-3.jpg'
import satoru4 from '../../../../public/satoru-4.jpg'
import satoru5 from '../../../../public/satoru-5.jpg'

const imageUrls = [satoru1, satoru2, satoru3, satoru4, satoru5]

export const metadata = {
    title: 'image-slider',
    description: 'slider of images'
}
 
export default function App() {
    return(
    <ImageSlider imageUrls={imageUrls}/>
    )
}