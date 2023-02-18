// DEPENDENCIES
const app = require("./app.js"); // We must require app.js in order to import it

// CONFIGURATION
require("dotenv").config(); // We import and configure dotenv to use the environment variable we created in our .env file
const PORT = process.env.PORT; // 

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


