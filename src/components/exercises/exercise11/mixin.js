export default {
  filters: {
    reversedMixin(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reversedTextDataMixin() {
      return this.textData
        .split("")
        .reverse()
        .join("");
    },
    addLengthToTextDataMixin() {
      return `${this.textData} (${this.textData.length})`;
    }
  }
};
