lib:
	@echo "--> building wasm lib"
	@cargo build
	@wasm-pack build --out-dir ui/pkg
