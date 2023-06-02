import { ContributesInterface } from "../Interface/ContributesInterface"
import { DBUserProps } from "../Interface/Interface"

const getContributesInfo = async (setUsers: React.Dispatch<React.SetStateAction<DBUserProps[]>>, users: DBUserProps[]) => {
	try {
		await fetch("https://api.github.com/repos/yacdanyCR/LatamOnRules/contributors")
			.then((response) => {
				return response.json()
			}).then((data) => {
				const apiData: ContributesInterface[] = data
				setUsers(users.map((el) => {
					const index = apiData.map((el) => el.login).indexOf(el.githubUsername)
					if (index >= 0) {
						const data = apiData[index]
						return {
							...el, image: data.avatar_url,
							githubLink: data.html_url,
						}
					}
					return el
				}))
			})
	} catch (error) {
		console.error(error)
	}
}

export {
	getContributesInfo
}