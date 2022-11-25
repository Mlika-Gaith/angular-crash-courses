export interface Task {
  id?: number; // ? the question mark means it's optional
  text: string;
  day: string;
  reminder: boolean;
}
