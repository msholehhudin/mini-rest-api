import request from 'supertest'
import app from '../app'

describe('Task API', () => {
  let taskId: string

  it('should create a task', async () => {
    const res = await request(app).post('/api/tasks').send({
      title: 'Test Task',
      description: 'Testing create',
    })

    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty('id')

    taskId = res.body.id
  })

  it('should get task by id', async () => {
    const res = await request(app).get(`/api/tasks/${taskId}`)

    expect(res.statusCode).toBe(200)
    expect(res.body.id).toBe(taskId)
  })

  it('should return 404 for non-existing task', async () => {
    const res = await request(app).get('/api/tasks/non-existent-id')

    expect(res.statusCode).toBe(404)
  })
})