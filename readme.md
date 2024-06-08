# Space Exploration API

This project is a Space Exploration API built with Node.js, Express, and other supporting libraries. The API serves data on planets and space mission launches, providing endpoints to retrieve information and manage launches.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Planets](#planets)
  - [Launches](#launches)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/space-exploration-api.git
   cd space-exploration-api
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Load planet data:

   ```sh
   npm run load-planets
   ```

## Usage

1. Start the server:

   ```sh
   npm start
   ```

2. The server will be running on `http://localhost:8000`.

## API Endpoints

### Planets

- **GET /planets**
  - Description: Retrieve all habitable planets.
  - Response:
    ```json
    [
      {
        "kepler_name": "Kepler-442 b",
        "koi_prad": 1.34,
        "koi_srad": 0.79,
        "koi_steff": 4400,
        ...
      },
      ...
    ]
    ```

### Launches

- **GET /launches**

  - Description: Retrieve all launches.
  - Response:
    ```json
    [
      {
        "flightNumber": 100,
        "mission": "Kepler Exploration X",
        "rocket": "Explorer IS1",
        "launchDate": "2030-12-27T00:00:00.000Z",
        "target": "Kepler-442 b",
        "customers": ["ZTM", "NASA"],
        "upcoming": true,
        "success": true
      },
      ...
    ]
    ```

- **POST /launches**

  - Description: Add a new launch.
  - Request Body:
    ```json
    {
      "mission": "Moon Mission",
      "rocket": "Moon Explorer",
      "launchDate": "2025-12-01",
      "target": "Moon"
    }
    ```
  - Response:
    ```json
    {
      "flightNumber": 101,
      "mission": "Moon Mission",
      "rocket": "Moon Explorer",
      "launchDate": "2025-12-01T00:00:00.000Z",
      "target": "Moon",
      "customers": ["ZTM", "NASA"],
      "upcoming": true,
      "success": true
    }
    ```

- **DELETE /launches/:id**
  - Description: Abort a launch by ID.
  - Response:
    ```json
    {
      "flightNumber": 101,
      "mission": "Moon Mission",
      "rocket": "Moon Explorer",
      "launchDate": "2025-12-01T00:00:00.000Z",
      "target": "Moon",
      "customers": ["ZTM", "NASA"],
      "upcoming": false,
      "success": false
    }
    ```

## Project Structure

├── data
│ └── kepler_data.csv
├── public
│ └── index.html
├── routes
│ ├── planets
│ │ ├── planets.controller.js
│ │ └── planets.router.js
│ └── launches
│ ├── launches.controller.js
│ └── launches.router.js
├── models
│ ├── planets.model.js
│ └── launches.model.js
├── app.js
└── server.js

## Dependencies

- [express](https://www.npmjs.com/package/express)
- [morgan](https://www.npmjs.com/package/morgan)
- [cors](https://www.npmjs.com/package/cors)
- [csv-parse](https://www.npmjs.com/package/csv-parse)

## License

This project is licensed under the MIT License. See the LICENSE file for details.
