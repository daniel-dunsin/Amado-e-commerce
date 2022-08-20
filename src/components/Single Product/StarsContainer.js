import React from 'react'
import { FaStar } from 'react-icons/fa';




const StarsContainer = ({ starsCount }) => {
    // return full stars of the same amount as the star count and empty stars for 5 - minus star count
    const stars = [];
    for(let i = 0; i < 5; i++){
        if(i < starsCount){
            stars.push(true);
        }else{
            stars.push(false);
        }
    }
    return (
        <div>
            {
                stars.map((star, index)=>{
                    if(star){
                        return <i className="text-warning" key={index}><FaStar /></i>
                    }else{
                        return <i className="text-muted" key={index}><FaStar /></i>
                    }
                })
            }
        </div>
    )
}

export default StarsContainer