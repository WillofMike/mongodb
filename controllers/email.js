const Emails = require('../models/email');

module.exports = {
  create: (req, res) => (
    Emails.create(req.body)
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  ),
  read: (req, res) => (
    Emails.find() // args = query, projection
      .then(docs => res.status(200).json(docs))
      .catch(err => res.status(500).json(err))
  ),
  update: (req, res) => (
    Emails.findByIdAndUpdate(req.params.id, req.body, { new: true }) // args = id, data, options
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  ),
  delete: (req, res) => (
    Emails.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true }) // args = id, data, options
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  ),
};
