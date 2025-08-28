export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Caselist Portal</h1>
      <p className="text-gray-700 mb-8">
        Connect with verified lawyers. Submit your case and get matched instantly.
      </p>
      <a
        href="/client/intake"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        Start Your Case
      </a>
    </div>
  );
}

