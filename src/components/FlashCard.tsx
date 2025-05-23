import { useState } from 'react'
import { Box, Text, useColorMode, Button, VStack, HStack, Image, Slide, Fade, IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface FlashCardProps {
  question: string;
  answer: string;
  explanation: string;
  images: Array<{
    url: string;
    caption: string;
    alt: string;
  }>;
  onNext: () => void;
  onPrevious: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const FlashCard = ({ 
  question, 
  answer, 
  explanation, 
  images, 
  onNext, 
  onPrevious,
  isFavorite,
  onToggleFavorite 
}: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const { colorMode } = useColorMode()

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
    if (!isFlipped) {
      setShowExplanation(false)
    }
  }

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFlipped(false)
    setShowExplanation(false)
    onNext()
  }

  const handlePreviousClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFlipped(false)
    setShowExplanation(false)
    onPrevious()
  }

  const toggleExplanation = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowExplanation(!showExplanation)
  }

  return (
    <Box position="relative">
      <VStack spacing={4} w="full">
        <Box
          w="100%"
          h="300px"
          position="relative"
          style={{ perspective: "1000px" }}
          onClick={handleCardClick}
        >
          <Box
            w="100%"
            h="100%"
            position="relative"
            cursor="pointer"
            style={{
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.6s',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Front Side */}
            <Box
              position="absolute"
              w="100%"
              h="100%"
              bg={colorMode === 'dark' ? 'gray.800' : 'white'}
              borderRadius="3xl"
              boxShadow="lg"
              display="flex"
              flexDirection="column"
              p={8}
              border="1px solid"
              borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
              style={{
                backfaceVisibility: 'hidden'
              }}
            >
              <HStack justify="space-between" mb={6}>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color={colorMode === 'dark' ? 'blue.200' : 'blue.500'}
                >
                  Question
                </Text>
                <IconButton
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                  icon={isFavorite ? <FaHeart /> : <FaRegHeart />}
                  onClick={(e) => {
                    e.stopPropagation()
                    onToggleFavorite()
                  }}
                  colorScheme={isFavorite ? "red" : "gray"}
                  variant="ghost"
                  size="sm"
                />
              </HStack>
              <Text
                color={colorMode === 'dark' ? 'white' : 'gray.800'}
                fontSize="xl"
                textAlign="center"
                flex={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontWeight="medium"
              >
                {question}
              </Text>
            </Box>

            {/* Back Side */}
            <Box
              position="absolute"
              w="100%"
              h="100%"
              bg={colorMode === 'dark' ? 'gray.800' : 'white'}
              borderRadius="3xl"
              boxShadow="lg"
              display="flex"
              flexDirection="column"
              p={8}
              border="1px solid"
              borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <HStack justify="space-between" mb={6}>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color={colorMode === 'dark' ? 'green.200' : 'green.500'}
                >
                  Answer
                </Text>
                <IconButton
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                  icon={isFavorite ? <FaHeart /> : <FaRegHeart />}
                  onClick={(e) => {
                    e.stopPropagation()
                    onToggleFavorite()
                  }}
                  colorScheme={isFavorite ? "red" : "gray"}
                  variant="ghost"
                  size="sm"
                />
              </HStack>
              <VStack spacing={4} flex={1}>
                <Text
                  color={colorMode === 'dark' ? 'white' : 'gray.800'}
                  fontSize="lg"
                  textAlign="center"
                  flex={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {answer}
                </Text>
                <Button
                  size="sm"
                  colorScheme="purple"
                  onClick={toggleExplanation}
                  borderRadius="lg"
                >
                  {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
                </Button>
              </VStack>
            </Box>
          </Box>
        </Box>
        <Box display="flex" gap={4} w="full" onClick={(e) => e.stopPropagation()}>
          <Button
            leftIcon={<ChevronLeftIcon />}
            colorScheme="gray"
            size="lg"
            flex={1}
            onClick={handlePreviousClick}
            borderRadius="2xl"
            bg={colorMode === 'dark' ? 'gray.800' : 'white'}
            color={colorMode === 'dark' ? 'gray.200' : 'gray.700'}
            _hover={{
              bg: colorMode === 'dark' ? 'gray.700' : 'gray.50'
            }}
          >
            Previous
          </Button>
          <Button
            rightIcon={<ChevronRightIcon />}
            colorScheme="blue"
            size="lg"
            flex={1}
            onClick={handleNextClick}
            borderRadius="2xl"
          >
            Next
          </Button>
        </Box>
      </VStack>

      {/* Backdrop */}
      {showExplanation && (
        <Fade in={showExplanation}>
          <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="blackAlpha.600"
            zIndex={5}
            onClick={toggleExplanation}
          />
        </Fade>
      )}

      {/* Explanation Overlay */}
      <Slide
        direction="right"
        in={showExplanation}
        style={{ 
          position: "fixed", 
          top: "0", 
          right: "0", 
          width: "400px",
          height: "100vh",
          zIndex: 10 
        }}
      >
        <Box
          bg={colorMode === 'dark' ? 'gray.800' : 'white'}
          h="100%"
          p={6}
          border="1px solid"
          borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
          overflowY="auto"
          boxShadow="lg"
          onClick={(e) => e.stopPropagation()}
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: colorMode === 'dark' ? '#4A5568' : '#CBD5E0',
              borderRadius: '24px',
            },
          }}
        >
          <VStack align="stretch" spacing={6}>
            <HStack justify="space-between">
              <Text
                fontSize="lg"
                fontWeight="bold"
                color={colorMode === 'dark' ? 'purple.200' : 'purple.500'}
              >
                Detailed Explanation
              </Text>
              <Button
                size="sm"
                variant="ghost"
                colorScheme="purple"
                onClick={toggleExplanation}
              >
                Close
              </Button>
            </HStack>
            
            <Text
              fontSize="sm"
              color={colorMode === 'dark' ? 'gray.200' : 'gray.600'}
              whiteSpace="pre-wrap"
              sx={{
                '& > ol': {
                  listStyleType: 'decimal',
                  pl: 4,
                  mb: 4,
                  '& > li': {
                    mb: 4,
                    display: 'block'
                  }
                },
                '& ul': {
                  listStyleType: 'disc',
                  pl: 4,
                  mb: 4,
                  '& > li': {
                    mb: 2
                  }
                }
              }}
              dangerouslySetInnerHTML={{
                __html: explanation
                  .split('\n')
                  .map(line => {
                    if (line.match(/^\d+\./)) {
                      // Start a new numbered item
                      return `</li></ol><ol><li>${line}`;
                    } else if (line.match(/^- /)) {
                      // Handle bullet points
                      return `<ul><li>${line.substring(2)}</li></ul>`;
                    } else if (line.trim() === '') {
                      // Handle empty lines
                      return '<br/>';
                    }
                    return line;
                  })
                  .join('\n')
                  .replace(/^<\/li><\/ol>/, '') // Remove extra closing tags at start
                  .replace(/<\/ol>$/, '</li></ol>') // Ensure proper closing
                  .replace(/<\/ul><ul>/g, '') // Clean up adjacent ul tags
              }}
            />

            {images && images.length > 0 && (
              <VStack spacing={4} align="stretch">
                {images.map((image, index) => (
                  <Box key={index}>
                    <Image
                      src={image.url}
                      alt={image.alt}
                      borderRadius="lg"
                      w="100%"
                      objectFit="contain"
                    />
                    {image.caption && (
                      <Text
                        fontSize="sm"
                        color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                        mt={2}
                        textAlign="center"
                        fontStyle="italic"
                      >
                        {image.caption}
                      </Text>
                    )}
                  </Box>
                ))}
              </VStack>
            )}
          </VStack>
        </Box>
      </Slide>
    </Box>
  )
}

export default FlashCard 