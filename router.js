const express = require('express')
const user = require('./controllers/user')
const index = require('./controllers/index')
const topic = require('./controllers/topic')
const router = express.Router()

router
	.get('/', index.showIndex)
router
	.get('/signin', user.showSignin)
	.post('/signin', user.signin)
	.get('/signup', user.showSignup)
	.post('/signup', user.signup)
	.post('/signout', user.signout)
router
	.get('/topic/create', topic.showCreate)
  	.post('/topic/create', topic.create)
  	.get('/topic/:topicID', topic.show)
  	.get('/topic/:topicID/edit', topic.showEdit)
  	.post('/topic/:topicID/edit', topic.edit)
  	.post('/topic/:topicID/delete', topic.delete)
module.exports = router