import "./button.css"

function Button ({ onClick }) {
		  
	
	return (
		<div className="btn">
			<button onClick={onClick} >Sign up</button>
		</div>
	)
}

export default Button;