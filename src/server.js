const express = require('express');
const { Pool } = require('pg');

const app = express();

const PORT = 3000;

const pool = new Pool({
    host: 'localhost',
    port: Number(5432),
    user: 'postgres',
    password: 'postgres',
    database: 'app_db',
})

app.get('/health', async(req, res) => {
    res.json({
        status: 'ok',
        service: 'study-api',
    });
});

app.get('db-health', async(req, res) => {
    try {
    const result = await pool.query("SELECT NOW() as now")

    res.json({
        status: 'ok',
        service: 'connected',
        now: result.rows[0].now
    })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            database: 'disconnected',
            message: error.message, 
        });
    }
});

app.listen(PORT, () => {
    console.log(`API running on port http://localhost:${PORT}/health`)
})