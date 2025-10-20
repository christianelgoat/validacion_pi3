
import { ValidationObjective } from './types';

export const VALIDATION_DATA: ValidationObjective[] = [
  {
    id: 1,
    objective: 'Validar que el MVP reduce el tiempo de gestión manual de inventarios en un 25% durante las pruebas de usabilidad.',
    testType: 'Cuantitativo',
    measurementParameter: 'Tiempo de registro (en minutos y segundos).',
    experimentalMethod: 'Prueba de Cronometraje Comparativo: Medir el tiempo que toma registrar 5 productos y 5 movimientos de forma manual vs. usando el MVP.',
    acceptanceCriteria: 'La media de tiempo usando el MVP debe ser ≥ 25% menor que la media del método manual.',
  },
  {
    id: 2,
    objective: 'Validar la aceptación del MVP, logrando que un 80% de los usuarios finales manifiesten su intención de adoptarlo.',
    testType: 'Cuantitativo',
    measurementParameter: 'Tasa de Adopción Potencial (%).',
    experimentalMethod: 'Encuesta Post-Prueba (Escala Likert): Pregunta directa: "Del 1 (nunca lo usaría) al 5 (¡lo usaría para mi negocio!), ¿qué tan útil te parece la herramienta?".',
    acceptanceCriteria: '≥ 80% de los usuarios deben calificar la herramienta con un 4 o 5.',
  },
  {
    id: 3,
    objective: 'Validar que el MVP disminuye la percepción de estrés o frustración en un 25% en comparación con el método manual.',
    testType: 'Cualitativo',
    measurementParameter: 'Nivel de frustración percibido (escala 1-5).',
    experimentalMethod: 'Encuesta de Percepción Pre y Post-Tarea: Preguntar a los usuarios sobre su nivel de frustración con la gestión manual y luego preguntar sobre su experiencia con la app.',
    acceptanceCriteria: 'Lograr una reducción en la calificación promedio de frustración o que el ≥ 25% de los usuarios reporte una mejora significativa.',
  },
  {
    id: 4,
    objective: 'Validar que el MVP disminuye el desperdicio de alimentos en un 15% (Prueba de Campo).',
    testType: 'Cuantitativo',
    measurementParameter: 'Porcentaje (%) de reducción de desperdicio.',
    experimentalMethod: 'Análisis Comparativo de Registros (Caso Ideal): Comparar registros de compras, consumo y mermas antes y después de usar el MVP durante un período extendido (2-4 semanas).',
    acceptanceCriteria: 'La merma registrada debe ser ≥ 15% menor que en el período de referencia.',
  },
];
