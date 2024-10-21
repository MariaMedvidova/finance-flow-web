import React, { useState } from 'react';
import {
    Container,
    CategoryList,
    CategoryItem,
    CategoryInput,
    NewCategoryInput,
    ActionButton,
    AddButton,
  } from './CategoryManagement.styles';

interface CategoryManagementProps {
  categories: string[];
  onAddCategory: (newCategory: string) => void;
  onEditCategory: (oldCategory: string, newCategory: string) => void;
  onDeleteCategory: (categoryToDelete: string) => void;
}

const CategoryManagement: React.FC<CategoryManagementProps> = ({
  categories,
  onAddCategory,
  onEditCategory,
  onDeleteCategory,
}) => {
  const [newCategory, setNewCategory] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      onAddCategory(newCategory);
      setNewCategory('');
    }
  };

  const handleEditCategory = (oldCategory: string) => {
    if (editCategory.trim()) {
      onEditCategory(oldCategory, editCategory);
      setEditCategory('');
      setIsEditing(null);
    }
  };

  const handleDeleteCategory = (category: string) => {
    onDeleteCategory(category);
  };

  return (
    <Container>
      <h2>Manage Categories</h2>
      <CategoryList>
        {categories.map((category) => (
          <CategoryItem key={category}>
            {isEditing === category ? (
              <>
                <CategoryInput
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                  placeholder="Edit category name"
                />
                <ActionButton onClick={() => handleEditCategory(category)}>
                  Save
                </ActionButton>
                <ActionButton onClick={() => setIsEditing(null)}>
                  Cancel
                </ActionButton>
              </>
            ) : (
              <>
                <span>{category}</span>
                <ActionButton onClick={() => setIsEditing(category)}>
                  Edit
                </ActionButton>
                <ActionButton onClick={() => handleDeleteCategory(category)}>
                  Delete
                </ActionButton>
              </>
            )}
          </CategoryItem>
        ))}
      </CategoryList>
      <NewCategoryInput
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="New category name"
      />
      <AddButton onClick={handleAddCategory}>Add Category</AddButton>
    </Container>
  );
};

export default CategoryManagement;