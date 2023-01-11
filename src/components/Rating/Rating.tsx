import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import './Rating.css'

interface Props {
    rating: number,
    image: string,

}
const Rating : React.FC<Props> = ({ rating, image }) => {
    let array: any = []
   for(let i : number = 0; i < rating ; i++){
    array.push('img' + i)
   }
  return (
    <div>
      <span className='cd-span-number'>
      {rating}  
      </span>
    <span className='cd-span'>
      
      {array.map((each: string)=>(
        <AiFillStar key={each} className='cd-img'/>
        // <img className='cd-img' src={image} key={each}/>
        ))}  
    </span>
    </div>
    
   
    
  )
}

export default Rating