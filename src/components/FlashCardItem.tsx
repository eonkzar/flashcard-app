import { Box, Button, Text, useColorMode } from '@chakra-ui/react'
import type { FlashCard } from '../types'

interface FlashCardItemProps {
  flashCard: FlashCard
  onDelete: (id: string) => void
}

const FlashCardItem = ({ flashCard, onDelete }: FlashCardItemProps) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      p={4}
      borderRadius="lg"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      boxShadow="sm"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text color={colorMode === 'dark' ? 'white' : 'gray.800'}>
        {flashCard.question}
      </Text>
      <Button
        colorScheme="red"
        size="sm"
        onClick={() => onDelete(flashCard.id)}
      >
        Delete
      </Button>
    </Box>
  )
}

export default FlashCardItem 