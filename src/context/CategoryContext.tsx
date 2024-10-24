import React, { createContext, useContext } from "react";
import { useCategories } from "../hooks/useCategories";
import { Category } from "../utils/types";

// This context provides a global state for categories, allowing components to
// access and modify the list of categories without passing props down through many layers.


type CategoryContextType = {
  categories: Category[];
  addCategory: (category: Category) => void;
  editCategory: (oldCategory: Category, newCategory: Category) => void;
  deleteCategory: (category: Category) => void;
};

// This context manages categories and synchronizes them with localStorage
const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
};

export const CategoryProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const { categories, addCategory, editCategory, deleteCategory } = useCategories();

  return (
    <CategoryContext.Provider
      value={{ categories, addCategory, editCategory, deleteCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
