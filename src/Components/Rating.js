import React from "react";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const Rating = ({rating,onClick,style}) =>{
    console.log(rating,onClick,style);
    return (
        <>
                        {/* <AiFillStar style={{fontsize:'15px'}} /> */}

            {[...Array(5)].map((_,i)=>{
                console.log('rating,i',rating,i);
                return (
                <span key={i} onClick={()=>onClick(i)} style={style}>
                    {rating > i ? (
                        <>
                        {console.log('if',rating)}
                        {/* <p>hi</p> */}
                        <AiFillStar style={{fontsize:'15px'}}  />
                        </>
                    ) : (
                        <>
                        {console.log('else',i)}
                        <AiOutlineStar style={{fontsize:'15px'}} />
                        </>
                    )}
                </span>
            )
            })}
        </>
        
    )
}

export default Rating;