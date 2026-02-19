import 'dotenv/config';
import express from 'express';
import { validateEmail } from './emailValidator.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Email validation endpoint
app.post('/validate-email', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            valid: false,
            error: 'Email is required'
        });
    }

    const result = await validateEmail(email);

    res.json({
        email,
        valid: result.valid,
        details: result
    });
});

// GET endpoint for simple validation
app.get('/validate-email', async (req, res) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({
            valid: false,
            error: 'Email parameter is required'
        });
    }

    const result = await validateEmail(email);

    res.json({
        email,
        valid: result.valid,
        details: result
    });
});

app.listen(PORT, () => {
    console.log(`Email validator server running on port ${PORT}`);
});