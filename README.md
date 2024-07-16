# client-management-system
## Preview

IMAGES TO BE UPLOADED

## Requirements
### MVP
* Build a **full-stack** application to create and list clients.
* Basic client information - includes client name, date of birth, main/secondary languages as well as primary “funding source”(NDIS, HCP, CHSP, DVA, HACC).
* Use **React.js** and **TypeScript** for the  front end.
* Use **Node.js** and **Express.js** to create a **REST API** with basic **CRUD endpoints** to create and manage clients.
* Use an **SQL** based database (using a container instance).
### Tech Stack
* **React.js** - For building the UI components.
* **TypesScript** - To enhance code quality and static typing.
* **SCSS** - For modular and maintainable styling.
* **Express.js** - For creating **REST API** and web server using **Node.js**.
* **MySQL** - For storing and managing application data.
* **Docker** - For containerisation to ensure consistent deployment across different environments and simplify the setup of the MySQL database instance.

## Features
### Multi-step Wizard
* The form to add a new user has 3 steps:
  * **Step 1:** Add client name and date of birth.
  * **Step 2:** Add main and secondary languages.
  * **Step 3:** Add primary funding source (NDIS, HCP, CHSP, DVA, HACC).
* The `previous` button is **disabled** on the first step.
* The `next` button changes to "Add user" on the last step.
  
IMAGES TO BE UPLOADED

### Forms
* Users **cannot** change steps without completing the required inputs **(form validation)**.
* Users can refresh the page, return to previous steps, or navigate to different pages **without** losing form values until the form is submitted.
  
IMAGES TO BE UPLOADED

## Cloning and Running the Application in local machine
1. Clone repository
```bash
git clone https://github.com/yourusername/yourrepository.git cd yourrepository
```
2. The application has two main folders: **client** and **server**.
### Client
* Navigate to the client folder:
```bash
cd client
```
* Update the API configuration in services/api.ts:
```jsx
const api = axios.create({
  baseURL: "http://localhost:3000/users",
});
```
Change "http://localhost:3000/users" to your actual backend server URL if different.

* Run the following command to start the frontend:
```bash
npm run dev
```
### Server
* Navigate to the server folder:
```bash
cd ../server
```
* Update the environment variables as needed in the **.env** file
* To start the backend server, run:
```bash
npm run dev
```
* To start the MySQL database using Docker, run:
```bash
docker-compose up
```
### Docker Compose Configuration
In the server folder, your docker-compose.yml file should look like this:
```yaml
services:
  db:
    image: mysql:8
    container_name: mysql_container
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ADDON_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_ADDON_DB}
      # Commented out if only using root credentials on your local machine
      # MYSQL_USER: ${MYSQL_ADDON_USER}
      # MYSQL_PASSWORD: ${MYSQL_ADDON_PASSWORD}
    ports:
      - "3306:3306"
    volumes:
      - ./db:/docker-entrypoint-initdb.d
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

* Note: The **MYSQL_USER** and **MYSQL_PASSWORD** lines are commented out if you are only using root credentials on your local machine. You can uncomment these lines and provide appropriate values if needed.

## Approach
### Client
* Used **React Context** for managing form data across components.
* Utilised **React Router** for navigating between pages.
* Separated **API services** from UI components.
* Employed the **languages-list** package for accessing language data in form inputs. [More information](https://www.npmjs.com/package/languages-list)
* Separated the code structure into containers and reusable components.
* Applied **SCSS** for styling with variables for consistency and maintainability.
### Server
* Used **MySQL** as database
* Employed **Sequelize**, an **ORM**, for managing the database. [More information](https://sequelize.org/) 
  
## Challenges
* **Data Persistence in Forms:** Ensuring that form data remains intact when refreshing the page, navigating between steps, or switching pages.
  *  **Solution:** Utilised the `localStorage` property to retain form data until submission.
  *  [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 
 