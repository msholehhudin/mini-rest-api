import { Request, Response } from 'express'
import { TaskService } from '../services/task.service'
import { createTaskSchema, updateTaskSchema } from '../validators/task.validator'
import { Status } from '@prisma/client'

const service = new TaskService()

export class TaskController {
  async create(req: Request, res: Response) {
    try {
      const data = createTaskSchema.parse(req.body)

      const task = await service.createTask(data)

      res.status(201).json(task)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const status = req.query.status as Status | undefined

      const tasks = await service.getAllTasks(status)

      res.json(tasks)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const task = await service.getTaskById(req.params.id as string)

      res.json(task)
    } catch (error: any) {
      res.status(404).json({ message: error.message })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = updateTaskSchema.parse(req.body)

      const task = await service.updateTask(req.params.id as string, data)

      res.json(task)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await service.deleteTask(req.params.id as string)

      res.status(204).send()
    } catch (error: any) {
      res.status(404).json({ message: error.message })
    }
  }
}