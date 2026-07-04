export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold">Chris Baugh Real Estate</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/listings" className="hover:text-blue-600">Listings</a>
        <a href="/contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}
