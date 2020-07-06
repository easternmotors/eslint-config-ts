module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  overrides: [
    {
      files: ['**/*.module.css.d.ts'],
      rules: {
        'prettier/prettier': 0
      }
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
      modules: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'cumul8',
    'import',
    'prefer-arrow',
    'prettier',
    'react',
    'react-hooks',
    'simple-import-sort'
  ],
  rules: {
    // https://eslint.org/docs/rules/#possible-errors
    'for-direction': 2,
    'getter-return': 2,
    'no-async-promise-executor': 2,
    'no-await-in-loop': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-else-if': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0, // Off in favor of prettier/prettier
    'no-extra-semi': 0, // Off in favor of prettier/prettier
    'no-func-assign': 2,
    'no-import-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-loss-of-precision': 2, // Off in favor of @typescript-eslint/no-loss-of-precision
    'no-misleading-character-class': 2,
    'no-obj-calls': 2,
    'no-promise-executor-return': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 2,
    'no-setter-return': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 2,
    'no-unexpected-multiline': 2, // See https://github.com/prettier/eslint-config-prettier#special-rules
    'no-unreachable': 2,
    'no-unreachable-loop': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-useless-backreference': 2,
    'require-atomic-updates': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    // https://eslint.org/docs/rules/#best-practices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'class-methods-use-this': 2,
    complexity: 2,
    'consistent-return': 2,
    curly: [2, 'all'], // See https://github.com/prettier/eslint-config-prettier#special-rules
    'default-case': 2,
    'default-case-last': 2,
    'default-param-last': 0, // Off in favor of @typescript-eslint/default-param-last
    'dot-location': 0, // Off in favor of prettier/prettier
    'dot-notation': 0, // Off in favor of @typescript-eslint/dot-notation
    eqeqeq: 2,
    'grouped-accessor-pairs': 2,
    'guard-for-in': 2,
    'max-classes-per-file': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-constructor-return': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 0, // Off in favor of prettier/prettier
    'no-global-assign': 2,
    'no-implicit-coercion': [2, { allow: ['!!'] }],
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0, // Off in favor of @typescript-eslint/no-magic-numbers
    'no-multi-spaces': 0, // Off in favor of prettier/prettier
    'no-multi-str': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-restricted-properties': 2,
    'no-return-assign': 2,
    'no-return-await': 0, // Off in favor of @typescript-eslint/return-await
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 0, // See https://github.com/prettier/eslint-config-prettier#other-rules-worth-mentioning
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-catch': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-with': 2,
    'prefer-named-capture-group': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-regex-literals': 2,
    radix: 2,
    'require-await': 0, // Off in favor of @typescript-eslint/require-await
    'require-unicode-regexp': 2,
    'vars-on-top': 2,
    'wrap-iife': 0, // Off in favor of prettier/prettier
    yoda: 2,
    // https://eslint.org/docs/rules/#strict-mode
    strict: 2,
    // https://eslint.org/docs/rules/#variables
    'init-declarations': 0, // Off in favor of @typescript-eslint/init-declarations
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-unused-vars': 0, // Off in favor of @typescript-eslint/no-unused-vars
    'no-use-before-define': 2,
    // https://eslint.org/docs/rules/#stylistic-issues
    'array-bracket-newline': 0, // Off in favor of prettier/prettier
    'array-bracket-spacing': 0, // Off in favor of prettier/prettier
    'array-element-newline': 0, // Off in favor of prettier/prettier
    'block-spacing': 0, // Off in favor of prettier/prettier
    'brace-style': 0, // Off in favor of prettier/prettier
    camelcase: 2,
    'capitalized-comments': [2, 'always'],
    'comma-dangle': 0, // Off in favor of prettier/prettier
    'comma-spacing': 0, // Off in favor of prettier/prettier
    'comma-style': 0, // Off in favor of prettier/prettier
    'computed-property-spacing': 0, // Off in favor of prettier/prettier
    'consistent-this': 2,
    'eol-last': 0, // Off in favor of prettier/prettier
    'func-call-spacing': 0, // Off in favor of prettier/prettier
    'func-name-matching': 2,
    'func-names': 2,
    'func-style': 2,
    'function-call-argument-newline': 0, // Off in favor of prettier/prettier
    'function-paren-newline': 0, // Off in favor of prettier/prettier
    'id-blacklist': 2,
    'id-length': 0, // This doesn't seem useful
    'id-match': 2,
    'implicit-arrow-linebreak': 0, // Off in favor of prettier/prettier
    indent: 0, // Off in favor of prettier/prettier
    'jsx-quotes': 0, // Off in favor of prettier/prettier
    'key-spacing': 0, // Off in favor of prettier/prettier
    'keyword-spacing': 0, // Off in favor of prettier/prettier
    'line-comment-position': 2,
    'linebreak-style': 0, // Off in favor of prettier/prettier
    'lines-around-comment': 0, // Off in favor of prettier/prettier
    'lines-between-class-members': 0, // Off in favor of @typescript-eslint/lines-between-class-members
    'max-depth': 2,
    'max-len': [2, { code: 120 }], // See https://github.com/prettier/eslint-config-prettier#special-rules
    'max-lines': 2,
    'max-lines-per-function': 2,
    'max-nested-callbacks': 2,
    'max-params': 2,
    'max-statements': [2, 20],
    'max-statements-per-line': 2,
    'multiline-comment-style': 2,
    'multiline-ternary': 0, // Off in favor of prettier/prettier
    'new-cap': 2,
    'new-parens': 0, // Off in favor of prettier/prettier
    'newline-per-chained-call': 0, // Off in favor of prettier/prettier
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-continue': 2,
    'no-inline-comments': 2,
    'no-lonely-if': 2,
    'no-mixed-operators': 0, // Doesn't seem useful
    'no-mixed-spaces-and-tabs': 0, // Off in favor of prettier/prettier
    'no-multi-assign': 2,
    'no-multiple-empty-lines': 0, // Off in favor of prettier/prettier
    'no-negated-condition': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': 2,
    'no-restricted-syntax': [2, 'SequenceExpression'], // See https://github.com/prettier/eslint-config-prettier#other-rules-worth-mentioning
    'no-tabs': 2, // See https://github.com/prettier/eslint-config-prettier#special-rules
    'no-ternary': 0, // Allowing use of ternaries
    'no-trailing-spaces': 0, // Off in favor of prettier/prettier
    'no-underscore-dangle': 0, // Allow underscores for renaming/private use-cases
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 0, // Off in favor of prettier/prettier
    'nonblock-statement-body-position': 0, // Off in favor of prettier/prettier
    'object-curly-newline': 0, // Off in favor of prettier/prettier
    'object-curly-spacing': 0, // Off in favor of prettier/prettier
    'object-property-newline': 0, // Off in favor of prettier/prettier
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': 0, // Off in favor of prettier/prettier
    'operator-assignment': 2,
    'operator-linebreak': 0, // Off in favor of prettier/prettier
    'padded-blocks': 0, // Off in favor of prettier/prettier
    'padding-line-between-statements': 2,
    'prefer-exponentiation-operator': 2,
    'prefer-object-spread': 2,
    'quote-props': 0, // Off in favor of prettier/prettier
    quotes: 0, // Off in favor of @typescript-eslint/quotes
    semi: 0, // Off in favor of prettier/prettier
    'semi-spacing': 0, // Off in favor of prettier/prettier
    'semi-style': 0, // Off in favor of prettier/prettier
    'sort-keys': [2, 'asc', { caseSensitive: true, natural: true, minKeys: 2 }],
    'sort-vars': 2,
    'space-before-blocks': 0, // Off in favor of prettier/prettier
    'space-before-function-paren': 0, // Off in favor of prettier/prettier
    'space-in-parens': 0, // Off in favor of prettier/prettier
    'space-infix-ops': 0, // Off in favor of prettier/prettier
    'space-unary-ops': 0, // Off in favor of prettier/prettier
    'spaced-comment': 2,
    'switch-colon-spacing': 0, // Off in favor of prettier/prettier
    'template-tag-spacing': 0, // Off in favor of prettier/prettier
    'unicode-bom': 0, // Off in favor of prettier/prettier
    'wrap-regex': 0, // Off in favor of prettier/prettier
    // https://eslint.org/docs/rules/#ecmascript-6
    'arrow-body-style': [2, 'as-needed'], // See https://github.com/prettier/eslint-config-prettier#special-rules
    'arrow-parens': 0, // Off in favor of prettier/prettier
    'arrow-spacing': 0, // Off in favor of prettier/prettier
    'constructor-super': 2,
    'generator-star-spacing': 0, // Off in favor of prettier/prettier
    'no-class-assign': 2,
    'no-confusing-arrow': 0, // Doesn't seem useful
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-restricted-exports': 2,
    'no-restricted-imports': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2, // See https://github.com/prettier/eslint-config-prettier#special-rules
    'prefer-const': 2,
    'prefer-destructuring': 2,
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2,
    'rest-spread-spacing': 0, // Off in favor of prettier/prettier
    'sort-imports': 0, // Off in favor of simple-import-sort/sort
    'symbol-description': 2,
    'template-curly-spacing': 0, // Off in favor of prettier/prettier
    'yield-star-spacing': 0, // Off in favor of prettier/prettier
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/ban-tslint-comment': 2,
    '@typescript-eslint/ban-types': 2,
    '@typescript-eslint/class-literal-property-style': 2,
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/consistent-type-definitions': [2, 'interface'],
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/explicit-module-boundary-types': 2,
    '@typescript-eslint/member-delimiter-style': 0, // Off in favor of prettier/prettier
    '@typescript-eslint/member-ordering': 2,
    '@typescript-eslint/method-signature-style': 2,
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I']
      }
    ],
    '@typescript-eslint/no-base-to-string': [
      2,
      { ignoredTypeNames: ['RegExp', 'URLSearchParams'] }
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': 2,
    '@typescript-eslint/no-dynamic-delete': 2,
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-extra-non-null-assertion': 2,
    '@typescript-eslint/no-extraneous-class': 2,
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-implied-eval': 2,
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-invalid-void-type': 2,
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-misused-promises': 2,
    '@typescript-eslint/no-namespace': 2,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/no-parameter-properties': 2,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-this-alias': 2,
    '@typescript-eslint/no-throw-literal': 2,
    '@typescript-eslint/no-type-alias': 2,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
    '@typescript-eslint/no-unnecessary-condition': 2,
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/no-unnecessary-type-arguments': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/no-unsafe-assignment': 2,
    '@typescript-eslint/no-unsafe-call': 2,
    '@typescript-eslint/no-unsafe-member-access': 2,
    '@typescript-eslint/no-unsafe-return': 2,
    '@typescript-eslint/no-unused-vars-experimental': 2,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/prefer-for-of': 0, // Turned off for performance reasons
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-includes': 2,
    '@typescript-eslint/prefer-namespace-keyword': 2,
    '@typescript-eslint/prefer-nullish-coalescing': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-readonly': 2,
    '@typescript-eslint/prefer-readonly-parameter-types': 0, // This rule seems painful
    '@typescript-eslint/prefer-reduce-type-parameter': 2,
    '@typescript-eslint/prefer-regexp-exec': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/prefer-ts-expect-error': 2,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/restrict-plus-operands': 2,
    '@typescript-eslint/restrict-template-expressions': 2,
    '@typescript-eslint/strict-boolean-expressions': 0, // This rule seems painful
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/triple-slash-reference': 2,
    '@typescript-eslint/type-annotation-spacing': 0, // Off in favor of prettier/prettier
    '@typescript-eslint/typedef': [
      2,
      {
        arrayDestructuring: false,
        arrowParameter: false, // This could be useful but also seems like overkill
        memberVariableDeclaration: true,
        objectDestructuring: false,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: false
      }
    ],
    '@typescript-eslint/unbound-method': 2,
    '@typescript-eslint/unified-signatures': 2,
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
    '@typescript-eslint/brace-style': 0, // Off in favor of prettier/prettier
    '@typescript-eslint/comma-spacing': 0, // Off in favor of prettier/prettier
    '@typescript-eslint/default-param-last': 2,
    '@typescript-eslint/dot-notation': 2,
    '@typescript-eslint/func-call-spacing': 0, // Off in favor of prettier/prettier
    '@typescript-eslint/indent': 0, // Off in favor of prettier/prettier
    '@typescript-eslint/init-declarations': 0, // This could be useful
    '@typescript-eslint/keyword-spacing': 0, // Off in favor of prettier/prettier
    '@typescript-eslint/lines-between-class-members': 2,
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-dupe-class-members': 2,
    '@typescript-eslint/no-empty-function': 2,
    '@typescript-eslint/no-extra-parens': 0, // Off in favor of prettier/prettier
    '@typescript-eslint/no-extra-semi': 0, // Off in favor of prettier/prettier
    '@typescript-eslint/no-invalid-this': 2,
    '@typescript-eslint/no-loss-of-precision': 2,
    '@typescript-eslint/no-magic-numbers': 0, // Doesn't seem useful
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true
      }
    ],
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/quotes': [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false
      }
    ],
    '@typescript-eslint/require-await': 2,
    '@typescript-eslint/return-await': 2,
    '@typescript-eslint/semi': 0, // Off in favor of prettier/prettier
    '@typescript-eslint/space-before-function-paren': 0, // Off in favor of prettier/prettier
    // https://www.npmjs.com/package/eslint-plugin-cumul8#list-of-supported-rules
    'cumul8/alphabetical-destructuring': 2,
    'cumul8/alphabetical-stylesheets': 2,
    'cumul8/inefficient-for-each': 2,
    'cumul8/inefficient-for-loop': 2,
    // https://github.com/benmosher/eslint-plugin-import#static-analysis
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/no-restricted-paths': 2,
    'import/no-absolute-path': 2,
    'import/no-dynamic-require': 2,
    'import/no-internal-modules': 0, // Allowing use of internal modules
    'import/no-webpack-loader-syntax': 2,
    'import/no-self-import': 2,
    'import/no-cycle': 2,
    'import/no-useless-path-segments': 2,
    'import/no-relative-parent-imports': 0, // Allowing use of relative parent imports
    // https://github.com/benmosher/eslint-plugin-import#helpful-warnings
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-deprecated': 2,
    'import/no-extraneous-dependencies': 2,
    'import/no-mutable-exports': 2,
    'import/no-unused-modules': 2,
    // https://github.com/benmosher/eslint-plugin-import#module-systems
    'import/unambiguous': 2,
    'import/no-commonjs': 2,
    'import/no-amd': 2,
    'import/no-nodejs-modules': 2,
    // https://github.com/benmosher/eslint-plugin-import#style-guide
    'import/first': 2,
    'import/exports-last': 2,
    'import/no-duplicates': 2,
    'import/no-namespace': 2,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/order': 0, // Off in favor of simple-import-sort/sort
    'import/newline-after-import': 2,
    'import/prefer-default-export': 2,
    'import/max-dependencies': 0, // Doesn't seem useful
    'import/no-unassigned-import': 2,
    'import/no-named-default': 2,
    'import/no-default-export': 0, // Off in favor of import/prefer-default-export
    'import/no-named-export': 0, // Off in favor of import/prefer-default-export
    'import/no-anonymous-default-export': 2,
    'import/group-exports': 2,
    'import/dynamic-import-chunkname': 2,
    // https://github.com/TristonJ/eslint-plugin-prefer-arrow#configuration
    'prefer-arrow/prefer-arrow-functions': [
      2,
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
        allowStandaloneDeclarations: false
      }
    ],
    // https://github.com/prettier/eslint-plugin-prettier#options
    'prettier/prettier': [
      2,
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    'react/boolean-prop-naming': [2, { propTypeNames: ['bool'], validateNested: true }],
    'react/button-has-type': 2,
    'react/default-props-match-prop-types': 2,
    'react/destructuring-assignment': 2,
    'react/display-name': 2,
    'react/forbid-component-props': [2, { forbid: ['style'] }],
    'react/forbid-dom-props': [2, { forbid: ['style'] }],
    'react/forbid-elements': 2,
    'react/forbid-foreign-prop-types': 2,
    'react/forbid-prop-types': 2,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/no-access-state-in-setstate': 2,
    'react/no-adjacent-inline-elements': 2,
    'react/no-array-index-key': 2,
    'react/no-children-prop': 2,
    'react/no-danger': 2,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 2,
    'react/no-redundant-should-component-update': 2,
    'react/no-render-return-value': 2,
    'react/no-set-state': 2,
    'react/no-string-refs': 2,
    'react/no-this-in-sfc': 2,
    'react/no-typos': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/no-unsafe': 2,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/no-will-update-set-state': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-read-only-props': 2,
    'react/prefer-stateless-function': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 2,
    'react/require-optimization': 2,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/sort-prop-types': 2,
    'react/state-in-constructor': 2,
    'react/static-property-placement': 2,
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2,
    // https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
    'react/jsx-boolean-value': 2,
    'react/jsx-child-element-spacing': 0, // Off in favor of prettier/prettier
    'react/jsx-closing-bracket-location': 0, // Off in favor of prettier/prettier
    'react/jsx-closing-tag-location': 0, // Off in favor of prettier/prettier
    'react/jsx-curly-brace-presence': 2,
    'react/jsx-curly-newline': 0, // Off in favor of prettier/prettier
    'react/jsx-curly-spacing': 0, // Off in favor of prettier/prettier
    'react/jsx-equals-spacing': 0, // Off in favor of prettier/prettier
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.tsx']
      }
    ],
    'react/jsx-first-prop-new-line': 0, // Off in favor of prettier/prettier
    'react/jsx-fragments': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-indent': 0, // Off in favor of prettier/prettier
    'react/jsx-indent-props': 0, // Off in favor of prettier/prettier
    'react/jsx-key': 2,
    'react/jsx-max-depth': [2, { max: 5 }],
    'react/jsx-max-props-per-line': 0, // Off in favor of prettier/prettier
    'react/jsx-no-bind': [
      2,
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false
      }
    ],
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 2,
    'react/jsx-no-script-url': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-one-expression-per-line': 0, // Off in favor of prettier/prettier
    'react/jsx-pascal-case': [2, { allowAllCaps: true }],
    'react/jsx-props-no-multi-spaces': 0, // Off in favor of prettier/prettier
    'react/jsx-props-no-spreading': 2,
    'react/jsx-sort-default-props': 2,
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false
      }
    ],
    // 'react/jsx-space-before-closing': 2, // Deprecated
    'react/jsx-tag-spacing': 0, // Off in favor of prettier/prettier
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 0, // Off in favor of prettier/prettier
    // https://reactjs.org/docs/hooks-rules.html#eslint-plugin
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    // https://github.com/lydell/eslint-plugin-simple-import-sort#usage
    'simple-import-sort/sort': 2
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        // Check for tsconfig in root and in nested directories
        directory: [
          '../../../tsconfig.json',
          '../../../**/tsconfig.json',
          '../../../**/typescript.config.json'
        ]
      },
      webpack: {}
    },
    react: {
      version: 'detect'
    }
  }
};
