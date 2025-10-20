
import { ValidationObjective } from './types';

export const VALIDATION_DATA: ValidationObjective[] = [
  {
    id: 1,
    objective: 'Reducir el tiempo promedio de gestión de inventario en al menos un 25% durante las pruebas de usabilidad.',
    testType: 'Cuantitativo',
    measurementParameter: '% de Reducción de Tiempo.',
    experimentalMethod: 'Encuesta Post-Prueba: Comparación de tiempo antes vs. después.',
    acceptanceCriteria: '≥ 25% de reducción promedio.',
    result: {
      status: 'CUMPLIDO',
      value: '(56.8%)',
    },
  },
  {
    id: 2,
    objective: 'Lograr una tasa de adopción potencial de al menos el 80% entre los usuarios de prueba.',
    testType: 'Cuantitativo',
    measurementParameter: 'Tasa de Adopción (%).',
    experimentalMethod: 'Encuesta Post-Prueba: Pregunta directa "¿Lo seguiría usando?".',
    acceptanceCriteria: '≥ 80% de respuestas "Sí".',
    result: {
      status: 'NO CUMPLIDO',
      value: '(51.6%)',
    },
  },
  {
    id: 3,
    objective: 'Mejorar la percepción del nivel de estrés del usuario en al menos un 25% (calificación > 2.25/5).',
    testType: 'Cuantitativo',
    measurementParameter: 'Calificación de Mejora (1-5).',
    experimentalMethod: 'Encuesta Post-Prueba: Pregunta directa sobre el cambio en el nivel de estrés.',
    acceptanceCriteria: 'Calificación promedio ≥ 2.25 sobre 5.',
    result: {
      status: 'CUMPLIDO',
      value: '(3.97/5)',
    },
  },
  {
    id: 4,
    objective: 'Identificar los puntos de fricción técnicos y de usabilidad que impiden la adopción.',
    testType: 'Cualitativo',
    measurementParameter: 'Frecuencia y tipo de problemas reportados.',
    experimentalMethod: 'Análisis de respuestas abiertas sobre emociones negativas y comentarios libres.',
    acceptanceCriteria: 'Identificar al menos 3 causas raíz del rechazo.',
    result: {
      status: 'CUMPLIDO',
      value: '(Pérdida de datos, lentitud, UI/UX confuso).',
    },
  },
];
