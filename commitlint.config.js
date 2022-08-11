export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "body-max-length": [0, "always"],
        "body-max-line-length": [1, "always", 200],
    },
};
