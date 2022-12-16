export interface Date {
  day: number;
  month: number;
  year: number;
}

export interface TodoObj {
  id: number;
  title: string;
  priority: string;
  date: string;
  finished: boolean;
}

export const isBrowser = () => typeof window !== 'undefined';
