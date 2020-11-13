import { Link } from "react-router-dom";

function FloatingAddButton() {
  return (
    <Link
      to="/add"
      className="flex  items-center justify-center absolute top-3 right-3"
    >
      <span className="bg-brand-blue-dark rounded-full text-white text-2xl px-6 py-4 leading-none">Add New</span>
    </Link>
  );
}

export default FloatingAddButton;
