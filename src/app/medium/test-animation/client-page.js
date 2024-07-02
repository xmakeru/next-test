'use client'
import { useEffect, useState} from "react"
import { motion, useTransform, useAnimate, useMotionValue, useScroll, useTime } from "framer-motion"
import Parallax from './Parallax'

export default function TestAnimation() {
    
    const variants = {
        visible: { opacity: 1, scale: [1.2, 1], x: [100, 0] },
        hidden: { opacity: 0 },
      }

    const { scrollYProgress } = useScroll()
    const progress = useTransform(scrollYProgress, [0, 1], [0, 100]) // прогресс прокрутки, из 0-1 выводим в 0-100
    const [progressValue, setProgressValue] = useState(0)
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false })

  useEffect(() => {
    const changes = progress.on("change", (e) => setProgressValue(e.toFixed(0)))
    // добавление реагирования на изменение('change') переменной progress, callback-функция вызывается каждый раз при изменении переменной 
    // callback-функция принимает знамение e - текущее состояние переменной progress и округляет до ближайшего целого числа
    return () => changes();
  }, [progress])

    return (
      <>
      <div className="h-full w-full">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed z-50 top-0 left-0 right-0 h-4 bg-[#53A2BE] origin-left"
      />
        <div className="flex m-10 justify-around">
          <motion.div 
          className="bg-[#0A2239] w-[350px] h-[350px] rounded-md"
          animate={{ 
            x: [100, 0]}}
          //   scale: [1, 1.5, 1, 0.9, 1.5, 1]}}   
          transition={{
            delay: 0.3,
            duration: 3,
          }}
          />
          <motion.div 
          className="bg-[#0A2239] w-[350px] h-[350px] rounded-md flex flex-wrap items-center p-2">
            <motion.div className="bg-[#176087] w-[150px] h-[150px] m-2 rounded"initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: 2,
            delay: 1
          }}></motion.div>
            <motion.div className="bg-[#176087] w-[150px] h-[150px] m-2 rounded"initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: 2,
            delay:1.5
          }}></motion.div>
            <motion.div className="bg-[#176087] w-[150px] h-[150px] m-2 rounded"initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: 2,
            delay: 2
          }}></motion.div>
            <motion.div className="bg-[#176087] w-[150px] h-[150px] m-2 rounded" initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: 2,
            delay: 2.5
          }}></motion.div>
          </motion.div>
          <div className="bg-[#0A2239] w-[350px] h-[350px] rounded-md overflow-hidden">
            <motion.div className="flex items-center justify-center h-full text-white">
            {progressValue}%
            </motion.div>
          </div>
          </div>
          <div className="flex m-10 justify-around">
            <motion.div 
            className="bg-[#0A2239] w-[350px] h-[350px] rounded-md flex">
              <motion.div 
              className="bg-slate-100 w-[150px] h-[150px] rounded-3xl m-auto"
              style={{ rotate }}
              />
            </motion.div>
            <motion.div 
            className="bg-[#0A2239] w-[350px] h-[350px] rounded-md"/>
             <motion.div 
            className="bg-[#0A2239] w-[350px] h-[350px] rounded-md"/>
          </div>

          <Parallax />

          </div>
      </>
    )
}