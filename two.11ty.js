const cssManager = require("./_includes/css");
class Two {
	data() {
		return {
			layout: "layout.11ty.js"
		};
	}

	render(data) {
		cssManager.add(data.page.url, ".component2 { color: red; }" );
		cssManager.add(data.page.url, ".component3 { color: blue; }" );
		cssManager.add(data.page.url, ".component5 { color: green; }" );

		return "Two";
	}
}
module.exports = Two;