const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url, true);

    if (pathname === '/submit' && req.method === 'POST') {
        let formData = '';

        req.on('data', chunk => {
            formData += chunk.toString();
        });

        req.on('end', () => {
            try {
                const parsedFormData = JSON.parse(formData);

                const filePath = path.join(__dirname, 'form_data.txt');

                // Check if the file exists, if not, create it
                if (!fs.existsSync(filePath)) {
                    fs.writeFileSync(filePath, '');
                }

                // Save form data to the file
                fs.appendFile(filePath, JSON.stringify(parsedFormData) + '\n', err => {
                    if (err) {
                        console.error('Error writing to file:', err);
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Internal Server Error' }));
                        return;
                    }

                    console.log('Form data saved!');
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Form submitted successfully!' }));
                });
            } catch (error) {
                console.error('Error parsing form data:', error);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid form data' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
