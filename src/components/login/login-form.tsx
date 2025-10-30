import React from "react";

export default function LoginForm() {
	return (
		<form action="">
			<input type="text" name="username" placeholder="usuário" />
			<input type="password" name="password" placeholder="senha" />
			<button>Entrar</button>
		</form>
	);
}
