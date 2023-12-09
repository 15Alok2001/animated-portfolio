import "./portfolio.scss"
import {motion,useScroll,useSpring,useTransform} from "framer-motion"
import { useRef } from "react";
const items =[
    {
        id:1,
        title:" Image Denoising",
        img:"https://images.pexels.com/photos/18069158/pexels-photo-18069158/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-the-process-used-by-text-to-image-diffusion-models-it-was-created-by-linus-zoll-as-part-of-the-visualising-ai.png?auto=compress&cs=tinysrgb&w=300",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ut tempore quasi! Saepe molestiae rem, nihil omnis porro voluptatum commodi ut cupiditate ex vitae soluta quos quae ducimus iure repudiandae?",

    },
    {
        id:2,
        title:" Object Detection",
        img:"https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg?auto=compress&cs=tinysrgb&w=300",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ut tempore quasi! Saepe molestiae rem, nihil omnis porro voluptatum commodi ut cupiditate ex vitae soluta quos quae ducimus iure repudiandae?",

    },
    {
        id:3,
        title:" Product Recommendation",
        img: "https://images.pexels.com/photos/4829075/pexels-photo-4829075.jpeg?auto=compress&cs=tinysrgb&w=300",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ut tempore quasi! Saepe molestiae rem, nihil omnis porro voluptatum commodi ut cupiditate ex vitae soluta quos quae ducimus iure repudiandae?",

    },
    {
        id:4,
        title:"Blogging Website",
        img:"https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&w=300",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ut tempore quasi! Saepe molestiae rem, nihil omnis porro voluptatum commodi ut cupiditate ex vitae soluta quos quae ducimus iure repudiandae?",

    }
];
const Single = ({item})=>{
const ref = useRef();
const { scrollYProgress } = useScroll({
    target: ref,
  });
const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return(
        <section>
        <div className="container">
            <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
            <motion.div className="textContainer" style ={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button> See Demo </button>
            </motion.div>
            </div>
        </div>
        </section>
    )
}
export const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["end end","start start"
    ]})
 const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping: 30,
 })
  return (
    <div className="portfolio" ref = {ref}>
     <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}}className="progressBar"></motion.div>
      </div>
    {items.map(item=>(
        <Single item ={item} keys = {item.id}/>
    ))}
    </div>
  )
}

