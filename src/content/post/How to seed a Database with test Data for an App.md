---
Here's a revised draft with actual content:

Title: How to Seed a Database with Test Data for an App
Publish Date: 2024-02-04
Description: Manually inserting over 100 samples into a database isn't the programmer's way. Here's how to seed test data programmatically.

Tags: ['test', 'database', 'prisma', 'faker.js']
---

I was working on a personal project recently when i decided to test it out with real data but i realized that i couldn't manually enter data for over a 100 samples by hand, thats just not the Programer/SWE way to do things, its also time-consuming and error-prone. So i set out to find a better way to do it and it sent me on a journey.
This is where database seeding comes in—a technique to populate your database with test data programmatically. Here's how you can seed a database efficiently, focusing on tools like faker.js and Prisma.

## <a name="Headings"></a>Preparing the data with faker.js

[Faker.js](https://fakerjs.dev/) is a powerful library for generating fake data such as names, emails, addresses, and even lorem ipsum text. It's especially useful for creating large datasets quickly.

#### Installing Faker.js

To get started, you need to install faker.js in your project:

```bash
npm install @faker-js/faker
```

Generating Sample Data
Here's a simple example of how to generate fake user data:

```javascript
const { faker } = require('@faker-js/faker')

function generateUsers(count) {
	const users = []
	for (let i = 0; i < count; i++) {
		users.push({
			name: faker.name.fullName(),
			email: faker.internet.email(),
			address: faker.address.streetAddress()
		})
	}
	return users
}

console.log(generateUsers(10)) // Generates 10 users
```

## Explaining how prisma seeding works

Prisma is an ORM (Object-Relational Mapping) tool that simplifies database interactions. Seeding in Prisma involves running a script that inserts data into your database.

Setting Up Prisma

1. Install Prisma in your project:

```bash
Copy code
npm install prisma --save-dev
npx prisma init
```

2. Define your database schema in prisma/schema.prisma:

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
  address String
}
```

Run the migration to apply the schema to your database:

## Preparing the Prisma Seed Script

Now, let’s create a seed script that generates test data using faker.js and inserts it into the database.

1. Create a prisma/seed.js file:

```javascript
const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker')
const prisma = new PrismaClient()

async function main() {
	const users = Array.from({ length: 100 }).map(() => ({
		name: faker.name.fullName(),
		email: faker.internet.email(),
		address: faker.address.streetAddress()
	}))

	await prisma.user.createMany({ data: users })
	console.log('Seeded 100 users')
}

main()
	.catch((e) => console.error(e))
	.finally(async () => {
		await prisma.$disconnect()
	})
```

2. Update your package.json to include the seed script:

```json
"prisma": {
  "seed": "node prisma/seed.js"
}
```

3. Run the seed script:

```bash

npx prisma db seed
```

Congratulations! Your database is now populated with 100 sample users.

## Other methods to add data

While faker.js and Prisma are highly efficient, here are alternative methods to consider:

### CSV Imports

Export data from a spreadsheet as a CSV file.
Use a library like csv-parser to read the data and insert it into your database.
Custom Scripts
If you have specific data requirements, write custom scripts to create unique records tailored to your application.

### Third-Party Tools

Tools like Mockaroo allow you to generate custom datasets in formats like JSON, CSV, and SQL.

## Conclusion

Seeding your database with test data doesn’t have to be tedious. By leveraging tools like faker.js and Prisma, you can create large datasets programmatically and focus on building and testing your app. Whether you're populating a small local database or preparing data for production testing, these techniques will save you time and effort.
