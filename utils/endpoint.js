let endpoint;

try {
    // Try the local endpoint
    endpoint = 'http://localhost:3000/api';
} catch (error) {
    // If an error occurs (e.g., due to the local server not running), fallback to the remote endpoint
    endpoint = 'https://ggquizopia.vercel.app/api';
}

export { endpoint };
