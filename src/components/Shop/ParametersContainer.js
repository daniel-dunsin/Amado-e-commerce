import React from 'react'
import { useGlobalContext } from '../context';
const ParametersContainer = ({ params, itemRef, category }) => {
  const { editFilterParameters} = useGlobalContext();
  return <article className='p-2 px-4 row' ref={itemRef}>
    {params.map(item => {
      return <div className='col-6 h6 d-flex align-items-center text-capitalize' key={item}>
        <input type="checkbox" name="" id={item} onChange={(e) => { editFilterParameters(e, category, item) }} />
        <label htmlFor={item} className='ps-1'>{item}</label>
      </div>
    })}
  </article>
}

export default ParametersContainer