const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key';

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/orders', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const OrderSchema = new mongoose.Schema({
    items: String,
    name: String,
    contactNumber: String,
    address: String,
    landmark: String,
    deliveryTime: String,
    instructions: String,
    paymentMethod: String,
    contactMethod: String,
    feedback: String,
});

const User = mongoose.model('User', UserSchema);
const Order = mongoose.model('Order', OrderSchema);

// Register
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.json({ message: 'User registered successfully' });
});

// Login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    res.json({ token });
});

// Create Order
app.post('/api/orders', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.json({ message: 'Order submitted successfully' });
});

// Get Orders
app.get('/api/orders', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


