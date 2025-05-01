import React, { useState } from 'react'
import Menu from './Menu'
const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }
  return (
    <div>
      <section className='work container section' id='portfolio'> 
      <h2 className='section_title'>Recent Works</h2>

      <div className='work_filters'>

        <span className='work_item' onClick={(()=>setItems(Menu))} >Everything</span>
        <span className='work_item' onClick={(()=>filterItem("Frontend"))}>Frontend</span>
        <span className='work_item' onClick={(()=>filterItem("Backend"))} >Backend</span>
        <span className='work_item' onClick={(()=>filterItem("Full Stack"))} >Full Stack</span>
      

      </div>

        <div className='work_container grid'>
          {items.map((elem)=>{
            const{id, image, title, category} = elem;
            return (
              <div className='work_card' key={id}>
                <div className='work_thumbnail'>
                  <img src={image} alt={`image-${id}`} className='work_img'/>
                  <div className='work_mask'></div>
                </div>

                <span className='work_category'>{category}</span>
                <h3 className='work_title'> {title}</h3>
                <a href="#" className='work_button'>
                <i className='icon-link work_button-icon'></i>
                </a>
              </div>
            )
          })}
        </div>
      
      </section>
    </div>
  )
}

export default Portfolio
