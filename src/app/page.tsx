"use client";
import React, { useState } from 'react';
import Categories from './components/Categories Menu/categories-menu';
import items from '../../data';
import './globals.css';

const allCategories = ['Tudo', ...new Set(items.map(item => item.category))];

function App() {
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category: string) => {
    // Função para filtrar os itens por categoria
    console.log('click', category);
  };

  return (
    <main>
      <section className="menu section">
        <Categories categories={categories} filterItems={filterItems} />
      </section>
    </main>
  );
}

export default App;