import { PrismaClient, Status } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  await prisma.task.deleteMany()

  await prisma.task.createMany({
    data: [
      { title: 'Learn Prisma', description: 'Understand CRM Basic', status: Status.TODO },
      { title: 'Build API', description: 'Create REST endpoints', status: Status.IN_PROGRESS }
    ]
  })
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })