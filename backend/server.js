const express  = require('express');
const cors = require('cors');

const app = express();
const mysql = require('mysql');
app.use(express.json()) ;
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud-new'
})

app.get('/', function (req, res) {
    const sql = "SELECT * FROM student";
    db.query(sql, function (err, data){
        if(err) return res.json("Error");
        return res.json(data);
        
    })
}
)

app.post('/create', (req, res) => {
    const sql = "INSERT INTO student (Name, Email) VALUES (?, ?)";
    const values = [
        req.body.name,
        req.body.email
    ]

    db.query(sql, [...values], (err, data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })

})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE student SET Name = ?, Email= ? WHERE ID = ?";
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })

})

app.delete('/student/:id', (req, res) => {
    const sql = "DELETE from student WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })

})



app.listen(8081, ()=>{
    console.log('Server started on port 8081');
})