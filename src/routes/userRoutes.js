const express = require('express')
const router = express.Router();

const {
    creatUser, getById, getUsers, EditUser, deleteUser , login
} = require('../controllers/userController')
const {
    getQuery
 } = require('../querys/userQuery')

router.post('/add', creatUser )
router.post('/login',  login )
router.get('/all', getUsers)
router.get('/query', getQuery)
router.get('/:id', getById)
router.put('/:id', EditUser)
router.delete('/:id', deleteUser)


module.exports = router