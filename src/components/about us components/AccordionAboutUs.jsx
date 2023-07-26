import React from 'react';

// //Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Accordion} from 'react-bootstrap';



//css style
import style from "../../styles/AccordionAboutUs.module.css"



const AccordionAboutUs = () => {
  return (
    <>
      <section className={style.accordion_about_us}>
        <div className={style.accordion_about_us_holder}>
          <h3>
            اطلاعات تکمیلی
          </h3>
           {/* <Accordion className='current_accordion' >
             <Accordion.Item  className='current_accordion_itme' eventKey="0">
               <Accordion.Header className='current_accordion_itme_head'>Accordion Item #1</Accordion.Header>
               <Accordion.Body className='current_accordion_itme_body'>
                 First Item
               </Accordion.Body>
             </Accordion.Item>
             <Accordion.Item  className='current_accordion_itme' eventKey="1">
               <Accordion.Header className='current_accordion_itme_head'>Accordion Item #2</Accordion.Header>
               <Accordion.Body className='current_accordion_itme_body'>
                 Second Item
               </Accordion.Body>
             </Accordion.Item>
           </Accordion> */}
        </div>
      </section>
    </>
  );
}

export default AccordionAboutUs;