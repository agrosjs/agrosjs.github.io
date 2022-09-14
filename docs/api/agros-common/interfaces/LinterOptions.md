[@agros/common](../index.md) / LinterOptions

# Interface: LinterOptions

## Hierarchy

- `Options`

  ↳ **`LinterOptions`**

## Table of contents

### Properties

- [allowInlineConfig](LinterOptions.md#allowinlineconfig)
- [baseConfig](LinterOptions.md#baseconfig)
- [cache](LinterOptions.md#cache)
- [cacheLocation](LinterOptions.md#cachelocation)
- [cacheStrategy](LinterOptions.md#cachestrategy)
- [cwd](LinterOptions.md#cwd)
- [errorOnUnmatchedPattern](LinterOptions.md#erroronunmatchedpattern)
- [extensions](LinterOptions.md#extensions)
- [fix](LinterOptions.md#fix)
- [fixTypes](LinterOptions.md#fixtypes)
- [globInputPaths](LinterOptions.md#globinputpaths)
- [ignore](LinterOptions.md#ignore)
- [ignorePath](LinterOptions.md#ignorepath)
- [overrideConfig](LinterOptions.md#overrideconfig)
- [overrideConfigFile](LinterOptions.md#overrideconfigfile)
- [plugins](LinterOptions.md#plugins)
- [postPlugins](LinterOptions.md#postplugins)
- [prePlugins](LinterOptions.md#preplugins)
- [reportUnusedDisableDirectives](LinterOptions.md#reportunuseddisabledirectives)
- [resolvePluginsRelativeTo](LinterOptions.md#resolvepluginsrelativeto)
- [rulePaths](LinterOptions.md#rulepaths)
- [useEslintrc](LinterOptions.md#useeslintrc)

## Properties

### <a id="allowinlineconfig" name="allowinlineconfig"></a> allowInlineConfig

• `Optional` **allowInlineConfig**: `boolean`

#### Inherited from

ESLint.Options.allowInlineConfig

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:865

___

### <a id="baseconfig" name="baseconfig"></a> baseConfig

• `Optional` **baseConfig**: `Config`<`RulesRecord`\>

#### Inherited from

ESLint.Options.baseConfig

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:866

___

### <a id="cache" name="cache"></a> cache

• `Optional` **cache**: `boolean`

#### Inherited from

ESLint.Options.cache

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:880

___

### <a id="cachelocation" name="cachelocation"></a> cacheLocation

• `Optional` **cacheLocation**: `string`

#### Inherited from

ESLint.Options.cacheLocation

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:881

___

### <a id="cachestrategy" name="cachestrategy"></a> cacheStrategy

• `Optional` **cacheStrategy**: ``"content"`` \| ``"metadata"``

#### Inherited from

ESLint.Options.cacheStrategy

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:882

___

### <a id="cwd" name="cwd"></a> cwd

• `Optional` **cwd**: `string`

#### Inherited from

ESLint.Options.cwd

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:857

___

### <a id="erroronunmatchedpattern" name="erroronunmatchedpattern"></a> errorOnUnmatchedPattern

• `Optional` **errorOnUnmatchedPattern**: `boolean`

#### Inherited from

ESLint.Options.errorOnUnmatchedPattern

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:858

___

### <a id="extensions" name="extensions"></a> extensions

• `Optional` **extensions**: `string`[]

#### Inherited from

ESLint.Options.extensions

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:859

___

### <a id="fix" name="fix"></a> fix

• `Optional` **fix**: `boolean` \| (`message`: `LintMessage`) => `boolean`

#### Inherited from

ESLint.Options.fix

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:876

___

### <a id="fixtypes" name="fixtypes"></a> fixTypes

• `Optional` **fixTypes**: (``"problem"`` \| ``"suggestion"`` \| ``"layout"``)[]

#### Inherited from

ESLint.Options.fixTypes

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:877

___

### <a id="globinputpaths" name="globinputpaths"></a> globInputPaths

• `Optional` **globInputPaths**: `boolean`

#### Inherited from

ESLint.Options.globInputPaths

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:860

___

### <a id="ignore" name="ignore"></a> ignore

• `Optional` **ignore**: `boolean`

#### Inherited from

ESLint.Options.ignore

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:861

___

### <a id="ignorepath" name="ignorepath"></a> ignorePath

• `Optional` **ignorePath**: `string`

#### Inherited from

ESLint.Options.ignorePath

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:862

___

### <a id="overrideconfig" name="overrideconfig"></a> overrideConfig

• `Optional` **overrideConfig**: `Config`<`RulesRecord`\>

#### Inherited from

ESLint.Options.overrideConfig

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:867

___

### <a id="overrideconfigfile" name="overrideconfigfile"></a> overrideConfigFile

• `Optional` **overrideConfigFile**: `string`

#### Inherited from

ESLint.Options.overrideConfigFile

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:868

___

### <a id="plugins" name="plugins"></a> plugins

• `Optional` **plugins**: `Record`<`string`, `Plugin`\>

#### Inherited from

ESLint.Options.plugins

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:869

___

### <a id="postplugins" name="postplugins"></a> postPlugins

• `Optional` **postPlugins**: [`LinterPlugin`](../index.md#linterplugin)[]

#### Defined in

[packages/agros-common/src/linters.ts:12](https://github.com/agrosjs/agros/blob/01b3301/packages/agros-common/src/linters.ts#L12)

___

### <a id="preplugins" name="preplugins"></a> prePlugins

• `Optional` **prePlugins**: [`LinterPlugin`](../index.md#linterplugin)[]

#### Defined in

[packages/agros-common/src/linters.ts:11](https://github.com/agrosjs/agros/blob/01b3301/packages/agros-common/src/linters.ts#L11)

___

### <a id="reportunuseddisabledirectives" name="reportunuseddisabledirectives"></a> reportUnusedDisableDirectives

• `Optional` **reportUnusedDisableDirectives**: `RuleLevel`

#### Inherited from

ESLint.Options.reportUnusedDisableDirectives

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:870

___

### <a id="resolvepluginsrelativeto" name="resolvepluginsrelativeto"></a> resolvePluginsRelativeTo

• `Optional` **resolvePluginsRelativeTo**: `string`

#### Inherited from

ESLint.Options.resolvePluginsRelativeTo

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:871

___

### <a id="rulepaths" name="rulepaths"></a> rulePaths

• `Optional` **rulePaths**: `string`[]

#### Inherited from

ESLint.Options.rulePaths

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:872

___

### <a id="useeslintrc" name="useeslintrc"></a> useEslintrc

• `Optional` **useEslintrc**: `boolean`

#### Inherited from

ESLint.Options.useEslintrc

#### Defined in

common/temp/node_modules/.pnpm/@types+eslint@8.4.5/node_modules/@types/eslint/index.d.ts:873
