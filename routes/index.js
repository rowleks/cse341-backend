const router = require('express').Router()

router.get('/', (_, res) => {
  res.send('Hello from the root route!')
})

router.use('/', require('./swagger'))
router.use('/contacts', require('./contact'))

module.exports = router
