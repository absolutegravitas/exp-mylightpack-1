module.exports = {
  extends: ["next"],
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "import/order": "off", // Disable import sorting
    "sort-imports": "off", // Disable sort-imports rule
  },
}
