'use client'
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"

const gridContainerVariants = {
    hidden: {opacity: 0},
    show:{
    opacity: 1,
    transition: {
        staggerChildren: 0.25,
    }
}}

const gridSquareVariants = {
    hidden: {opacity: 0}, 
    show: {opacity: 1}
}

const svgIconVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: 'rgba(252, 111, 77, 0)',
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: 'rgba(252, 111, 77, 1)',
    }
}

export default function TestAnimation() {
    const {scrollYProgress: completionProgress} = useScroll()

    const containerRef = useRef(null)

    const isInView = useInView(containerRef, {once: true})
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    })

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    })

    const paragraphOneValue = useTransform(
        scrollYProgress, 
        [0, 1], 
        ['-100%', '0%']
        )

    const paragraphTwoValue = useTransform(
        scrollYProgress, 
        [0, 1], 
        ['100%', '0%']
        )
 
    return (
    <>
    <div className="flex flex-col gap-10 overflow-x-hidden">
      {/* Fade Up, Down */}
      <motion.section 
      variants={gridContainerVariants}
        initial='hidden'
        animate='show'
        className="grid grid-cols-3 p-10 gap-10">
        <motion.div 
        variants={gridSquareVariants} 
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
            <motion.div 
            className="w-20 h-20 bg-stone-100 rounded-lg"
            initial={{opacity: 0, y: 100}} 
            animate={{opacity:100, y: 0}}
            transition={{duration: 1, ease: 'easeOut', delay: 0.2}} 
            >
            </motion.div>
            <motion.div className="w-20 h-20 bg-stone-100 rounded-full"
            initial={{opacity: 0, y: -100}} 
            animate={{opacity:100, y: 0}}
            transition={{duration: 1, ease: 'easeOut', delay: 0.4}}
            >
            </motion.div>
        </motion.div>
        {/* Keyframes */}
        <motion.div 
        variants={gridSquareVariants} 
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center">
            <motion.div className="w-1/3 h-1/3 shadow-md bg-rose-400"
            animate={{
              scale: [1, 2, 2, 1],  //  4 кадра, 4 масштаба
              rotate: [0, 90, 90, 0], //  4 кадра, 4 поворота
              borderRadius: ['10%', '10%', '50%', '10%']}}  //  степень закругленности углов
            transition={{duration: 5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1}}    
            >
            </motion.div>
        </motion.div>
        {/* Hover & Tap */}
        <motion.div 
        variants={gridSquareVariants} 
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center">
            <motion.button className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 tracking-wide"
            whileTap={{scale: 0.9}}
            whileHover={{scale:1.1, backgroundColor: '#d5d5db', color: 'black'}}
            transition={{bounceDamping: 10, bounceStiffness: 600}}  // отскок
            >subscribe
            </motion.button>
        </motion.div>
        {/* Drag */}
        <motion.div 
        variants={gridSquareVariants} 
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center">
            <motion.div
            className="w-1/3 h-1/3 bg-orange-500 rounded-3xl"
            drag
            dragConstraints={{   // границы, за который элемент нельзя перетащить
                top: -125,
                right: 125,
                bottom: 125,
                left: -125
            }}
            dragTransition={{bounceStiffness: 600, bounceDamping: 10}}>
            </motion.div>
        </motion.div>
        {/* Scroll Progress */}
        <motion.div 
        variants={gridSquareVariants} 
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center">
            <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
                <motion.div className="w-full bg-gray-400 rounded-xl h-full origin-bottom" style={{scaleY: completionProgress}} />
            </motion.div>
        </motion.div>
        {/* SVG Animations */}
        <motion.div 
        variants={gridSquareVariants} 
        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center">
            <motion.svg  
            xmlns='http://www.w3.org/2000/org'
            viewBox='0 0 24 24'
            className='w-1/2 stroke-amber-500 stroke-[0.5]'
            >
              <motion.path 
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial='hidden'
              animate='visible'
              transition={{
                default: {  //анимация пути
                    duration: 2, 
                    ease: 'easeInOut', 
                    delay: 1, 
                    repeat: Infinity, 
                    repeatType: 'reverse,', 
                    repeatDelay: 1,}, 
                fill: {  // анимация заливки
                duration: 2, 
                ease: 'easeIn', 
                delay: 2, 
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 1,
                }
              }} />
            </motion.svg>
        </motion.div>
      </motion.section>
      <section className="flex flex-col gap-10 mb-10" ref={containerRef}>
        <motion.h1 
        className="text-5xl tracking-wide text-slate-100 text-center" 
        animate={mainControls}
        initial='hidden'
        variants={{
            hidden: {
                opacity: 0,
                y: 75,
            },
            visible: {
                opacity: 1,
                y: 0,
            },
        }}
        transition={{
            delay: 0.3,

        }}>
            Just Keep Scrolling
        </motion.h1>
        <motion.p 
        className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
        style={{translateX: paragraphOneValue}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </motion.p>
        <motion.p 
        className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
        style={{translateX: paragraphTwoValue}}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
        </motion.p>
      </section>
    </div>
    </>
    )
}