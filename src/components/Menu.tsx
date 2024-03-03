import React, { useEffect, useState } from 'react';
import Image from "next/image"
export function Menu() {

	const [isMobile, setIsMobile] = useState(false);
	const [togleMenu, setToggleMenu] = useState(false)

	function handleMenu() {
		setToggleMenu(!togleMenu)
	}


	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth < 768);
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<header className="redesign-menu flex flex-col sm:flex-row">
			<div className="container mx-auto px-4 flex justify-between">
				<Image src="/images/Logo-Expertise-branca-R-1.png" width={162} height={36} alt='expertise branca' />
				{isMobile && <div onClick={handleMenu}>
					<Image src="/images/sandwich.svg" width={41} height={31} alt='menu' />
				</div>}
				{!isMobile && <ul className='flex'>
					<li><a href="#how-it-works">COMO FUNCIONA</a></li>
					<li><a href="#our-clients">NOSSOS CLIENTES</a></li>
					<li><a href="#our-work">NOSSO TRABALHO</a></li>
					<li><a href="#simulate-form">CONTATO</a></li>
					<li><a href="#simulate-form" className="redesign-menu__green-link">FAZER SIMULAÇÃO</a></li>
				</ul>}
			</div>
			{togleMenu && isMobile && <div className='px-8 py-8'>
				<ul>
					<li className='mt-3'><a href="#how-it-works">COMO FUNCIONA</a></li>
					<li className='mt-3'><a href="#our-clients">NOSSOS CLIENTES</a></li>
					<li className='mt-3'><a href="#our-work">NOSSO TRABALHO</a></li>
					<li className='mt-3'><a href="#simulate-form">CONTATO</a></li>
					<li className='mt-3'><a href="#simulate-form" className="redesign-menu__green-link">FAZER SIMULAÇÃO</a></li>
				</ul>
			</div>}

		</header>
	);
}
