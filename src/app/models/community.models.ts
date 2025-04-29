export interface Guide {
  id: string;
  name: string;
  avatar: string;
  location: {
    city: string;
    country: string;
  };
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  bio: string;
  specialties: string[];
  languages: string[];
  availability: {
    nextAvailable: Date;
    typicalResponse: string;
  };
  hourlyRate: number;
  isVerified: boolean;
}