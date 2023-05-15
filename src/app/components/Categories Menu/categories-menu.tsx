import React, { useState, FC } from 'react';
import './categories-menu.css';
interface Props {
  categories: string[];
  filterItems: (category: string) => void;
}
// Create an component named Categories with props categories and filterItems
export const Categories: FC<Props> = ({ categories, filterItems }) => {
  let [currentCategory, setCurrentCategory] = useState<number>(0);

  const handleCategoryClick = (categoryIndex: number, category: string) => {
    filterItems(category);
    setCurrentCategory(categoryIndex);
  };

  return (
    <div className="btn-container">
      {categories.map((category: string, index: number) => {
        return (
          <button
            type="button"
            className={`filter-btn ${index === currentCategory ? 'active' : ''}`}
            key={index}
            onClick={() => handleCategoryClick(index, category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};