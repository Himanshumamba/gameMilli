import { useRef } from 'react'

const Start = ({ setUserName }) => {
const handleClick=()=>{

    inputRef.current.value && setUserName(inputRef.current.value);
    inputRef.current.focus();
}
    const inputRef= useRef();
    return (
        <div className='letsplay'>
            <input type='text' placeholder='Enter your name' ref ={inputRef}/>
            <button className='lp' onClick={handleClick}>Lets Play</button>
        </div>
    )
}

export default Start