const mysql = require('mysql2');
var stream = require('stream');


// Connection Pool
let connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});

// To display dashboard home for particular user
exports.getDashboardHome = (req, res) => {
    let useremail = req.session.email;
    connection.query('SELECT * FROM login_users WHERE email = ?', [useremail], (err, userrow) => {
        connection.query('SELECT * FROM profiles WHERE email = ?', [useremail], (err, profilerow) => {
            let sem = userrow[0].semester;
            console.log('semester is', sem);
            connection.query('SELECT subject_code, subject_name, type from syllabus WHERE semester = ?', [sem], (err, subjectrows) => {
                if (!err) {
                    res.render('dashboardhome', { userrow, profilerow, subjectrows });
                } else {
                    console.log(err);
                }
                console.log('The data from user table: \n', userrow);
                console.log('The data from profile table: \n', profilerow);
                for (let i = 0; i < subjectrows.length; i++) {
                    console.log('The data from syllabus table: \n', subjectrows[i]);
                  }
                
            })
        })
            
    })
    
}

// To display the syllabus page for a particular semid
exports.getSyllabusHome = (req, res) => {
    let useremail = req.session.email;
    let semid = req.params.semid;
    connection.query('SELECT * FROM login_users WHERE email = ?', [useremail], (err, userrow) => {
        connection.query('SELECT * FROM profiles WHERE email = ?', [useremail], (err, profilerow) => {
            connection.query('SELECT * from syllabus WHERE semester = ? and type = ?', [semid, "Theory"], (err, subjectrows) => {
                if (!err) {
                    res.render('syllabus', { userrow, profilerow, subjectrows });
                } else {
                    console.log(err);
                }
                console.log('The data from user table: \n', userrow);
                console.log('The data from profile table: \n', profilerow);
                console.log('The data from syllabus table: \n', subjectrows);
                
            })
        })
    });
}

//To display add subjects page
exports.getAddSubject = (req, res) => {
    let semid = req.params.semid;
    res.render('addSubject', {semid});
}

exports.addSubject = (req, res) => {
    let semid = req.params.semid;
    let subject_code = req.body.subject_code;
    let subject_name = req.body.subject_name;
    let semester = req.body.semester;
    let type = req.body.type;
    let credits = req.body.credits;
    let lectures_per_week = req.body.lectures;
    let tuts_per_week = req.body.tuts;
    let syllabus_file_type = req.file.mimetype;
    let syllabus_file_name = req.file.originalname;
    let syllabus_file_data = req.file.buffer;
    let syllabus_file_viewlink = req.body.viewlink;

    connection.query('INSERT INTO syllabus VALUES(?,?,?,?,?,?,?,?,?,?,?)', [subject_code, subject_name, semester, type, credits, lectures_per_week, tuts_per_week, syllabus_file_type, syllabus_file_name, syllabus_file_data, syllabus_file_viewlink], (err, syllabusrow) => {
        if (!err) {
            res.render('addSubject');
        } else {
            console.log(err);
        }
    })
   
}

// exports.viewSyllabus = (req, res) => {
//     let subject_code = req.params.sub_code;

//     connection.query('SELECT * FROM syllabus WHERE subject_code = ?', [subject_code], (err, filerow) => {
//         if (!err) {
//             const viewlink = filerow.syllabus_file_viewlink;
//             res.redirect(viewlink);
//         } else {
//             console.log(err);
//             res.json({ msg: 'Error', detail: err });

//         }
//     })

// }

exports.downloadSyllabus = (req, res) => {
    let subject_code = req.params.sub_code;

    connection.query('SELECT * FROM syllabus WHERE subject_code = ?', [subject_code], (err, filerow) => {
        if (!err) {
            console.log(filerow);
            console.log('syllabus_file_data type is');
            console.log(typeof(filerow[0].syllabus_file_data));
            var fileContents = Buffer.from(filerow[0].syllabus_file_data, "base64");
            var readStream = new stream.PassThrough();
            readStream.end(fileContents);

            res.set('Content-disposition', 'attachment; filename=' + filerow[0].syllabus_file_name);
            res.set('Content-Type', filerow[0].syllabus_file_type);

            readStream.pipe(res);
        } else {
            console.log(err);
            res.json({ msg: 'Error', detail: err });

        }
    })

}

// To display the syllabus page for a particular semid
exports.getDetails = (req, res) => {
    let useremail = req.session.email;
    let subject_code = req.params.sub_code;
    connection.query('SELECT * FROM login_users WHERE email = ?', [useremail], (err, userrow) => {
        connection.query('SELECT * FROM profiles WHERE email = ?', [useremail], (err, profilerow) => {
            connection.query('SELECT subject_code, subject_name, type, credits, lectures_per_week, tuts_per_week  from syllabus WHERE subject_code = ?', [subject_code], (err, subjectrows) => {
                if (!err) {
                    res.render('details', { userrow, profilerow, subjectrows });
                } else {
                    console.log(err);
                }
                console.log('The data from user table: \n', userrow);
                console.log('The data from profile table: \n', profilerow);
                console.log('The data from syllabus table: \n', subjectrows);
                
            })
        })
    });
}

