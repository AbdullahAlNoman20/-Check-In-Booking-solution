import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";


const Register = () => {

	const handleRegister = (e) => {
		e.preventDefault()
		const name = e.target.name.value;
		const gmail = e.target.gmail.value;
		const photo = e.target.photo.value;
		const password = e.target.password.value;

		console.log(name,gmail,photo,password)
		
	}




    return (
        <div className="flex justify-center py-5 bg-sky-900">
			<Helmet>
                 <title>Check-In | Register </title>
            </Helmet>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Register Now</h1>
		<p className="text-sm dark:text-gray-600">Start a new Journey with Check-in </p>
	</div>
	<form onSubmit={handleRegister} noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
        <div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Your Name</label>
				</div>
				<input name='name' type="text" id="username" placeholder="Username" className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input name='gmail' type="text" id="username" placeholder="Gmail" className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Photo URL</label>
				</div>
				<input name='photo' type="text" id="username" placeholder="https/" className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
				</div>
				<input name='password' type="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Already have Account?
            <NavLink to="/login">
            <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600 ml-4 font-bold">LogIn</a>.
            </NavLink>
				
			</p>
		</div>
	</form>
</div>
        </div>
    );
};

export default Register;