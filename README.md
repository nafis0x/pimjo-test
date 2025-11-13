# Pimjo Test Project

This project is a web application built with Next.js, featuring user authentication, a dashboard, and a landing page.

## Setup and Run

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

## Approach and Structure

This project is a full-stack application built using the Next.js App Router.

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: Custom authentication logic handling user sign-up and login.

The project follows a feature-based structure:

- `app/`: Contains the different routes of the application, organized into route groups: `(auth)`, `(dashboard)`, and `(landing)`.
- `components/`: React components are organized by feature (`auth`, `dashboard`, `home`) or common usage (`common`).
- `lib/`: Utility functions, database connection (`db.js`), and API helpers.
- `prisma/`: Contains the database schema.

## Assumptions and Known Issues

- It is assumed that a PostgreSQL database is being used, as configured in the `.env` file (which is not present in this repository for security reasons). You will need to create your own `.env` file based on `.env.example`.
- Due to some time short some component can't be compeleted, I was diagonised with UTI, and for that I could not finsh the project on time. but all the feature is working fine.

## Deployed Live Version

You can view the live application here: [Live Demo](https://pimjo-test.vercel.app/)
