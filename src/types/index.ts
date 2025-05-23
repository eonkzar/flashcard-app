export interface FlashCard {
  id: string;
  category: 'Cardiovascular' | 'Respiratory' | 'Endocrine' | 'Multi System' | 'Neurological';
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