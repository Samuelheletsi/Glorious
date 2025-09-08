'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import metaData from '@/data/meta.json';

export default function WordOfTheMonth() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
     <div style={{display:'block'}}>  
           <h2 
           style={{ fontSize: '2rem', 
           fontWeight: 700, 
           marginBottom: '0.5rem', 
           color: '#000', 
           textAlign:'center',
           paddingTop:'3rem', 
           paddingRight:'3rem' 
           
           }}>
                Word of the Month
            </h2>

      <section
        ref={ref}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          padding: '0.3rem 2rem',
          alignItems: 'center',
          backgroundColor: '#fff',
          color: '#000',
        }}
      >
        <motion.img
          src="/images/pastorchris1.jpeg"
          alt="Word of the Month"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            width: '18rem',
            height: '14rem',
            objectFit: 'cover',
            borderRadius: '3rem',
            border: '5px solid #6b21a8', // purple-700
            alignContent:"center"
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', maxWidth: '600px' }}
        >
          <p style={{ color: '#4b5563', fontSize:'1rem', textAlign:'center' }}>{metaData.wordOfTheMonth.description}</p>
          <p style={{ color: '#4b5563' , fontSize:'1rem', textAlign:'center'}}>{metaData.wordOfTheMonth.conclude}</p>
           
          <button
            style={{
              backgroundColor: '#6b21a8',
              color: '#fff',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              width: 'max-content',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            <a href="https://www.google.com/search?q=youtube+word+for+the+month+christ+embassy+september+2025+youtube&sca_esv=1e6a950761a072a4&rlz=1C1CHZN_enUS1177US1178&sxsrf=AE3TifPwxgu_Wk-aNOA9c6WZl4321ytztw%3A1757343470918&ei=7u6-aLnWN7fCp84PztONmAo&oq=youtube+word+for+the+month+christ+embassy+september+2025&gs_lp=Egxnd3Mtd2l6LXNlcnAiOHlvdXR1YmUgd29yZCBmb3IgdGhlIG1vbnRoIGNocmlzdCBlbWJhc3N5IHNlcHRlbWJlciAyMDI1KgIIADIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABSIWHAVCDAliXa3ABeACQAQCYAbkBoAHjD6oBBDAuMTW4AQHIAQD4AQGYAhCgAuwQwgIOEAAYgAQYsAMYhgMYigXCAggQABiwAxjvBcICCxAAGIAEGLADGKIEwgIFECEYqwLCAgUQIRifBZgDAIgGAZAGCJIHBDEuMTWgB5RvsgcEMC4xNbgH4RDCBwgyLTExLjQuMcgHbQ&sclient=gws-wiz-serp#fpstate=ive&vld=cid:61a11883,vid:opDGZgINa14,st:0" style={{textDecoration:'none', color:'white'}}> Watch Now </a>
          </button>
        </motion.div>
      </section>
    </div>
  );
}
