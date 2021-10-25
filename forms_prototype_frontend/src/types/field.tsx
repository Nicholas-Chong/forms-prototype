export type FieldTypes = 'email' | 'boolean' | 'text';

export interface Field {
  id: number;
  dependencies?: number[];
  type_of: FieldTypes;
  is_required: boolean;
  prompt: string;
}
