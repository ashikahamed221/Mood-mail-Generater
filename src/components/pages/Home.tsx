import { useState } from 'react';
import Moodinput from '../Moodinput'
import Moodoutput from '../Moodoutput';

const Home = () => {

  const[mood,setMood] = useState("");
  const[subject,setsubject] = useState("");
  const[footer,setfooter] = useState("");
  const[generater,setgenerater] = useState(false);

  const handlegenerate = () => {
    const lowermood = mood.toLowerCase();

    if(lowermood.includes('happy'))
    {
      setsubject("☺️feeling Great Today")
      setfooter("Stay Awesome")
    }
    else if(lowermood.includes("sad")){
        setsubject("😔Just another tough day");
        setfooter("sending hugs")
    }
    else if(lowermood.includes("angry")){
        setsubject("😎Need to cool of...");
        setfooter("Deep break")
    }
    else{
      setsubject("mood update");
      setfooter("catch you later")
    }
    setgenerater(true)
  }
  

  const handleReset = () => {
    setMood("");
    setsubject("");
    setfooter("");
    setgenerater(false)
  }

  return (
    <div className='max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-sm bg-white space-y-6'>
      <h2 className='text-2xl font bold text-grey-800'>Mood Mail generater</h2>

{!generater ? (
         <Moodinput mood={mood} setMood={setMood}
          onGenerate={handlegenerate}
          disabled={generater}/>
):(
   <Moodoutput subject={subject} footer={footer} onReset={handleReset}/>
)}
</div>
  )
}

export default Home
