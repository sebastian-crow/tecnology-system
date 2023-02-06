const { createApp } = Vue;

createApp({
  data() {
    return {
      helloWorld: "Hello world",
    };
  },
  methods: {},
  mounted() {
    console.log("App has been mounted");
  },
}).mount("#root");
