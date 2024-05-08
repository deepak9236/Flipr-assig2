import Expense from '../models/Expense.js';

// Add a new expense
export const addExpense = async (req, res) => {
  const { title, date, amount, category } = req.body;
  try {
    const newExpense = new Expense({
      title,
      date,
      amount,
      category,
      user: req.user.id
    });
    console.log(newExpense);

    await newExpense.save();
    res.json({ message: 'Expense added successfully', expense: newExpense });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Retrieve expenses
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).populate('category');
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Group expenses by category
export const getGroupedExpenses = async (req, res) => {
  try {
    const groupedExpenses = await Expense.aggregate([
      { $match: { user: req.user.id } },
      { $group: { _id: '$category', expenses: { $push: '$$ROOT' } } }
    ]);

    res.json(groupedExpenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Retrieve monthly expenses for a category
export const getMonthlyExpenses = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const monthlyExpenses = await Expense.aggregate([
      { $match: { user: req.user.id, category: categoryId } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
          totalAmount: { $sum: '$amount' }
        }
      }
    ]);

    res.json(monthlyExpenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};