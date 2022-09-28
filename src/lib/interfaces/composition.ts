export interface Composition {
  id?: string;
  name: string;
  compose: string;
  environmentVars: Array<{ name: string; value: string }>;
  host?: string;
}
