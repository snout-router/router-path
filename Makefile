JS_SOURCE_FILES += $(shell find src -type f -iname "*.ts" 2> /dev/null)
_JS_TEST_ASSETS := $(shell find test -type f -not -iname "*.ts" 2> /dev/null)

JS_SIZE_LIMIT_REQ += dist

################################################################################

-include .makefiles/Makefile
-include .makefiles/pkg/js/v1/Makefile
-include .makefiles/pkg/js/v1/with-yarn.mk

.makefiles/%:
	@curl -sfL https://makefiles.dev/v1 | bash /dev/stdin "$@"

################################################################################

.PHONY: website-%
website-%:
	$(MAKE) -C website "$*"

################################################################################

dist: rollup.config.js tsconfig.json node_modules $(JS_SOURCE_FILES)
	node_modules/.bin/rollup --config rollup.config.js

	@touch "$@"
