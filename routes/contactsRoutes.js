const router = require('express').Router();
const contactsController = require('../controller/contactsController.js');

router.get('/', contactsController.getUsers);
router.get('/:id', contactsController.getUser);

module.exports = router;