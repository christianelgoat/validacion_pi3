
export interface ValidationObjective {
  id: number;
  objective: string;
  testType: 'Cuantitativo' | 'Cualitativo';
  measurementParameter: string;
  experimentalMethod: string;
  acceptanceCriteria: string;
}
