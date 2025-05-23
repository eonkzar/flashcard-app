export type Category = 'Cardiovascular' | 'Respiratory' | 'Endocrine' | 'Multi System' | 'Neurological'

export interface FlashCard {
  id: string;
  category: Category;
  question: string;
  answer: string;
  explanation: {
    detailed: string;
    images: Array<{
      url: string;
      caption: string;
      alt: string;
    }>;
  };
} 