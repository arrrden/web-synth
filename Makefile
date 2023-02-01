lib:
	@echo "--> building wasm lib"
	@wasm-pack build --out-dir ui/pkg

dev: 
	@echo "--> spinning stuff up"
	@$(MAKE) lib
	@$(MAKE) -C ui run-dev