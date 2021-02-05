
export interface JsonObject {
  name?: string;
  type: 'string' | 'boolean' | 'number' | 'object' | 'array';
  isPrimitiveValue: boolean;
  text?: string | boolean | number;
  children: JsonObject[];
}
