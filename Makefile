JS_SIZE_LIMIT_REQ += artifacts/dist

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

artifacts/dist: tsconfig.build.json node_modules $(JS_SOURCE_FILES)
	@rm -rf "$@"
	node_modules/.bin/tsc -p "$<"
	@touch "$@"
