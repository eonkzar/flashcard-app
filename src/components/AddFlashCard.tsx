import { useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'

interface AddFlashCardProps {
  onAdd: (question: string, answer: string) => void
}

const AddFlashCard = ({ onAdd }: AddFlashCardProps) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!question.trim() || !answer.trim()) {
      setError('Both question and answer are required')
      return
    }

    onAdd(question, answer)
    setQuestion('')
    setAnswer('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <Box display="flex" flexDirection="column" gap={4}>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <FormControl isRequired>
          <FormLabel>Question</FormLabel>
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter the question"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Answer</FormLabel>
          <Input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter the answer"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Add Flash Card
        </Button>
      </Box>
    </form>
  )
}

export default AddFlashCard 