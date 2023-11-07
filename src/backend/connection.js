import express from 'express'
import mysql from 'mysql'
const app = express()
import cors from 'cors'

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gallery'
})

app.post('/create',(req,res)=>{
    const username = req.body.username
    const age = req.body.age
    const email = req.body.email
    const password = req.body.password

    db.query('INSERT INTO register_Users (username, age, email, password) VALUES(?,?,?,?)',[username, age, email, password],
    (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result)
        }
    })
})

app.get('/usuarios',(req,res)=>{
    db.query('SELECT * FROM register_Users',
    (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result)
        }
    })
})

app.post('/login',(req,res)=>{
    const mySql = 'SELECT * FROM register_Users WHERE `email` = ? AND `password` = ?'
    db.query(mySql, [req.body.email, req.body.password], 
    (err, data) => {
        if (err) {
            return res.json(err)
        }
        if (data.length > 0) {
            return res.json('success')
        }else {
            return res.json('Faile')
        }
    })
})
app.delete('/delete/:id',(req,res) => {
    const id = req.params.id
    db.query('DELETE FROM  register_Users WHERE id=?',id,
        (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})


app.listen(3000, function() {
 console.log('listening on port 3000')    
})