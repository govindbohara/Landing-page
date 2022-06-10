const Header = () => {
	return (
		<nav className="flex  justify-between m-7   ">
			<div className="flex gap-20 justify-center items-center">
				<div className="mt-3">
					<img src="/src/icons/logo.svg" alt="Logo" />
				</div>
				<div className="flex gap-5">
					<div className="flex items-center   gap-2">
						<h3>Features</h3>
						<a className="mt-1.5">
							<img src="/src/icons/icon-arrow-down.svg" alt="arrow down" />
						</a>
					</div>
					<div className="flex items-center  gap-2 ">
						<h3>Company</h3>
						<a className="mt-1.5">
							<img src="/src/icons/icon-arrow-down.svg" alt="arrow down" />
						</a>
					</div>
					<div>
						<h3>Careers</h3>
					</div>
					<div>
						<h3>About</h3>
					</div>
				</div>
			</div>
			<div className="flex gap-6">
				<button>Login</button>
				<button className="border-solid border-[3px] border-gray-500 px-[1.5rem] py-1 rounded-2xl ">
					Register
				</button>
			</div>
		</nav>
	);
};
export default Header;
