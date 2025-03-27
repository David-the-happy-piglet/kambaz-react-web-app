import express from 'express';
import Hello from './src/Hello.js';
import Lab5 from './src/Labs/Lab5/index.js';
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Add security headers
app.use((req, res, next) => {
    res.header('Content-Security-Policy', "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;");
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


console.log("app type:", typeof app);  // Should show "object"
console.log("app.get type:", typeof app.get);  // Should show "function"
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
