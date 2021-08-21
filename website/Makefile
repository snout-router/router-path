-include .makefiles/Makefile
-include .makefiles/pkg/js/v1/Makefile
-include .makefiles/pkg/js/v1/with-yarn.mk

.makefiles/%:
	@curl -sfL https://makefiles.dev/v1 | bash /dev/stdin "$@"

################################################################################

export DOCUSAURUS_GENERATED_FILES_DIR_NAME := artifacts/docusaurus/generated

################################################################################

.PHONY: release
release: artifacts/docusaurus/build

.PHONY: run
run: node_modules
	node_modules/.bin/docusaurus start --no-open

ci:: artifacts/docusaurus/build

################################################################################

artifacts/docusaurus/build: node_modules
	@rm -rf "$@"
	@mkdir -p "$@"

	node_modules/.bin/docusaurus build --out-dir "$@"
