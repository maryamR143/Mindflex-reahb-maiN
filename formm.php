<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Sign up / Login Form</title>
  <link rel="stylesheet" href="form.css">

</head>
<body>
<!-- partial:index.partial.html -->
<!DOCTYPE html>
<html>
<head>
	<title>Slide Navbar</title>
	<link rel="stylesheet" type="text/css" href="slide navbar style.css">
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">
</head>
<body>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="signup">
				<!-- <form>
					<label for="chk" aria-hidden="true">Sign in</label>
					<input type="text" name="txt" placeholder="User name" required="">
					<input type="email" name="email" placeholder="Email" required="">
					<input type="password" name="pswd" placeholder="Password" required="">
					<button>Sign in</button>
				</form> -->
				<form action=".php" method="post">
					<label for="chk" aria-hidden="true">Sign up</label>
					<center>
					<div style="display: inline-block;">
						<input type="text" name="firstname" placeholder="First Name" required="">
					</div>
					<div style="display: inline-block;">
						<input type="text" name="lastname" placeholder="Last Name" required="">
					</div>
				</center>
					<input type="number" name="age" placeholder="Age" required="">
					<input type="text" name="username" placeholder="User name" required="">
					<input type="email" name="email" placeholder="Email" required="">
					<input type="password" name="password" placeholder="Password" required="">
					<button type="submit">Submit</button>
					<center>
						<select name="gender" required="">
							<option value="" disabled selected>Select Gender</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</center>
				</form>
				
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="">
					<input type="password" name="pswd" placeholder="Password" required="">
					<button>Login</button>
				</form>
			</div>
	</div>
</body>
</html>
<!-- partial -->
  
</body>
</html>
