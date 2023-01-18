module.exports = {
	env: {
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"plugin:cypress/recommended",
	],
	plugins: ["cypress", "ssr-friendly"],
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020,
		sourceType: "module",
		project: "./tsconfig.json",
		extraFileExtensions: [".vue"],
	},
	rules: {
		"no-console": "warn",
		"no-debugger": "warn",
		"no-control-regex": 0,
		"class-methods-use-this": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-unsafe-return": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
		"spaced-comment": ["error", "always"],
		"comma-dangle": ["error", "always-multiline"],
		quotes: ["error", "single", {avoidEscape: true}],
		"func-style": ["error", "declaration", {allowArrowFunctions: true}],
		"object-shorthand": ["error", "always"],
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				named: "never",
				asyncArrow: "always",
			},
		],
		"arrow-parens": ["error", "as-needed"],
		"object-curly-spacing": ["error", "always"],
		"array-bracket-spacing": ["error", "never"],
		"computed-property-spacing": ["error", "never"],
		"no-trailing-spaces": [
			"error",
			{
				skipBlankLines: false,
				ignoreComments: true,
			},
		],
		"object-property-newline": [
			"error",
			{allowAllPropertiesOnSameLine: true},
		],
		"no-multi-spaces": "error",
		"space-infix-ops": "error",
		'vue/multi-word-component-names': 'off',
		// "vue/singleline-html-element-content-newline": "off",
		// "vue/brace-style": ["warn"],
		// "vue/camelcase": ["warn", { properties: "never" }],
		// "vue/comma-dangle": ["warn"],
		// "vue/dot-location": ["warn", "property"],
		// "vue/eqeqeq": ["error"],
		// "vue/key-spacing": ["warn"],
		// "vue/keyword-spacing": ["error"],
		// "vue/match-component-file-name": [
		//   "error",
		//   {
		//     extensions: [".vue", ".ts"],
		//     shouldMatchCase: true,
		//   },
		// ],
		// "vue/first-attribute-linebreak": [
		//   "error",
		//   {
		//     singleline: "ignore",
		//     multiline: "below",
		//   },
		// ],
		// "vue/no-deprecated-scope-attribute": ["error"],
		// "vue/no-deprecated-slot-attribute": ["error"],
		// "vue/no-deprecated-slot-scope-attribute": ["error"],
		// "vue/no-empty-pattern": ["error"],
		// "vue/no-irregular-whitespace": ["warn"],
		// "vue/no-reserved-component-names": ["error"],
		// "vue/no-restricted-syntax": ["error"],
		// "vue/no-static-inline-styles": ["error"],
		// "vue/object-curly-spacing": ["warn"],
		// "vue/padding-line-between-blocks": ["warn"],
		// "vue/require-direct-export": ["off"],
		// "vue/require-name-property": ["error"],
		// "vue/script-indent": ["off"],
		// "vue/space-infix-ops": ["warn"],
		// "vue/space-unary-ops": ["warn"],
		// "vue/v-on-function-call": ["error"],
		// "vue/v-slot-style": ["error"],
		// "vue/valid-v-bind-sync": ["error"],
		// "vue/valid-v-slot": ["error"],
		indent: ["error", 4, {SwitchCase: 1}],
	},
};
