const request = require('supertest')
const app = require('../index')
const { connect } = require('./database')
const userModel = require('../models/userModel')
const articleModel = require('../models/articleModel')
const articles = require('../fixtures/articles.json')
const users = require('../fixtures/users.json')


describe('authenticate a user', () => {
    let conn, token, _id;

    beforeAll(async () => {
        conn = await connect()
        
        await userModel.create(users[0])

        const response = await request(app).post('/api/login')
        .set('content-type', 'application/json')
        .send({email: users[0].email, password: users[0].password})

        token = response.body.token
    })

    // afterEach(async () => {
    //     await conn.cleanup()
    // })

    afterAll(async () => {
        await conn.disconnect()
    })

    it('logged in users should be able to create articles - POST request /api/blog/create-article', async () => {
        const response = await request(app).post('/api/blog/create-article')
        .set('Authorization', `Bearer ${token}`)
        .send(articles[0])
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("status")
        expect(response.body).toHaveProperty("message")
        expect(response.body).toHaveProperty("article")
        expect(response.body.status).toBe(true)
        expect(response.body.message).toBe("Article creation successful")
        _id = response.body.article._id
    })

    it('logged in users should be able to edit articles - PATCH request /api/blog/draft/id', async () => {
        const response = await request(app).patch(`/api/blog/draft/${_id}`)
        .set('content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({body: "Positioning can seem daunting at first for everyone new to css. In this article I'll explain the concept in the simplest way possible"})
        
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("status")
        expect(response.body).toHaveProperty("article")
        expect(response.body).toHaveProperty("message")
        expect(response.body.status).toBe(true)
        expect(response.body.message).toBe("Update successful")

    })

    // it('logged in users should be able to see all their drafts - GET request /api/blog/drafts', async () => {
    //     const response = await request(app).get(`/api/blog/drafts`)
    //     .set('content-type', 'application/json')
    //     .set('Authorization', `Bearer ${token}`)
        
    //     expect(response.status).toBe(200)
    //     expect(response.body).toHaveProperty("status")
    //     expect(response.body).toHaveProperty("articles")
    //     expect(response.body.status).toBe(true)
    // })

    // it('logged in users should be able to see all their published articles - GET request /api/blog/published', async () => {
    //     const response = await request(app).get(`/api/blog/published`)
    //     .set('content-type', 'application/json')
    //     .set('Authorization', `Bearer ${token}`)
        
    //     expect(response.status).toBe(200)
    //     expect(response.body).toHaveProperty("status")
    //     expect(response.body).toHaveProperty("articles")
    //     expect(response.body.status).toBe(true)
    // })


    // it('logged in users should be able to update draft to publish - PATCH request /api/blog/publish/id', async () => {
    //     const response = await request(app).patch(`/api/blog/publish/${_id}`)
    //     .set('content-type', 'application/json')
    //     .set('Authorization', `Bearer ${token}`)
        
    //     expect(response.status).toBe(200)
    //     expect(response.body).toHaveProperty("status")
    //     expect(response.body).toHaveProperty("article")
    //     expect(response.body.status).toBe(true)
    //     expect(response.body.article.state).state("published")
    // })

    // it('both logged and non-logged in users should be able to get all published articles - GET request /api/blog', async () => {
    //     // await articleModel.create(articleModel[0])
    //     // await articleModel.create(articleModel[1])

    //     const response = await request(app).get('/api/blog')
    //     .set('content-type', 'application/json')
        
    //     expect(response.status).toBe(200)
    //     // expect(response.body.length).toBe(2)
    // })

})