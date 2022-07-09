module.exports = {
  extends: ["@snout/react"],
  rules: {
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^@docusaurus", "^@site", "^@theme"],
      },
    ],
  },
};
