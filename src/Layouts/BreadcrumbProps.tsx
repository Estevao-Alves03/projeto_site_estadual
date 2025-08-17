// components/Breadcrumb.tsx
import { Link } from "react-router-dom";

type BreadcrumbProps = {
  category?: string;
  title?: string;
};

function Breadcrumb({ category, title }: BreadcrumbProps) {
  return (
    <div className="text-sm breadcrumbs px-4 py-2 bg-gray-50 rounded-lg max-w-4xl mx-auto">
      <ul>
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Início
          </Link>
        </li>
        
        {category && (
          <li>
            <Link 
              to={`/${category.toLowerCase()}`} 
              className="text-blue-600 hover:text-blue-800"
            >
              {category}
            </Link>
          </li>
        )}
        
        {title && (
          <li>
            <span className="text-gray-600 font-medium">{title}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Breadcrumb;