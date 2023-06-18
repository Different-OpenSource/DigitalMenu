"use client";
import { useState } from 'react';
import { Categories } from 'components/CategoriesMenu';
import items from '../../data';
import './globals.css';

const allCategories = ['Tudo', ...new Set(items.map(item => item.category))];

export default function App() {
  const [categories, setCategories] = useState(allCategories);
  const handleCategoryClick = (category: string) => {
  };

  return (
    <main>
      <section className="menu section">
        <Categories categories={categories} handleCategoryClick={handleCategoryClick}/>
      </section>
    </main>
  );
}