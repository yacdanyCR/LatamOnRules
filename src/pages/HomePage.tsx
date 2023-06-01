import { useContext, useState } from "react"
import Card from "../Components/Card/Card"
import { DBUserProps } from "../Interface/Interface"
import { DBUsers } from "../DB/DBgitUser"
import { ThemeContext } from "../Context/ThemeContext"

const HomePage = () => {
	const [users, setUsers] = useState<DBUserProps[]>(DBUsers)
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
		</div>
	)
}

export default HomePage