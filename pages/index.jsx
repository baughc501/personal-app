import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        {/* Headshot */}
        <img
          src="/images/closeup.jpg"
          alt="Chris Baugh"
          className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
        />

        {/* Name + REALTOR® + Brokerage */}
        <div className="flex flex-col items-center mb-6">
          <p className="text-xl font-semibold text-gray-800">Chris Baugh, REALTOR®</p>
          <p className="text-sm text-gray-600 mt-1">Crye‑Leike Realtors®</p>

          {/* Brokerage Logo */}
          <img
            src="/images/logo.jpeg"
            alt="Crye-Leike Realtors"
            className="h-10 mt-3 opacity-90"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Next Home
        </h1>

        <p className="text-lg text-gray-700 max-w-xl mb-8">
          Welcome to my real estate site. Browse listings, check daily mortgage
          rates, and sign up for my newsletter.
        </p>

        <a
          href="/listings"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
        >
          View Listings
        </a>

        {/* Newsletter */}
        <form
          action="#"
          onSubmit={async (e) => {
            e.preventDefault();
            const email = e.target.email.value;

            await fetch("/api/newsletter", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            });

            alert("Thanks for signing up!");
          }}
          className="mt-10 w-full max-w-sm"
        >
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="border border-gray-300 p-3 w-full rounded-md mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
