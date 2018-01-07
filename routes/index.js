const EmailController = require('../controllers/email')

module.exports = (app) => {
  app.post('/emails', EmailController.create)
  app.get('/emails', EmailController.read)
  app.put('/emails/:id', EmailController.update)
  app.delete('/emails/:id', EmailController.delete)
}
