import React from 'react';
import dice1 from '../assets/images/dice_1.svg'
import dice2 from '../assets/images/dice_2.svg'
import dice3 from '../assets/images/dice_3.svg'
import dice4 from '../assets/images/dice_4.svg'
import dice5 from '../assets/images/dice_5.svg'
import dice6 from '../assets/images/dice_6.svg'
import { useState } from 'react';
const PlayZone = () => {
    const [showRules, setShowRules] = useState(false);
    const [diceImage, setDiceImage] = useState(dice1);
    const [isRolling, setIsRolling] = useState(false);
    const [msg,setMsg] =useState(true)
    const [selectedNumber, setSelectedNumber] = useState(null); // State to keep track of selected number
    const [totalScore,setTotalScore]= useState(0);

  const toggleRules = () => {
    setShowRules(!showRules);
  };
  const toggleMsg =(number) =>{
    setMsg(false);
    setSelectedNumber(number === selectedNumber ? null : number); // Toggle selected number

  }

  const resetScore = () => {
    // Function logic for resetting score
    setTotalScore(0);
    setSelectedNumber(null);
    setMsg(true)
  };

  const rollDice = () => {
    if (!selectedNumber) {
        // If no number is selected, do not roll the dice
        return;
    }

    if (isRolling) {
        // Disable rolling while the animation is in progress
        return;
    }
    // Start rolling animation
    setIsRolling(true);

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(dice1);
        break;
      case 2:
        setDiceImage(dice2);
        break;
      case 3:
        setDiceImage(dice3);
        break;
      case 4:
        setDiceImage(dice4);
        break;
      case 5:
        setDiceImage(dice5);
        break;
      case 6:
        setDiceImage(dice6);
        break;
      default:
        break;
    }
// End rolling animation
setTimeout(() => {
     // Check if the selected number matches the rolled dice number
     if (selectedNumber === randomNumber) {
        setTotalScore(totalScore + 2); // Earn 2 points for correct guess
    } else {
        setTotalScore(totalScore - 2); // Deduct 2 points for incorrect guess
    }
    setIsRolling(false);
  }, 1000); // Adjust the delay as needed
  
  };
  return (
    <>
    <div className='flex flex-col md:gap-10 gap-8 '>
      <div className='flex md:flex-row flex-col md:justify-around justify-center items-center w-full md:h-[151px] md:gap-[593px] gap-2'>
        <div className='flex flex-col whitespace-nowrap'>
          <span className='total-score mb-[-1rem]'>{totalScore}</span>
          <span className='capitalize  mt-[-1rem]'>total score</span>
        </div>
        <div className='flex flex-col'>
        {msg && (
            <div className='flex justify-end'>
            <p className='text-red-500 text-xl'>You have not selected any number</p>
            </div>
        )}
           <div className='flex flex-row gap-2 justify-center items-center'>
              {[1, 2, 3, 4, 5, 6].map((number) => (
                <div
                  key={number}
                  className={`number-button w-[50px] h-[50px] ${selectedNumber === number ? 'bg-black text-white' : ''}`}
                  onClick={() => toggleMsg(number)}
                >
                  {number}
                </div>
              ))}
            </div>
          
          <div className='flex justify-end'>
            <p className='select-number'>select number</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col gap-8'>
        <div className='flex flex-col gap-5'>
        <img src={diceImage} alt="" onClick={rollDice} className= {`w-64 ${isRolling ? 'animate-spin-slow' : ''}`} />
        <span className='text-2xl font-semibold capitalize'>click on dice to roll</span>
        </div>
        <div className='flex flex-col gap-6'>
        <button 
        onClick={resetScore}
        className='border border-black text-[16px] rounded-md bg-black text-white px-6 py-2 
        transition duration-300 hover:bg-white hover:text-black hover:border hover:border-black'> Reset Score</button>
        <button 
        onClick={toggleRules}
        className='border border-black text-[16px] rounded-md bg-black text-white px-6 py-2 
        transition duration-300 hover:bg-white hover:text-black hover:border hover:border-black'>
            {showRules? 'Hide Rules' :'Show Rules'}
        </button>
        </div>
      </div>
      {showRules && (
        <div className='flex  justify-center items-center'>
      <div className='flex flex-col justify-center  gap-7 bg-rulesbg w-[794px] h-[208px]'>
         <div className='flex ml-4'>
            <p className='text-2xl font-bold'>How to play dice game</p>
         </div>
         <div className='rules flex flex-col ml-4 md:items-start items-center leading-relaxed'>
            <span>1.Select any number</span>
            <span>2.Click on dice image</span>
            <span>3.after click on  dice  if selected number is equal to dice number you will get same point as dice </span>
            <span>4.if you get wrong guess then  2 point will be dedcuted </span>
         </div>
      </div>
      </div>
      )}
      </div>
    </>
  );
};

export default PlayZone;
