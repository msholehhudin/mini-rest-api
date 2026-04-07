import { Router } from 'express'
import { TaskController } from '../controllers/task.controller'

const router = Router()
const controller = new TaskController()

router.post('/tasks', controller.create)
router.get('/tasks', controller.getAll)
router.get('/tasks/:id', controller.getById)
router.put('/tasks/:id', controller.update)
router.delete('/tasks/:id', controller.delete)

export default router