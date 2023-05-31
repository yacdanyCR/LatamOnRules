import { useState } from "react"
import Card from "../Components/Card/Card"
import { DBUserProps } from "../Interface/Interface"
import { DBUsers } from "../DB/DBgitUser"

const HomePage = () => {
	const [users, setUsers] = useState<DBUserProps[]>(DBUsers)

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
					{users.map((el, index) => <Card user={el} key={index} />)}
				</div>
			</section>
		</div>
	)
}

export default HomePage