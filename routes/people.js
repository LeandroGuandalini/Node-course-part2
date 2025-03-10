const express = require('express');

const router = express.Router();

let {people} = require('../data');

const {
  getPeople,
  createPerson,
  createPersonInsomnia,
  updatePerson,
  deletePerson
} = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/insomnia', createPersonInsomnia)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson);
router.route('/insomnia').post(createPersonInsomnia);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router