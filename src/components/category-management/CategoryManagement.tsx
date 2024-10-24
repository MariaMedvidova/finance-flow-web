import React, { useState } from "react";
import {
  Container,
  CategoryList,
  CategoryItem,
  CategoryInput,
  NewCategoryInput,
  ActionButton,
  AddButton,
} from "./CategoryManagement.styles";
import { Category } from "../../utils/types";

type CategoryManagementProps = {
  categories: Category[];
  onAddCategory: (category: Category) => void;
  onEditCategory: (oldCategory: Category, newCategory: Category) => void;
  onDeleteCategory: (category: Category) => void;
};

export const CategoryManagement: React.FC<CategoryManagementProps> = ({
  categories,
  onAddCategory,
  onEditCategory,
  onDeleteCategory,
}) => {
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editedCategoryName, setEditedCategoryName] = useState<string>("");

  const handleAddCategory = () => {
    if (newCategoryName.trim() !== "") {
      const newCategory: Category = {
        id: (Math.random() * 1000).toString(), // Generate a simple unique id
        name: newCategoryName,
      };
      onAddCategory(newCategory);
      setNewCategoryName("");
    }
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setEditedCategoryName(category.name);
  };

  const handleUpdateCategory = () => {
    if (editingCategory && editedCategoryName.trim() !== "") {
      const updatedCategory: Category = {
        ...editingCategory,
        name: editedCategoryName,
      };
      onEditCategory(editingCategory, updatedCategory);
      setEditingCategory(null);
      setEditedCategoryName("");
    }
  };

  const handleDeleteCategory = (category: Category) => {
    onDeleteCategory(category);
  };

  return (
    <Container>
      <h2>Manage Categories</h2>
      <NewCategoryInput
        value={newCategoryName}
        onChange={(e) => setNewCategoryName(e.target.value)}
        placeholder="New category name"
      />
      <AddButton onClick={handleAddCategory}>Add Category</AddButton>
      
      <CategoryList>
        {categories.map((category) => (
          <CategoryItem key={category.id}>
            {editingCategory?.id === category.id ? (
              <>
                <CategoryInput
                  value={editedCategoryName}
                  onChange={(e) => setEditedCategoryName(e.target.value)}
                />
                <ActionButton onClick={handleUpdateCategory}>Save</ActionButton>
              </>
            ) : (
              <>
                <span>{category.name}</span>
                <div>
                  <ActionButton onClick={() => handleEditCategory(category)}>Edit</ActionButton>
                  <ActionButton onClick={() => handleDeleteCategory(category)}>Delete</ActionButton>
                </div>
              </>
            )}
          </CategoryItem>
        ))}
      </CategoryList>
    </Container>
  );
};
