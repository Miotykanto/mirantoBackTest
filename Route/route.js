const model = require('../Controllers/user');
    // app.get('/register/:id', notes.findOne);
const passport = require('passport');
var express = require('express')
var app = express.Router();

const cuis = require('../Controllers/cuisinier.contol');  
app.post('/cuisinier',cuis.creer);
app.get('/cuisinier',cuis.findAl)
  
app.post('/register/:_id',model.crea); 
app.get('/register/:_id',model.getCuis);
app.post('/register', model.create);
app.get('/me', passport.authenticate('jwt', { session: false }),model.logout);
 app.post('/login', model.login);
app.post("/particulier/:_id",model.createparticulier);
app.get("/affichier/:_id",model.gestion);
app.get("/masquer/:_id",model.masquer);
app.get("/affichertous",model.findAllArticle);
app.get('/user/:image', model.findOneArticle);

app.put('/profil/:_id', model.update);

app.get('ateliere/:id',model.editebe)

    const pers = require('../Controllers/controller.article');
    
    app.post('/profil', pers.create);
    app.get('/profil', pers.findAll);
    app.get('/profil/:profilId', pers.findOne);
  
module.exports = app; 
