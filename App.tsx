
import React from 'react';
import { VALIDATION_DATA } from './constants';
import { ValidationObjective } from './types';

const App: React.FC = () => {
  return (
    <main className="bg-slate-50 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 text-center mb-8">
          Tabla de Objetivos de Validación (SMART)
        </h1>
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg border border-slate-200">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-700 uppercase bg-slate-100">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold w-1/4">
                  Objetivo a Validar (SMART)
                </th>
                <th scope="col" className="px-6 py-4 font-semibold w-[12%]">
                  Tipo de Ensayo
                </th>
                <th scope="col" className="px-6 py-4 font-semibold w-[15%]">
                  Parámetro de Medición
                </th>
                <th scope="col" className="px-6 py-4 font-semibold w-1/4">
                  Método Experimental
                </th>
                <th scope="col" className="px-6 py-4 font-semibold w-[15%]">
                  Criterio de Aceptabilidad
                </th>
                <th scope="col" className="px-6 py-4 font-semibold w-[12%]">
                  Resultado
                </th>
              </tr>
            </thead>
            <tbody>
              {VALIDATION_DATA.map((item: ValidationObjective) => (
                <tr key={item.id} className="bg-white border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors duration-200">
                  <td className="px-6 py-4 align-top">
                    <span className="font-semibold text-slate-800">{item.id}.</span> {item.objective}
                  </td>
                  <td className="px-6 py-4 align-top">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        item.testType === 'Cuantitativo'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {item.testType}
                    </span>
                  </td>
                  <td className="px-6 py-4 align-top font-medium text-slate-800">
                    {item.measurementParameter}
                  </td>
                  <td className="px-6 py-4 align-top">
                    {item.experimentalMethod}
                  </td>
                  <td className="px-6 py-4 align-top font-semibold text-slate-800">
                    {item.acceptanceCriteria}
                  </td>
                   <td className="px-6 py-4 align-top font-bold">
                    <div
                      className={`${
                        item.result.status === 'CUMPLIDO'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {item.result.status}
                      <p className="font-normal text-slate-500 text-xs mt-1">{item.result.value}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default App;
