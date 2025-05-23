import { useState, useEffect } from 'react'
import { FlashCard } from '../types'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FlashCard[]>(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (card: FlashCard) => {
    setFavorites(prev => {
      if (prev.some(f => f.id === card.id)) return prev
      return [...prev, card]
    })
  }

  const removeFromFavorites = (cardId: string) => {
    setFavorites(prev => prev.filter(card => card.id !== cardId))
  }

  const isFavorite = (cardId: string) => {
    return favorites.some(card => card.id === cardId)
  }

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }
} 