const Body = () => {
	return (
		<main className="flex items-center justify-around">
			<section className="flex flex-col gap-[6rem] mt-[3rem] ">
				<div className="flex flex-col mt-[3rem]  ">
					<div className=" flex flex-col leading-[4.3rem] mt-8">
						<h1 className="text-[5rem] font-bold ">Make</h1>
						<h1 className="text-[5rem] font-bold mb-[3rem]">remote work</h1>
					</div>
					<div className="flex flex-col gap-[3rem]">
						<div className="max-w-[25rem] ">
							<p className="text-[18px] text-gray-500 ">
								Get your team in sync, no matter your location. Streamline
								processes, create team rituals, and watch productively soar.
							</p>
						</div>

						<button className="bg-black items-center text-xl text-white inline-block w-[10rem] py-3 rounded-2xl">
							Learn more
						</button>
					</div>
				</div>
				<div className="flex items-center justify-start gap-8 mt-4">
					<img src="/icons/client-databiz.svg" alt="brand" />
					<img src="/icons/client-audiophile.svg" alt="brand" />
					<img src="/icons/client-meet.svg" alt="brand" />
					<img src="/icons/client-maker.svg" alt="brand" />
				</div>
			</section>
			<section>
				<img
					src="/src/photos/image-hero-desktop.png"
					alt="image"
					className="h-[620px] "
				/>
			</section>
		</main>
	);
};
export default Body;
