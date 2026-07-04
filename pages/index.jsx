import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">Find Your Next Home</h1>
        <p className="mb-6">
          Welcome to my real estate site. Browse listings, check daily mortgage rates,
          and sign up for my newsletter.
        </p>

        <a
          href="/listings"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          View Listings
        </a>
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                const email = e.target.email.value;

                await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
                });

                alert("Thanks for signing up!");
            }}
            >
            <input
                name="email"
                type="email"
                placeholder="Your email"
                className="border p-2 w-full mb-4 rounded-md"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign Up
            </button>
        </form>

      </div>

      <Footer />
    </>
  );
}

