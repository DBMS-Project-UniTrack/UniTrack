const express = require('express');
const app = express();
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

//Get dashboard Home
router.get('/home', dashboardController.getDashboardHome);

let upload = require('../config/multer.config.js');

//Get Syllabus Home page
router.get('/syllabus/:semid', dashboardController.getSyllabusHome);

//Go to add subject page
router.get('/syllabus/:semid/addsubject', dashboardController.getAddSubject);

//Upload and download files
router.post('/syllabus/:semid/addsubject/addsubjectform', upload.single("file"), dashboardController.addSubject);
router.get('/syllabus/:semid/downloadsyllabus/:sub_code', dashboardController.downloadSyllabus);

//Get details page for a subject
router.get('/details/:sub_code', dashboardController.getDetails);

//Get books page
router.get('/books/:semid', dashboardController.getBooks);

//Get PYQP page
router.get("/prevyears/:semid", dashboardController.getPrevYears);

//Get notes page
router.get('/notes/:semid', dashboardController.getNotesPage);

//Get notes page for particular subject
router.get('/notes/subject/:sub_code', dashboardController.getNotesPageForSub);

//Get update profile page for a user
router.get('/update', dashboardController.getUpdatePage);

//Update the profile and user tables
router.post('/update/user', dashboardController.updateUser);

//Get todo page
router.get('/todo', dashboardController.getTodo);

//Add todo
router.post('/todo/add', dashboardController.addtodo);

//Delete all todo
router.post('/todo/allclear', dashboardController.allClear);

//Delete this todo
router.post('/todo/delete/:taskid', dashboardController.deleteTodo);


module.exports = router;