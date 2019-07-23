const cssManager = require("./css");

module.exports = function(data) {
	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title></title>
		<style>
		${cssManager.getCSSForPath(data.page.url)}
		</style>
	</head>
	<body>
		${data.content}
	</body>
</html>`;
};