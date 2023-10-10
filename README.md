# With Auth Expresso

A template for building expressjs and prisma applications with built-in authentication!

## Commands

- **watch:app**: `npm run watch:server` run the application server.

## Directories explained

- **app** is the main directory where all the code will live. It is also the directory that will live on the server.
  - **app/sever** is the server directory where express is developed.
  - **app/static** is the directory where all the compiled code from the folder **client** will be deployed. This folder won't be committed to git.
  - **app/media** is the directory where all the uploaded files will live. This directory won't be committed to git.

## Prisma and the APP Database

Just run `npx prisma migrate deploy` inside the **app/server** directory to init the database.
