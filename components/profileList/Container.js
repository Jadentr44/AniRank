import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './Card.jsx'
const style = {
  width: 400,
}
export const Container = ({data}) => {
  {
    const [cards, setCards] = useState(data.list)
   
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
          
        }),
       
      )
    }, [])
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          url={card.url}
          text={card.name}
          moveCard={moveCard}
        />
      )
    }, [])
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}
