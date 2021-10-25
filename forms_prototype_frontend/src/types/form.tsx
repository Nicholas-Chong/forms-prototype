import { Field } from './field';

export interface Form {
  id: number;
  prompts: Field[];
  name: string;
  creator: string;
}
