import { useState, FC } from 'react';
import './style.module.css';
interface CategoriesMenuProps {
  categories: string[];
  handleCategoryClick: (category: string) => void;
}

export const Categories: FC<CategoriesMenuProps> = ({ categories, handleCategoryClick }) => {
  let [currentCategory, setCurrentCategory] = useState<number>(0);

  return (
    <div className="btn-container">
      {categories.map((category: string, index: number) => {
        return (
          <button
            type="button"
            className={`filter-btn ${index === currentCategory ? 'active' : ''}`}
            key={index}
            onClick={() => {
              handleCategoryClick(category)
              setCurrentCategory(index)
            }
          }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};