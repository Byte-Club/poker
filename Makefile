test:
	npm test

cov:
	mkdir -p coverage
	jscoverage --no-highlight shared coverage/shared
	jscoverage --no-highlight server/lib coverage/server
	POKER_COV=1 mocha -R html-cov `find test/shared -name "*.mocha.js"` > coverage/shared.html
	POKER_COV=1 mocha -R html-cov `find test/server -name "*.mocha.js"` > coverage/server.html

.PHONY: test
