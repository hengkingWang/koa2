export default {
	system(routes, allowRoutes) {
		const res = []
		routes.forEach(route => {
			const tmp = { ...route }
			if (allowRoutes.indexOf(route.id) !== -1) {
				if (tmp.children) {
					tmp.children = filterAsyncRoutes(tmp.children, allowRoutes)
				}
				res.push(tmp)
			}
		})
		return res
	}
}
