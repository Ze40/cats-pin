export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  mime_type?: string;
  breeds: {}[];
  categories: {
    id: string;
    name: string;
  }[];
  isFavorite: boolean;
}
