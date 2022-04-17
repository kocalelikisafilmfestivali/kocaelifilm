const movies = [
  {
    no: "Lindsay Walton",
    title: "Front-end Developer",
    country: "lindsay.walton@example.com",
    director: "Member",
  },
];

export default function Program() {
  return (
    <div className="py-10 bg-white sm:py-20 box">
      <div className="text-left">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Dereceye Giren Filmler
        </h2>
        <p className="mt-4 text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          possimus.
        </p>
      </div>
      <div className="mt-10">
        <div className="overflow-hidden border border-gray-300 rounded-md">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Filmin Adı
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Ülke
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Yönetmen
                </th>
              </tr>
            </thead>
            <tbody className="text-left bg-white divide-y divide-gray-200">
              {movies.map((movie, i) => (
                <tr key={i}>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                    {movie.no}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {movie.title}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {movie.country}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {movie.director}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 text-left">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Finalist Filmler
        </h2>
        <p className="mt-4 text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          possimus.
        </p>
      </div>
      <div className="mt-10">
        <div className="overflow-hidden border border-gray-300 rounded-md">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Filmin Adı
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Ülke
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Yönetmen
                </th>
              </tr>
            </thead>
            <tbody className="text-left bg-white divide-y divide-gray-200">
              {movies.map((movie, i) => (
                <tr key={i}>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                    {movie.no}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {movie.title}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {movie.country}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {movie.director}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}