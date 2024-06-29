'use client'
import { useInView } from 'react-intersection-observer'
import {
  useScroll,
  motion,
  useTransform,
  useMotionValue,
} from 'framer-motion'

export default function Parallax() {

  const { scrollYProgress } = useScroll()
  // const { ref, inView } = useInView({
  //   threshold: 0.5,  //доля видимости элемента, т. е. считается, что он виден, если виден хотя бы на половину
  //   triggerOnce: false //Булевое значение, указывающее, нужно ли вызывать колбэк только один раз при вхождении элемента в видеопорт (true), или каждый раз при входе и выходе из видеопорта (false)
  // })
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const variants1 = {
    visible: {opacity: 1, scale: 1, y: 100},
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    },
  }
  const variants2 = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
  }
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const p1 = useTransform(scrollYProgress, [0, 1], [3000, 0])
  const p2 = useTransform(scrollYProgress, [0, 1], [-3000, 0])

  return (
    <>
    <div className='h-[2000px]'>
    <motion.div className="bg-slate-100 w-[350px] h-[350px] m-auto rounded-lg" style={{ y: y1, x: -50 }} />
      <motion.div
        className="bg-slate-300 w-[350px] h-[350px] m-auto rounded-lg"
        style={{ y: y2, x: 50, }}
      />
      <motion.div
        animate={inView1 ? 'visible' : 'hidden'}
        variants={variants1}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref1}
        className='bg-slate-500 w-[350px] h-[350px] m-auto rounded-lg'
      />
      <motion.article
      className='text-white text-3xl my-48 mx-6'
      ref={ref2}
      animate={inView2 ? 'visible' : 'hidden'}
      variants={variants2}
      transition={{ duration: 2, ease: 'easeOut' }}
      >
        <motion.h2 
        className='my-4'
        style={{x: p1}}
        >С другой стороны сложившаяся структура организации требуют от нас анализа дальнейших направлений развития. Товарищи! постоянный количественный рост и сфера нашей активности играет важную роль в формировании модели развития. Таким образом консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Повседневная практика показывает, что консультация с широким активом представляет собой интересный эксперимент проверки форм развития.</motion.h2>
        <motion.p
        className=''
        style={{x: p2}}
        >Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании новых предложений. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности требуют от нас анализа соответствующий условий активизации.</motion.p>
      </motion.article>
      </div>
    </>
  )
}