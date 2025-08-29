export default function HomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-pixel-blue">
        Welcome to Caselist
      </h1>
      <p className="text-lg text-gray-700">
        Find trusted lawyers, manage your cases, and connect securely.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong">
          <h2 className="text-xl font-semibold text-pixel-green">For Clients</h2>
          <p className="mt-2 text-gray-600">
            Submit your case, get matched with a lawyer, and manage everything
            in one place.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong">
          <h2 className="text-xl font-semibold text-pixel-blue">For Lawyers</h2>
          <p className="mt-2 text-gray-600">
            Showcase your expertise, accept new clients, and build your
            reputation.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong">
          <h2 className="text-xl font-semibold text-pixel-yellow">
            Secure & Easy
          </h2>
          <p className="mt-2 text-gray-600">
            All communications, payments, and documents are handled safely in
            the portal.
          </p>
        </div>
      </div>
    </div>
  );
}
