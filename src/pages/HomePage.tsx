import { useContext } from "react"
import Card from "../Components/Card/Card"
import { ThemeContext } from "../Context/ThemeContext"
import PaginationComponent from "../Components/Pagination/PaginationComponent"
import { PaginationContext } from "../Context/PaginationContext"

const HomePage = () => {
	const { users } = useContext(PaginationContext)
	const { theme } = useContext(ThemeContext)

	return (
		<div className={`${theme.themeSelected}`}>
			<section>
				<div
					style=
					{{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: "50px",
						paddingTop: "2.5rem"
					}}
				>
					{users.map((el, index) => <Card user={el} key={index} />)}
				</div>
			</section>
			<section>
				<div className="Pagination__Section" style={{ display: "flex", justifyContent: "center", padding: "2rem 0" }}>
					<PaginationComponent />
				</div>
			</section>
		</div>
	)
}

export default HomePage