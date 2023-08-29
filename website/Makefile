-include .makefiles/Makefile
-include .makefiles/pkg/js/v1/Makefile
-include .makefiles/pkg/js/v1/with-npm.mk

.makefiles/%:
	@curl -sfL https://makefiles.dev/v1 | bash /dev/stdin "$@"

################################################################################

export DOCUSAURUS_GENERATED_FILES_DIR_NAME := artifacts/docusaurus/generated

################################################################################

.PHONY: release
release: artifacts/docusaurus/build

.PHONY: run
run: artifacts/link-dependencies.touch
	$(JS_EXEC) docusaurus start --no-open

ci:: artifacts/docusaurus/build

################################################################################

artifacts/docusaurus/build: artifacts/link-dependencies.touch $(wildcard *.js) $(JS_SOURCE_FILES) $(shell find static -type f)
	@rm -rf "$@"
	@mkdir -p "$@"

	$(JS_EXEC) docusaurus build --out-dir "$@"
