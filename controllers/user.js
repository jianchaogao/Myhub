exports.showSignin = (req,res) => {
	res.render('signin.html')
}

exports.signin = (req,res) => {
	res.send('signin')
}

exports.showSignup = (req,res) => {
	res.render('signup.html')
}

exports.signup = (req,res) => {
	res.send('signup')
}

exports.signout = (req,res) => {
	res.send('signout')
}
