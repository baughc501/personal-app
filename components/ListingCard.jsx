export default function ListingCard({ listing }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <img src={listing.image} className="rounded-md mb-3" />
      <h3 className="text-lg font-bold">{listing.address}</h3>
      <p>{listing.price}</p>
      <p className="text-sm text-gray-600">{listing.description}</p>
    </div>
  );
}
