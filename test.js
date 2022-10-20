const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        fs.readFile("msg.txt", {
            encoding: "utf-8"
        }, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log("datafrom file=>" + data);
            res.write("<html>");
            res.write('<title>Minato Namikaze</title>');
            res.write(`<body>${data}</body>`);

            res.write('<body><form action="/msg" method="POST"><input type="text" name="msg"><button type="submit">submit</button></input></form></body>')

            res.write("</html>");
            return res.end();
        })
    }
    if (url === "/msg" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split("=")[1];
            console.log(message);
            fs.writeFileSync("msg.txt", message, (err) => {
                if (err) {
                    console.log("err!!!")
                }
            });
            res.statusCode = 302;
            res.setHeader('location', "/");
            return res.end();
        });

    }
})

server.listen(3000);