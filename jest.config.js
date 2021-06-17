module.exports = {
  // moduleFileExtensions: ['vue', 'js', 'ts'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom', //'jest-environment-jsdom-sixteen', //'jsdom',
  transform: {
    // vue 文件用 vue-jest 转换
    '^.+\\.vue$': 'vue-jest', 

    // ts 文件用 ts-jest 转换
    '^.+\\.ts$': 'ts-jest' ,
    '^.+\\.(t|j)sx?$': [
      'babel-jest',
      {
        presets: [['@babel/preset-env'], '@babel/preset-typescript'],
        plugins: [
          '@vue/babel-plugin-jsx',
          '@babel/plugin-proposal-class-properties',
        ],
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(ant-design-vue|@ant-design|vue-types|lodash-es|echarts|zrender)/)',
  ],
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$'
}
