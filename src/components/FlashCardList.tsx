import { Box } from '@chakra-ui/react'
import type { FlashCard } from '../types'
import FlashCardItem from './FlashCardItem'

interface FlashCardListProps {
  flashCards: FlashCard[]
  onDelete: (id: string) => void
}

const FlashCardList = ({ flashCards, onDelete }: FlashCardListProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={4} width="100%">
      {flashCards.map(card => (
        <FlashCardItem
          key={card.id}
          flashCard={card}
          onDelete={onDelete}
        />
      ))}
    </Box>
  )
}

export default FlashCardList 