const express = require('express')
const app = express()
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(cors())
app.use(expressLayouts)
app.use(express.static('public'))

app.get('/',(req,res)=>{
    const data = {
        message : 'hello world'
    }
    res.render('index',{
        tasks,
        data,
        people:[
            {name : 'kim'},
            {name : 'lee'},
            {name : 'choi'}
        ],users2 : [
            {name : 'kim',age:17, role:'front'},
            {name : 'lee',age:25, role:'back'},
            {name : 'park',age:30, role:'full'},
            {name : 'choi',age:16, role:'front'}
        ]

    })
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/form',(req,res)=>{
    res.render('form')
})

app.post('/submit',(req,res)=>{
    const{name, email}= req.body
    res.render('result',{name,email})
})
let tasks = []
app.post('/addTask',(req,res)=>{
    const newTask = req.body.newTask
    if(newTask){
        tasks.push(newTask)
    }
    res.redirect('/')
})
app.post('/deleteTask',(req,res)=>{
    const taskD = req.body.task
    tasks = tasks.filter(task => task!==taskD)
    res.redirect('/')
})
app.listen(8000,()=>{
    console.log('서버 연결! => http://localhost:8000')
})