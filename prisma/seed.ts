import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.task.createMany({
    data: [
      { title: 'Task 1', status: 'TODO' },
      { title: 'Task 2', status: 'IN_PROGRESS' }
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