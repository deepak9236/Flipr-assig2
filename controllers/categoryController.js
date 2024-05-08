// controllers/categories.js

import Category from '../models/ExpenseCategory.js';

// Add a new category
export const addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = new Category({
      name,
      user: req.user.id
    });

    await newCategory.save();
    res.json(newCategory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Retrieve categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ user: req.user.id });
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a category
export const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    await Category.findByIdAndDelete(categoryId);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