// To display todo page for a particular user
exports.getTodo = (req, res) => {
    let userid= req.params.userid;

    connection.query('SELECT * FROM todo WHERE userid = ?', [userid], (err, rows) => {
        if(!err){
            res.render('todo', { rows });
        } else {
            console.log(err);
        }
        console.log('The data from user table: \n', rows);
    });
}

// To display the books page for a particular semid
exports.getBooks = (req, res) => {
    let useremail = req.session.email;
    let semid = req.params.semid;
    connection.query('SELECT * FROM login_users WHERE email = ?', [useremail], (err, userrow) => {
        connection.query('SELECT * FROM profiles WHERE email = ?', [useremail], (err, profilerow) => {
            connection.query('SELECT books.*, syllabus.subject_name from books,syllabus WHERE semester = ? and books.subject_code = syllabus.subject_code order by subject_code, bookname', [semid], (err, booksrows) => {
                if (!err) {
                    res.render('books', { userrow, profilerow, booksrows });
                } else {
                    console.log(err);
                }
                console.log('The data from user table: \n', userrow);
                console.log('The data from profile table: \n', profilerow);
                console.log('The data from syllabus table: \n', booksrows);
                
            })
        })
    });
}

// To display the PYQP page for a particular semid
exports.getPrevYears = (req, res) => {
    let useremail = req.session.email;
    let semid = req.params.semid;
    connection.query('SELECT * FROM login_users WHERE email = ?', [useremail], (err, userrow) => {
        connection.query('SELECT * FROM profiles WHERE email = ?', [useremail], (err, profilerow) => {
            connection.query('SELECT prevyears.*, syllabus.subject_name, syllabus.semester from prevyears, syllabus WHERE prevyears.subject_code = syllabus.subject_code and semester = ?', [semid], (err, prevyearsrows) => {
                if (!err) {
                    res.render('prevyears', { userrow, profilerow, prevyearsrows });
                } else {
                    console.log(err);
                }
                console.log('The data from user table: \n', userrow);
                console.log('The data from profile table: \n', profilerow);
                console.log('The data from syllabus table: \n',prevyearsrows);
                
            })
        })
    });
}

// To display the notes page for a particular semid
exports.getNotesPage = (req, res) => {
    let useremail = req.session.email;
    let semid = req.params.semid;
    connection.query('SELECT * FROM login_users WHERE email = ?', [useremail], (err, userrow) => {
        connection.query('SELECT * FROM profiles WHERE email = ?', [useremail], (err, profilerow) => {
            connection.query('SELECT * from syllabus WHERE semester = ? and type = ?', [semid, 'Theory'], (err, subjectrows) => {
                if (!err) {
                    res.render('notes', { userrow, profilerow, subjectrows });
                } else {
                    console.log(err);
                }
                console.log('The data from user table: \n', userrow);
                console.log('The data from profile table: \n', profilerow);
                console.log('The data from syllabus table: \n',subjectrows);
            })
        })
    });
}

// To display the notes page for a particular semid for particular subject_code
exports.getNotesPageForSub = (req, res) => {
    let useremail = req.session.email;
    let sub_code = req.params.sub_code;
    connection.query('SELECT * FROM login_users WHERE email = ?', [useremail], (err, userrow) => {
        connection.query('SELECT * FROM profiles WHERE email = ?', [useremail], (err, profilerow) => {
            let semid = profilerow[0].semester;
            console.log('The semid from profile row is', semid);
            connection.query('SELECT * from syllabus WHERE semester = ? and type = ?', [semid, 'Theory'], (err, subjectrows) => {
                connection.query('SELECT notes.*, units.unit_name, syllabus.subject_name from notes, syllabus, units where notes.subject_code = ? and notes.subject_code = syllabus.subject_code and notes.subject_code = units.subject_code and notes.unit_num = units.unit_num order by unit_num', [sub_code], (err, subcoderows) => {
                    if (!err) {
                        let sub_name = subcoderows[0].subject_name;
                        let sub_name_obj = [{sub_name: sub_name}];
                        console.log('sub_name_obj is ');
                        console.log(sub_name_obj);
                        res.render('notes', {userrow, profilerow, subjectrows, subcoderows, sub_name_obj});
                    } else {
                        console.log(err);
                    }
                    console.log('The data from user table: \n', userrow);
                    console.log('The data from profile table: \n', profilerow);
                    console.log('The data from syllabus table: \n',subjectrows);
                    console.log('The data from notes table: \n',subcoderows);
                })
               
            })
        })
    });
}


// View Dashboard page according to sem using semid of params
// exports.viewDashboard = (req, res) => {

//     let semid = req.params.semid;
//     res.render('dashboardhome', {semid});
//     // User the connection
//     // connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
//     //     // When done with the connection, release it
//     //     if (!err) {
//     //         let removedUser = req.query.removed;
//     //         res.render('home', { rows, removedUser });
//     //     } else {
//     //         console.log(err);
//     //     }
//     //     console.log('The data from user table: \n', rows);
//     // });
// }

