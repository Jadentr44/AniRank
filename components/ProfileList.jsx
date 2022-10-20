import React,{useState} from 'react'
import { List, arrayMove } from 'react-movable';
import Grip from './icons/Grip';
export default function ProfileList({data}) {
  const [items, setItems] = useState(data.list)

  return (
    <div
    className='w-[65%] mx-auto'
    >
      <div>
        <h1 className='text-center text-3xl font-bold py-2 bg-red-500 text-white rounded-t-xl'>My list</h1>
      </div>
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>{
          setItems(arrayMove(items, oldIndex, newIndex))
          console.log("new items", items)
        }
        }
        renderList={({ children, props, isDragged }) => (
          <ul cl
            {...props}
            
          >
            {children}
          </ul>
        )}

        renderItem={({ value, props, isDragged, isSelected }) => (
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
             className='flex justify-between w-full border-2'
            >
              {/* 
                  Mark any node with the data-movable-handle attribute if you wish
                  to use is it as a DnD handle. The rest of renderItem will be then
                  ignored and not start the drag and drop. 
                */} 
                <div className=' flex'>
                <button
                data-movable-handle
                className='mx-4'
                style={{
                  cursor: isDragged ? 'grabbing' : 'grab',
                  
                }}
                tabIndex={-1}
              >
               <Grip />
              </button>
              <img className='h-[15vh]' src={value.url} alt="" />
              <div>{value.name}</div>
                </div>
            </div>
          </li>
        )}
      />
    </div>
  );
}
