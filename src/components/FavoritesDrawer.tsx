import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Text,
  useColorMode,
  Box,
  Button,
} from '@chakra-ui/react'
import { FlashCard } from '../types'
import { FaHeart } from 'react-icons/fa'

interface FavoritesDrawerProps {
  isOpen: boolean
  onClose: () => void
  favorites: FlashCard[]
  onRemoveFromFavorites: (cardId: string) => void
  onSelectCard: (card: FlashCard) => void
}

export const FavoritesDrawer = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFromFavorites,
  onSelectCard,
}: FavoritesDrawerProps) => {
  const { colorMode } = useColorMode()

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={colorMode === 'dark' ? 'gray.800' : 'white'}>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          <Text color={colorMode === 'dark' ? 'white' : 'gray.800'}>
            Favorite Cards ({favorites.length})
          </Text>
        </DrawerHeader>

        <DrawerBody>
          <VStack spacing={4} align="stretch" mt={4}>
            {favorites.length === 0 ? (
              <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} textAlign="center">
                No favorite cards yet
              </Text>
            ) : (
              favorites.map((card) => (
                <Box
                  key={card.id}
                  p={4}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
                  bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'}
                  position="relative"
                >
                  <VStack align="stretch" spacing={2}>
                    <Text
                      color={colorMode === 'dark' ? 'white' : 'gray.800'}
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {card.question}
                    </Text>
                    <Text
                      color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                      fontSize="xs"
                    >
                      Category: {card.category}
                    </Text>
                    <HStack justify="space-between" mt={2}>
                      <Button
                        size="sm"
                        colorScheme="blue"
                        variant="ghost"
                        onClick={() => {
                          onSelectCard(card)
                          onClose()
                        }}
                      >
                        Study This Card
                      </Button>
                      <Button
                        size="sm"
                        colorScheme="red"
                        variant="ghost"
                        leftIcon={<FaHeart />}
                        onClick={() => onRemoveFromFavorites(card.id)}
                      >
                        Remove
                      </Button>
                    </HStack>
                  </VStack>
                </Box>
              ))
            )}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
} 