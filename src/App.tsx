import { Box, Text, IconButton, useColorMode, Heading, HStack, Progress } from '@chakra-ui/react'
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaHeart, FaLungs, FaSyringe, FaBrain, FaLayerGroup } from 'react-icons/fa'
import { GiMedicines } from 'react-icons/gi'
import { useState, Suspense, useEffect } from 'react'
import FlashCard from './components/FlashCard'
import { flashcards, Category } from './data/flashcards'
import { FavoritesDrawer } from './components/FavoritesDrawer'
import { useFavorites } from './hooks/useFavorites'
import type { FlashCard as FlashCardType } from './types'

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All')
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [shuffledCards, setShuffledCards] = useState(shuffleArray(flashcards))
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  // Reshuffle cards when category changes
  useEffect(() => {
    const filteredCards = selectedCategory === 'All' 
      ? flashcards 
      : flashcards.filter(card => card.category === selectedCategory)
    setShuffledCards(shuffleArray(filteredCards))
    setCurrentCardIndex(0)
  }, [selectedCategory])

  const categoryCards = shuffledCards
  const currentCard = categoryCards[currentCardIndex]
  const progress = ((currentCardIndex + 1) / categoryCards.length) * 100

  const handleCategoryChange = (category: Category | 'All') => {
    setSelectedCategory(category)
  }

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % categoryCards.length)
  }

  const handlePreviousCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + categoryCards.length) % categoryCards.length)
  }

  const handleSelectFavoriteCard = (card: FlashCardType) => {
    const categoryCards = selectedCategory === 'All' 
      ? shuffledCards 
      : shuffledCards.filter(c => c.category === selectedCategory)
    
    const cardIndex = categoryCards.findIndex(c => c.id === card.id)
    if (cardIndex !== -1) {
      setCurrentCardIndex(cardIndex)
    } else {
      setSelectedCategory('All')
      const allCardsIndex = shuffledCards.findIndex(c => c.id === card.id)
      setCurrentCardIndex(allCardsIndex)
    }
  }

  const getCategoryIcon = (category: Category | 'All') => {
    switch (category) {
      case 'All':
        return FaLayerGroup
      case 'Cardiovascular':
        return FaHeart
      case 'Respiratory':
        return FaLungs
      case 'Endocrine':
        return FaSyringe
      case 'Multi System':
        return GiMedicines
      case 'Neurological':
        return FaBrain
    }
  }

  return (
    <Box
      minH="100vh"
      w="100vw"
      bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={8}
    >
      <Box w="full" maxW="800px" pt={4}>
        <HStack justify="space-between" mb={8}>
          <HStack spacing={4}>
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              onClick={() => setIsDrawerOpen(true)}
              size="lg"
              variant="ghost"
              color={colorMode === 'dark' ? 'gray.200' : 'gray.600'}
            />
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              size="lg"
              variant="ghost"
              color={colorMode === 'dark' ? 'yellow.200' : 'gray.600'}
              _hover={{
                bg: colorMode === 'dark' ? 'gray.700' : 'gray.200'
              }}
            />
          </HStack>
          <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} fontWeight="medium">
            {currentCardIndex + 1}/{categoryCards.length}
          </Text>
        </HStack>

        <Box 
          mb={8}
          mx={-4}
          px={4}
          py={2}
          overflow="hidden"
        >
          <Box
            overflowX="auto"
            pb={4}
            pt={2}
            px={2}
            mx={-2}
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            <HStack spacing={4}>
              {(['All', 'Cardiovascular', 'Respiratory', 'Endocrine', 'Multi System', 'Neurological'] as const).map((category) => {
                const Icon = getCategoryIcon(category)
                return (
                  <Box
                    key={category}
                    as="button"
                    p={4}
                    borderRadius="2xl"
                    bg={selectedCategory === category 
                      ? (colorMode === 'dark' ? 'blue.600' : 'blue.500')
                      : (colorMode === 'dark' ? 'gray.800' : 'white')}
                    color={selectedCategory === category
                      ? 'white'
                      : (colorMode === 'dark' ? 'gray.200' : 'gray.600')}
                    onClick={() => handleCategoryChange(category)}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={2}
                    flex="1"
                    minW="120px"
                    transition="all 0.2s"
                    boxShadow="md"
                    _hover={{
                      transform: 'translateY(-1px)',
                      boxShadow: 'md',
                      bg: selectedCategory === category
                        ? (colorMode === 'dark' ? 'blue.500' : 'blue.400')
                        : (colorMode === 'dark' ? 'gray.700' : 'gray.50')
                    }}
                  >
                    <Icon size="24px" />
                    <Text fontSize="sm" fontWeight="medium" textAlign="center">
                      {category}
                    </Text>
                  </Box>
                )
              })}
            </HStack>
          </Box>
        </Box>

        <Heading size="lg" color={colorMode === 'dark' ? 'white' : 'gray.800'} mb={8}>
          {selectedCategory}
        </Heading>

        <Box w="full">
          <Suspense fallback={<Text color={colorMode === 'dark' ? 'white' : 'black'}>Loading...</Text>}>
            <FlashCard 
              question={currentCard.question}
              answer={currentCard.answer}
              explanation={currentCard.explanation.detailed}
              images={currentCard.explanation.images}
              onNext={handleNextCard}
              onPrevious={handlePreviousCard}
              isFavorite={isFavorite(currentCard.id)}
              onToggleFavorite={() => {
                if (isFavorite(currentCard.id)) {
                  removeFromFavorites(currentCard.id)
                } else {
                  addToFavorites(currentCard)
                }
              }}
            />
          </Suspense>
        </Box>

        <Box mt={8}>
          <Text color={colorMode === 'dark' ? 'blue.200' : 'blue.600'} fontWeight="bold" mb={2}>
            Progress
          </Text>
          <Progress 
            value={progress} 
            size="sm" 
            colorScheme="blue" 
            borderRadius="full"
            bg={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
          />
        </Box>
      </Box>

      <FavoritesDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        favorites={favorites}
        onRemoveFromFavorites={removeFromFavorites}
        onSelectCard={handleSelectFavoriteCard}
      />
    </Box>
  )
}

export default App
