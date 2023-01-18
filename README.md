# E-commerce movies
This is a responsive and functional e-commerce movies demo created with ReactJS and ExpressJS that showcases the Blockonomics Checkout API. Highlights:

- Integrated Blockonomics API and Bitcoin checkout functionality.
- Included the ability to add and remove movies from the cart. 
- Implemented heads up display for cart quantity.
- Incorporated sort and filter functionality for movies (i.e. highest-lowest price & ★rating).
- Integrated real-time tax and cost calculation on cart page.

## Built With

- ReactJS(+hooks)
- ExpressJS
- [Blockonomics API](https://www.blockonomics.co/)
- JavaScript
- HTML
- CSS
- NPM
- Git

## Project view
![Screen](https://www.dellanoblake.com/assets/ecommerce%20mockup.png)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- A web browser (e.g. Mozilla Firefox, Google Chrome etc.)
- git: This is a version control system used for source code management.
- A text editor (e.g Visual Studio Code (recommended), Sublime Text, Atom etc.)

### Setup

- With git, clone the code to your machine, or download a ZIP of all the files directly.
- [Download the ZIP file from this location](https://github.com/BlakeUSD/blockonomics-payment/archive/refs/heads/master.zip) or run the following git command to clone the files to your machine:

```
git clone https://github.com/BlakeUSD/blockonomics-payment.git
```

- Once the files are on your machine, open the **blockonomics-checkout** folder in [Visual Studio Code](https://code.visualstudio.com/download).

## Setting up Environment Configurations
- In the index.js file, add database information to allow MySQL to connect to the database, fill in the DB_NAME and DB_PASSWORD options to match the credentials of the local database you created.
- Place your Blockonomics API Key in the API_KEY field. This will allow the app to run migrations correctly.

## Deploying

- After opening the files in Visual Studio Code, open the **VS Code** integrated terminal and run ``` npm install ``` to install the dependencies used.
- Run ``` npm run build ``` to bundle the **JavaScript** files with Webpack.
- Run ``` npm run start ``` to launch the files with Webpack Dev Server.

## Show your support

Give a ⭐️ if you like this project!
