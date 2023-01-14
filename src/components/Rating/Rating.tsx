import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import {ImStarEmpty} from 'react-icons/im'
import './Rating.css'

interface Props {
    rating: number,
    image: string,
    color: string
}
const Rating : React.FC<Props> = ({ rating, image, color }) => {
    let array: any = []
   for(let i : number = 0; i < rating ; i++){
    array.push('img' + i)
   }
  return (
    <div>
      <span className='cd-span-number'>
      {rating}  
      </span>
    {/* <span className='cd-span'>
      
      {array.map((each: string)=>(
        <AiFillStar key={each} className='cd-img'/>
        // <img className='cd-img' src={image} key={each}/>
        ))}  
    </span> */}
     <span className='cd-span'>
        <i style= {{color: color}}
        >
          {
            rating >= 1
            ? <AiFillStar/>
            : rating >= 0.5
            ? <BsStarHalf/>
            : <ImStarEmpty/>
            
          }
        </i>
      </span>
      <span className='cd-span'>
        <i style= {{color: color}}
        >
          {
            rating >= 2
            ? <AiFillStar/>
            : rating >= 1.5
            ? <BsStarHalf/>
            : <ImStarEmpty/>
            
          }
        </i>
      </span>
      <span className='cd-span'>
        <i style= {{color: color}}
        >
           {
            rating >= 3
            ? <AiFillStar/>
            : rating >= 2.5
            ? <BsStarHalf/>
            : <ImStarEmpty/>
            
          }
        </i>
      </span>
      <span className='cd-span'>
        <i style= {{color: color}}
        >
          {
            rating >= 4
            ? <AiFillStar/>
            : rating >= 3.5
            ? <BsStarHalf/>
            : <ImStarEmpty/>
            
          }
        </i>
      </span>
      <span className='cd-span'>
        <i style= {{color: color}}
        >
          {
            rating >= 5
            ? <AiFillStar/>
            : rating >= 4.5
            ? <BsStarHalf/>
            : <ImStarEmpty/>
            
          }
        </i>
      </span>

    </div>
    
   
    
  )
}

Rating.defaultProps = {
  color: '#f8e825'
}

export default Rating