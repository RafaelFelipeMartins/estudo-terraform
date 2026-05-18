import express from 'express'
import { Pool } from 'pg'

export default function creatApp() {
    const app = express();

    const pool = new Pool({
        host: 'localhost', 
        port: Number(5432),
        user: 'postgres',
        password: 'postgres',
        database: 'app_db', 

    });
    
    app.get('/health', (req, res) => {
        res.json({
            status: 'ok',
            service: 'study-api',
        })
    })

    app.get('/db-health', async (req, res) => {
        try {
            const result = await pool.query('SELECT NOW() as now');

            res.json({
                status: 'ok',
                database: 'connected',
                now: result.rows[0].now
            })
        } catch (error) {
            res.status(500).json({
                status: 'ok',
                database: 'connected',
                message: error instanceof Error ? error.message : 'Unknow error',
            })
        }
    });

    return app
}