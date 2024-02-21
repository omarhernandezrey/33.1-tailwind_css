import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-amber-100 h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Hola clase</h1>
      <p>Actividad en clase con Tailwind CSS</p>
      <div className="mt-4">
        <button className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.open('https://tailwindcss.com/', '_blank')}>Botón</button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="overflow-x-auto w-full max-w-3xl p-8 bg-white rounded shadow-md mt-4">
          <table className="table-auto border-collapse border border-gray-800 w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border border-white px-4 py-2">Nombre</th>
                <th className="border border-white px-4 py-2">País</th>
                <th className="border border-white px-4 py-2">Reseña</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-200">
                <td className="border border-white px-4 py-2">Brais Moure</td>
                <td className="border border-white px-4 py-2">España</td>
                <td className="border border-white px-4 py-2">Ingeniero de Software en MoureDev</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-white px-4 py-2">Miguel Ángel Durán García - midudev</td>
                <td className="border border-white px-4 py-2">España</td>
                <td className="border border-white px-4 py-2">Ingeniero de Software en Consultoría de TI y Consultoría empresarial</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border border-white px-4 py-2">Víctor Robles WEB</td>
                <td className="border border-white px-4 py-2">España</td>
                <td className="border border-white px-4 py-2">Desarrollador web en youtubeempresa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
