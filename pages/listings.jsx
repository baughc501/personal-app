import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListingCard from "../components/ListingCard";

export default function Listings() {
  const listings = [
    {
      address: "123 Main St, Greenbrier, AR",
      price: "$289,000",
      image: "/images/house1.jpg",
      description: "3 bed • 2 bath • 1,850 sqft"
    },
    {
      address: "45 Oak Ridge Dr, Conway, AR",
      price: "$349,000",
      image: "/images/house2.jpg",
      description: "4 bed • 3 bath • 2,400 sqft"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {listings.map((l, i) => (
          <ListingCard key={i} listing={l} />
        ))}
      </div>

      <Footer />
    </>
  );
}
