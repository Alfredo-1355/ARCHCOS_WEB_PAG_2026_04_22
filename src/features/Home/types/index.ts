export interface Project {
  id: string;
  title: string;
  category?: string;
  location: string;
  img: string;
  price?: string;
}

export interface CarouselState {
  currentIndex: number;
  direction: number;
}
