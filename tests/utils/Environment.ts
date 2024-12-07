import * as dotenv from 'dotenv';
import path from 'path';

// Get the environment name from the command line argument
const environment = process.env.ENV || 'dev';

// Resolve the corresponding .env file
const envFilePath = path.resolve(__dirname, `../../.env.${environment}`);

console.log(`Loading environment variables from: ${envFilePath}`);

// Load the environment file
dotenv.config({ path: envFilePath });

// Export the variables
export const BASE_URL = process.env.BASE_URL || '';

if (!BASE_URL) {
    throw new Error("BASE_URL is not defined. Check your environment file.");
}
