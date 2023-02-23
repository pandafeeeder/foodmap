import "styled-components";

interface Category {
  border: string;
  background: string;
  color: string;
}

interface Enjoy {
  border: string;
  background: string;
  color: string;
  measurement: Measurement;
}

interface Avoid {
  border: string;
  background: string;
  color: string;
  measurement: Measurement;
}

interface Measurement {
  border: string;
  background: string;
  color: string;
}

interface Notes {
  border: string;
  background: string;
  color: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    category: Category;
    color: string;
    fontFamily: string;
    enjoy: Enjoy;
    avoid: Avoid;
    notes: Notes;
  }
}
