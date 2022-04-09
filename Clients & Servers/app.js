const express = require('express');
const morgan =require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


//express app
const app = express();

//connect to MongoDB
const dbURI = 'mongodb+srv://hesh:hesh123@nodetuts.chukh.mongodb.net/nodetuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs' );


//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));//takes uRL encoded data that can be used as an object
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title : 'new blog 2',
//         snippet: 'about my blog',
//         body: 'more about my blog'
//     });
//     blog.save()
//         .then((results) => {
//             res.send(results);
//         })
//         .catch((err) =>{
//             console.log(err);
//         })
// });

// app.get('/all-blogs', (req,res) => {
//     Blog.find()
//         .then((results) => {
//             res.send(results);
//         })
//         .catch((err) =>{
//             console.log(err);
//         })
// });

// app.get('/single-blog', (req,res) => {
//     Blog.findById('6251281b8fa3f0f77dc89d64')
//     .then((results) => {
//         res.send(results);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })

// })

app.get('/', (req, res) => {
    res.redirect('/blogs')

});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

//blog routes
app.use('/blogs',blogRoutes);

//redirects
app.get('/about-us', (req,res) => {
    res.redirect('/about');
});


//404 page
app.use((req,res) => {
    res.status(404).render('404', {title: 'Error'})
});