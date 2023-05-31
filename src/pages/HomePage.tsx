import Card from "../Components/Card/Card"

const HomePage = () => {
	const cont = new Array(10).fill(0)

	return (
		<div className="main">
			<section>
				<div
					style=
					{{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: "50px",
						marginTop: "2.5rem"
					}}
				>
					{cont.map((el) => <Card />)}
				</div>
			</section>
		</div>
	)
}

export default HomePage