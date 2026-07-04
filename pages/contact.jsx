import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

        <p className="mb-4">
          Have questions, want more information about a property, or ready to schedule a showing?
          I’m here to help.
        </p>

        <div className="space-y-2">
          <p><strong>Name:</strong> Chris Baugh</p>
          <p><strong>Email:</strong> your-email@example.com</p>
          <p><strong>Phone:</strong> (555) 555‑5555</p>
          <p><strong>Brokerage:</strong> Your Brokerage Name</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
