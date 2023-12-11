import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
		<div>
			<section className="">
				<div className=" container mx-auto px-5 py-10">
					<h1
						className=" text-center text-3xl font-bold text-black"
						style={{ color: mode === "dark" ? "white" : "" }}
					>
						Testimonial
					</h1>
					<h2
						className=" text-center text-2xl font-semibold mb-10"
						style={{ color: mode === "dark" ? "white" : "" }}
					>
						What our{" "}
						<span className=" text-pink-500">customers</span> are
						saying
					</h2>
					<div className="flex flex-wrap -m-4">
						<div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
							<div className="h-full text-center">
								<img
									alt="testimonial"
									className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
									src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1340"
								/>
								<p
									style={{
										color: mode === "dark" ? "white" : "",
									}}
									className="leading-relaxed"
								>
									I've been an avid reader for years, and this
									online bookstore is a gem! The collection is
									vast, covering genres from classics to the
									latest bestsellers. The ease of navigation
									and quick delivery have made it my go-to
									place for all my book needs.
								</p>
								<span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
								<h2
									style={{
										color: mode === "dark" ? "#ff4162" : "",
									}}
									className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
								>
									John D.
								</h2>
							</div>
						</div>

						<div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
							<div className="h-full text-center">
								<img
									alt="testimonial"
									className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
									src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
								/>
								<p
									style={{
										color: mode === "dark" ? "white" : "",
									}}
									className="leading-relaxed"
								>
									I stumbled upon this bookstore while
									searching for a rare edition, and I'm
									thrilled with my discovery! The customer
									service was exceptional; they went above and
									beyond to help me find what I needed. I
									highly recommend this bookstore to all book
									enthusiasts.
								</p>
								<span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
								<h2
									style={{
										color: mode === "dark" ? "#ff4162" : "",
									}}
									className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
								>
									Michael G.
								</h2>
							</div>
						</div>
						<div className="lg:w-1/3 lg:mb-0 p-4">
							<div className="h-full text-center">
								<img
									alt="testimonial"
									className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1TxWGPfaC1jI69SN_CQoGz9rFgX1rRHhDQ&usqp=CAU"
								/>
								<p
									style={{
										color: mode === "dark" ? "white" : "",
									}}
									className="leading-relaxed"
								>
									As a book collector, I'm always on the
									lookout for unique editions. This online
									bookstore never disappoints! Their rare book
									section is impressive, and the quality of
									their products is outstanding. I've never
									been let down with any purchase.
								</p>
								<span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
								<h2
									style={{
										color: mode === "dark" ? "#ff4162" : "",
									}}
									className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
								>
									Sarah R.
								</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Testimonial