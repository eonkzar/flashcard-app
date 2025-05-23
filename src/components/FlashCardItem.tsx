import { useState } from 'react'
import { Box, Button, Text, Flex } from '@chakra-ui/react'
import type { FlashCard } from '../App'

interface FlashCardItemProps {
  flashCard: FlashCard
  onDelete: (id: string) => void
}

const FlashCardItem = ({ flashCard, onDelete }: FlashCardItemProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Box
      w="100%"
      p={6}
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      boxShadow="md"
      cursor="pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.02)' }}
      _dark={{
        bg: 'gray.700',
        borderColor: 'gray.600'
      }}
    >
      <Text fontSize="lg" mb={4}>
        {isFlipped ? flashCard.answer : flashCard.question}
      </Text>
      <Flex justify="space-between" align="center">
        <Text fontSize="sm" color="gray.500">
          {isFlipped ? 'Answer' : 'Question'}
        </Text>
        <Button
          size="sm"
          colorScheme="red"
          onClick={(e) => {
            e.stopPropagation()
            onDelete(flashCard.id)
          }}
        >
          Delete
        </Button>
      </Flex>
    </Box>
  )
}

export default FlashCardItem 