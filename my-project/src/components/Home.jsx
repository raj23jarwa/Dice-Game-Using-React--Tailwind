import React, { useState } from 'react'
import diceImage from '../assets/images/dices.svg'
import PlayZone from './PlayZone'
const Home = () => {
    const[showPlayZone,setShowPlayZone] =useState(false);

    const playGame= () =>{
        setShowPlayZone(true)
    }
    return (
        <>
        {!showPlayZone && (
            <div className='flex flex-row justify-center items-center w-full h-screen'>
                <div className=''>
                    <img src={diceImage} alt="" />
                </div>
                <div className='flex flex-col'>
                    <p className='text-[96px] whitespace-nowrap font-bold uppercase'>dice game</p>
                    <div className="flex  justify-end">
                        <button 
                        onClick={playGame}
                        className='uppercase bg-black px-2 py-1 text-white w-[220px] h-[44px] rounded-md 
                                  duration-300 ease-in-out hover:bg-white hover:text-black hover:border border-black'>play now</button>
                    </div>         
                </div>

            </div>
            )}
            {showPlayZone && <PlayZone />}
        </>
    )
}

export default Home