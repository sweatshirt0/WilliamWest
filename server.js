const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const server = http.createServer((req, res) => {
	if (req.url === "/styles/styles.css") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/css");
		fs.readFile("styles/styles.css", function(error, data) {
			if (error) {
				res.writeHead(404);
				res.write("Error: File not found.");
			} else {
				res.write(data);
			}

			res.end();
		});
	}

	if (req.url === "/") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		fs.readFile("pages/home.html", function(error, data) {
			if (error) {
				res.writeHead(404);
				res.write("Error: File not Found.");
			} else {
				res.write(data);
			}

			res.end();
		});
	}

	if (req.url === "/contact") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		fs.readFile("pages/contact.html", function(error, data) {
			if (error) {
				res.writeHead(404);
				res.write("Error: File not found.");
			} else {
				res.write(data);
			}

			res.end();
		});
	}

	if (req.url === "/about") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		fs.readFile("pages/about.html", function(error, data) {
			if (error) {
				res.writeHead(404);
				res.write("Error: File not found.");
			} else {
				res.write(data);
			}

			res.end();
		});
	}
});

const port = process.env.port || 8080;

server.listen(port, () => console.log(`Server running on port ${port}`));
