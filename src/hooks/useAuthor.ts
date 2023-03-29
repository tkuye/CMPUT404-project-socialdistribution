import { NodeClient } from "@/nodes"
import { useQuery } from "@tanstack/react-query"

const useAuthor = (userId:string) => {
	const {
		data:author
	} = useQuery({ queryKey: ['authors', userId], queryFn: async () => await NodeClient.getAuthor(userId)})
	if (author) {
		return author
	} 
	return null
}

export default useAuthor