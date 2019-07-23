const cssManager = require("./_includes/css");

class One {
	data() {
		return {
			layout: "layout.11ty.js"
		};
	}

	render(data) {
		cssManager.add(data.page.url, ".component1 { color: red; }" );
		cssManager.add(data.page.url, ".component3 { color: blue; }" );
		cssManager.add(data.page.url, ".component6 { color: green; }" );

		return 'One';
	}
}
module.exports = One;