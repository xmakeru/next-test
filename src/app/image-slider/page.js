'use client'
import Image from 'next/image'
import { useState } from "react"
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import satoru1 from '../../../public/satoru-1.jpg'
import satoru2 from '../../../public/satoru-2.jpg'
import satoru3 from '../../../public/satoru-3.jpg'
import satoru4 from '../../../public/satoru-4.jpg'
import satoru5 from '../../../public/satoru-5.jpg'

export default function ImageSlider() {
    const imageUrls = [satoru1, satoru2, satoru3, satoru4, satoru5]
    const [ImageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1 
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1 
        })
    }

    return (
    <div className='relative'>
        <Image src={imageUrls[ImageIndex]}/>
        <button onClick={showNextImage} className='absolute inset-y-0 left-0'>
          <ChevronLeftIcon class="h-10 w-10 text-indigo-900" />
        </button>
        <button onClick={showPrevImage} className='absolute inset-y-0 right-0'>
          <ChevronRightIcon class="h-10 w-10 text-indigo-900" />
        </button>
    </div>
    )
}