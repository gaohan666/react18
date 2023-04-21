module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	// 规则本身有打开和关闭
	// 继承其他的eslint配置
	// 这些配置已经定义好了plugin里的规则到底是打开还是关闭
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	// lint 规则的合集
	plugins: ['react', '@typescript-eslint', 'prettier'],
	// 一些具体的 lint 规则
	rules: {
		'prettier/prettier': 'error',
		'no-case-declarations': 'off',
		'no-constant-condition': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-var-requires': 0
	}
}
