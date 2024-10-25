import React, { useState } from "react";
import {
  FormContainer,
  CategoryList,
  CategoryItem,
  CategoryInput,
  ActionButton,
  InputWithIcon,
} from "./CategoryManagement.styles";
import { Category } from "../../utils/types";
import { FaTags } from "react-icons/fa";

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
        id: (Math.random() * 1000).toString(),
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

  return (
    <FormContainer>
      <InputWithIcon>
        <FaTags />
        <CategoryInput
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="New category name"
        />
      </InputWithIcon>
      <ActionButton onClick={handleAddCategory}>Add Category</ActionButton>

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
                  <ActionButton onClick={() => handleEditCategory(category)}>
                    Edit
                  </ActionButton>
                  <ActionButton onClick={() => onDeleteCategory(category)}>
                    Delete
                  </ActionButton>
                </div>
              </>
            )}
          </CategoryItem>
        ))}
      </CategoryList>
    </FormContainer>
  );
};