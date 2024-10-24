import { useState, useEffect } from "react";
import { Category } from "../utils/types";

// Hook for working with categories
export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>(() => {
    const storedCategories = localStorage.getItem("categories");
    return storedCategories
      ? JSON.parse(storedCategories)
      : [
          { id: "1", name: "Groceries" },
          { id: "2", name: "Rent" },
          { id: "3", name: "Entertainment" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const addCategory = (newCategory: Category) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  const editCategory = (oldCategory: Category, newCategory: Category) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === oldCategory.id ? newCategory : category
      )
    );
  };

  const deleteCategory = (categoryToDelete: Category) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== categoryToDelete.id)
    );
  };

  return {
    categories,
    addCategory,
    editCategory,
    deleteCategory,
  };
};
