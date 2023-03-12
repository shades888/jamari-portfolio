import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  
  const handleClick = (index) => {
    setCurrentIndex(index);
  }
 
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    

    client.fetch(query).then((data) => {
     setTestimonials(data);
    })

    client.fetch(brandsQuery).then((data) => {
     setBrands(data);
    })
  }, [])

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imgurl)} alt="testimonial" />
              <div className="app__testimonial-content">
                <p className="p-text">{test.feedback}</p>
                  <div>
                    <h4 className="bold-text">{test.name}</h4>
                    <h5 className="p-text">{test.company}</h5>
                  </div>
              </div>
          </div>
            {/* This div will allow the user to move accross different testimonials*/}
          <div className="app__testimonial-btns app__flex">

{/*<div className="app__flex"> - This creates a div element with a class name of app__flex. The class name is likely used for styling purposes in CSS.

onClick={() => handleClick(...)} 
This attaches an onClick event listener to the div element. When the user clicks on the div element, it triggers the handleClick function.

currentIndex === 0 ? testimonials.length -1 :currentIndex - 1 - 
This is a ternary operator that evaluates whether the currentIndex value is equal to 0. If it is, the operator returns the last index of the testimonials array (testimonials.length -1). If it's not, the operator returns the currentIndex value minus 1.

handleClick(...)
- This is the function that is called when the onClick event listener is triggered. It takes an argument, which is the result of the ternary operator from the previous line.
--Summary-- 
So when the user clicks on the div element, the handleClick function is called with an argument that represents the index of the previous testimonial to display. If the currentIndex value is 0, the function will display the last testimonial in the testimonials array. Otherwise, it will display the testimonial at currentIndex - 1. This allows the user to navigate through the testimonials by clicking on the left arrow.
*/}
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length -1 :currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            {/* Similiar */}
            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length -1 ? 0 :currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brand app__flex">
        {brands.map((brand) => (
          <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: 'tween'}}
          key={brand.id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}

      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
  );