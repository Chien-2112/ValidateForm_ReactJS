import { useState } from "react";
import * as Yup from "yup";
import "./signupForm.css";
import { useFormik } from "formik";

const SignupForm = () => {
	// const [email, setEmail] = useState("");
	// const [name, setName] = useState("");
	// const [phone, setPhone] = useState("");
	// const [password, setPassword] = useState("");
	// const [confirmedPassword, setConfirmedPassword] = useState("");

	const formik = useFormik({
		initialValues: {
			email: "",
			name: "",
			phone: "",
			password: "",
			confirmedPassword: "",
		},
		// Validate data.
		validationSchema: Yup.object({
			name: Yup.string()
				.required("Required")
				.min(4, "Must be 4 characters or more"),
			email: Yup.string()
				.required("Required")
				.matches(
					/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
					"Please enter a valid email address"
				),
			password: Yup.string()
				.required("Required")
				.matches(
					/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,19}$/, 
					"Password must be 7-19 characters and containt at least one letter, one number and a special character."
				),
			confirmedPassword: Yup.string()
				.required("Required")
				.oneOf(
					[Yup.ref("password"), null], 
					"Password must match"
				),
			phone: Yup.string()
				.required("Required")
				.matches(
					/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
					"Must be a valid phone number"
				)

		}),

		// Submit form.
		onSubmit: (values) => {
			console.log(values);
		}
	});

	// Hiển thị lỗi => formik.errors;

	// CÁCH CŨ.
	// const handleSubmit = (e) => {
	// 	// Khi nhấn Submit => Không load lại trang.
	// 	e.preventDefault();
	// 	const newUser = {
	// 		email: email,
	// 		name: name,
	// 		phone: phone,
	// 		password: password
	// 	}
	// 	console.log(newUser);
	// };

	/**
	 * Cách 1 - Tạo Form với Hooks của React (useState, useEffect)
	 * => Cách này không được tối ưu.
	*/
	// useEffect(() => {
	// 	if(name.length < 4) {
	// 		console.log("Name is too short");
	// 	}
	// }, [name]);

	/**
	 * => Cách 2: Sử dụng thư viện Formik giúp việc tạo form đơn giản hơn.
	 * => Và có thể validate form đó với thư viện Yup.
	 */

	return (  
		<section>
			<form className="infoform" onSubmit={formik.handleSubmit}>
				<label> Your name </label>
				<input 
					type="text" id="name" name="name" 
					value={formik.values.name}
					placeholder="Enter your name..."
					// onChange={(e) => setName(e.target.value)}
					onChange={formik.handleChange}
				/>
				{formik.errors.name && (
					<p className="errorMsg"> {formik.errors.name} </p>
				)}
				<label> Email address </label>
				<input 
					type="text" id="email" name="email" 
					value={formik.values.email}
					placeholder="Enter your email address..."
					// onChange={(e) => setEmail(e.target.value)}
					onChange={formik.handleChange}
				/>
				{formik.errors.email && (
					<p className="errorMsg"> {formik.errors.email} </p>
				)}
				<label> Password </label>
				<input 
					type="password" id="password" name="password" 
					value={formik.values.password}
					placeholder="Enter your password..."
					// onChange={(e) => setPassword(e.target.value)}
					onChange={formik.handleChange}
				/>
				{formik.errors.password && (
					<p className="errorMsg"> {formik.errors.password} </p>
				)}
				<label> Confirm Password </label>
				<input 
					type="password" id="confirmedPassword" name="confirmedPassword" 
					value={formik.values.confirmedPassword}
					placeholder="Confirm your password..."
					// onChange={(e) => setConfirmedPassword(e.target.value)}
					onChange={formik.handleChange}
				/>
				{formik.errors.confirmedPassword && (
					<p className="errorMsg"> {formik.errors.confirmedPassword} </p>
				)}
				<label> Phone number </label>
				<input 
					type="text" id="phone" name="phone" 
					value={formik.values.phone}
					placeholder="Enter your phone number..."
					onChange={formik.handleChange}
				/>
				{formik.errors.phone && (
					<p className="errorMsg"> {formik.errors.phone} </p>
				)}
				<button type="submit"> Continue </button>
			</form>
		</section>
	);
}
 
export default SignupForm;