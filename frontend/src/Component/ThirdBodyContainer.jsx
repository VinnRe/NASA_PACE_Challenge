import React from 'react'
import { CgGames } from "react-icons/cg";
import { CiFaceSmile } from "react-icons/ci";
import { MdQuiz } from "react-icons/md";

const ThirdBodyContainer = () => {
  return (
    <div className="thirdcontainer">
        <h1>Our <span className='interactive'>interactice </span> <br />Features</h1>
        <div className="thirdsubcontainer">
            <div className="boxconatainer">
                <div className="boxone">
                    <h1>Fun Quizes</h1>
                    <MdQuiz className='quizicon' />
                    </div>
                    <div className="boxtwo">
                        <h1>Creative Activities</h1>
                         <CiFaceSmile className='smileicon' />

                    </div>
                    <div className="boxthree">
                        <h1>Learn by Games </h1>
                         <CgGames className='gameicon'/>
                    </div>


            </div>
        </div>
    </div>
  )
}

export default ThirdBodyContainer