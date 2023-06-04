import { useState, FC } from 'react';
import styles from './styles.module.css';
interface CategoriesMenuProps {
  categories: string[];
  handleCategoryClick: (category: string) => void;
}

export const Categories: FC<CategoriesMenuProps> = ({ categories, handleCategoryClick }) => {
  let [currentCategory, setCurrentCategory] = useState<number>(0);

  return (
    <div className={styles.btnContainer}>
      {categories.map((category: string, index: number) => {
        return (
          <button
            type="button"
            className={`${styles.filterBtn} ${index === currentCategory ? 'active' : ''}`}
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