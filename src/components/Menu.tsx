import React from 'react';

export function Menu() {
	return (
		<menu className="redesign-menu">
			<img src="images/Logo-Expertise-branca-R-1.png" />
			<ul>
				<li><a href="#how-it-works">COMO FUNCIONA</a></li>
				<li><a href="#advantages">VANTAGENS</a></li>
				<li><a href="#our-clients">NOSSOS CLIENTES</a></li>
				<li><a href="#our-work">NOSSO TRABALHO</a></li>
				<li><a href="#simulate-form">CONTATO</a></li>
				<li><a href="#simulate-form" className="redesign-menu__green-link">FAZER SIMULAÇÃO</a></li>
			</ul>
		</menu>
	);
}
