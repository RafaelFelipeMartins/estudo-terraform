import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { creatApp } from '../app.js';
describe('health check', () => {
    it('should return API health status', async () => {
        const app = creatApp();
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: 'ok',
            service: 'study-api',
        });
    });
});
