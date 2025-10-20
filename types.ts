
export interface ValidationObjective {
  id: number;
  objective: string;
  testType: 'Cuantitativo' | 'Cualitativo';
  measurementParameter: string;
  experimentalMethod: string;
  acceptanceCriteria: string;
  result: {
    status: 'CUMPLIDO' | 'NO CUMPLIDO';
    value: string;
  };
}
