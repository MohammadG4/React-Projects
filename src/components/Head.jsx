// import React, { useState } from 'react'
// import Mylist  from './Mylist'
// import vitelogo from "../assets/react.svg"
// const Head = () => {
//   const [s1,setS1] = useState("")
//   const [s2,setS2] = useState("")
//   const [s3,setS3] = useState("")
  
//   const [list, setList] = useState([])
//   const fisrtadd = (task) => {
//     setList(prev => {
//       return [...prev, task]
//     })
//     setS3("")
//     setS2("")
//     setS1("")
//   }
//   return (
//     <div className='flex flex-col  items-center justify-center text-2xl bg-red-500'>
//       <div action="" className='flex flex-row'>
//         <input type="text" value={s1} className='border-8'  onChange={e=> setS1(e.target.value)}/>

//         <input type="text" value={s2} className='border-8'   onChange={e=> setS2(e.target.value)}/>
        
//         <input type="text" value={s3} className='border-8'    onChange={e=> setS3(e.target.value)}/>
//       <button onClick={()=>fisrtadd({title: s1,day:s2,date:s3})}>Add</button>
//       </div>
//       {list.map(e=>(<Mylist title={e.title} day={e.day} date={e.date}/>))}
//     </div>

    
//   )
// }

// export default Head;