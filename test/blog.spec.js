const request = require('supertest')
const app = require('../index')
const { connect } = require('./database')
const userModel = require('../models/userModel')
const articleModel = require('../models/articleModel')
const users = require('../fixtures/users.json')

describe('authenticate a user', () => {
    let conn, token;

    beforeAll(async () => {
        conn = await connect()
        
        await userModel.create(users[0])

        const response = await request(app).post('/api/login')
        .set('content-type', 'application/json')
        .send({email: users[0].email, password: users[0].password})

        token = response.body.token
    })

    afterEach(async () => {
        await conn.cleanup()
    })

    it('logged in users should be able to create articles - POST request /api/blog/create-article', async () => {
        const response = await request(app).post('/api/blog/create-aritlce')
        .set('Authorization', `Bearer ${token}`)
        
        expect(response.status).toBe(201)
        expect(response.body.length).toBe(1)
    })

    it('both logged and non-logged in users should be able to get all published articles - GET request /api/blog', async () => {
        await articleModel.create(articleModel[0])
        await articleModel.create(articleModel[1])

        const response = await request(app).get('/api/blog')
        .set('content-type', 'application/json')
        
        expect(response.status).toBe(200)
        expect(response.body.length).toBe(2)
    })

})