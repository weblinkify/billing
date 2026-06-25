import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">InvoiceFlow</h1>

      <nav className="space-y-4">
        <Link to="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>
        <Link to="/create" className="block hover:text-blue-400">
          Create Invoice
        </Link>
        <Link to="/invoices" className="block hover:text-blue-400">
          Invoices
        </Link>
        <Link to="/analytics" className="block hover:text-blue-400">
          Analytics
        </Link>
      </nav>
    </aside>
  );
}
