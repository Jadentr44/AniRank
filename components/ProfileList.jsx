import React,{useState} from 'react'
import { List, arrayMove } from 'react-movable';
import Grip from './icons/Grip';
import { useRouter } from "next/router";
import axios from 'axios';
export default function ProfileList({data,owner}) {
  const [items, setItems] = useState(data.list)
  const [listChanged, setChange] = useState(false)
  const router = useRouter();
  const { name } = router.query;
  async function saveList(){
    let res = await axios.post('/api/user/updateList',{
      username:name,
      newList:items
    })
    console.log(res)
  }
  return (
    <div style={{zIndex:0}}
    className='lg:w-[65%] mt-12 lg:mt-0 mx-auto'
    >
      <div className='relative text-center'>
        {!listChanged?"":<button onClick={()=>{setChange(false),saveList()}} className='right-2 top-0 bottom-0 my-2 absolute border-2 border-white rounded-full px-1 bg-red-500 text-white'>save changes</button>}
        
        <h1 className='text-center text-3xl font-bold py-2 bg-red-500 text-white rounded-t-xl'>{name}&rsquo;s list</h1>
      </div>
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>{
          setItems(arrayMove(items, oldIndex, newIndex))
          setChange(true)
        }
        }
        renderList={({ children, props, isDragged }) => (
          <ul
            {...props}
            
          >
            {children}
          </ul>
        )}

        renderItem={({ value, props, isDragged, isSelected,index }) => (
          <li className='w-full '
            {...props}
            style={{
              ...props.style,
             
              listStyleType: 'none',
              // cursor: isDragged ? 'grabbing' : 'inherit',
              backgroundColor: isDragged || isSelected ? '#EEE' : '#FFF'
            }}
          >
            <div
             className='flex justify-between items-stretch   border-2'
            >
                <div className=' flex items-center'>
                <button
                data-movable-handle
                className='px-4 h-full border-r-2'
                style={{
                  cursor: isDragged ? 'grabbing' : 'grab',
                  display: owner ? 'block':'none'
                  
                }}
                tabIndex={-1}
              >
               <Grip />
              </button>
              <img className='  h-32 mr-4' src={value.url} alt="" />
              <div className='lg:text-2xl text-lg'>{value.name}</div>
                </div>

                <div className=' border-l-2 flex items-center'>
                  <div className='mx-6'>{index+1}</div>
                </div>
            </div>
          </li>
        )}
      />
    </div>
  );
}
