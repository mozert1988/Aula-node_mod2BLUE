const express = require("express");
const path = require("path");
const app = express();
const port =  process.env.PORT ||3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

app.get("/", function (req, res){
    res.render("index", { titulo: "Olá, fica tranquilo, você está evoluindo!"});
});

app.get("/pagina", function (req, res){
    res.render("pagina");
});

app.get("/teste2", function (req, res){
    res.send("esse é outro teste");
});

app.get("/formulario", function (req, res){
    res.render("formulario");
});

app.get("/testeaula", function (req, res){
    const{ nome, email, senha, ajuda, nascimento} = req.body;
    res.send({nome: nome, email: email, senha: senha, ajuda: ajuda, nascimento: nascimento});
});

app.get("recebeform", function (req, res){
    const {nome, email, senha} = req.body;
    res.send({ nome: nome, email: email, senha: senha});
});

app.post("/testeaula", function (req, res){
    const{ nome, email, senha, ajuda, nascimento} = req.body;
    res.render("testeaula",{nome: nome, email: email, senha: senha, ajuda: ajuda, nascimento: nascimento});
});

app.post("/recebeform", function (req, res){
    const { nome, email, senha} = req.body;
    res.send({ nome: nome, email: email, senha: senha});
});


// app.post
// app.put
// app.delete

app.listen(port, () => 
console.log(`Servidor rodando em http://localhost:${port}`)
);