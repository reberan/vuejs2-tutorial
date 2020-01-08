<template>
  <div class="container">
    <h1>Exercise 5</h1>
    <div class="row">
      <div class="col-xs-12">
        <p class="task">
          1) Hook up the button to toggle the display of the two paragraphs. Use
          both v-if and v-show and inspect the elements to see the difference
        </p>
        <div class="solution">
          <button @click="turnedOn = !turnedOn">Toggle</button>
          <p v-if="turnedOn">You either see me ...</p>
          <p v-else>...or me</p>
          <p v-show="turnedOn">You either see me ...</p>
          <p v-show="!turnedOn">...or me</p>
        </div>
        <hr />
        <p class="task">
          2) Output an &lt;ul&gt; of array elements of your choice. Also print
          the index of each element.
        </p>
        <ul class="solution">
          <li v-for="todo of todolist" :key="todo.id">
            Task: {{ todo.id }}, {{ todo.title }}, status:
            {{ todo.completed ? "completed" : "open" }}
          </li>
        </ul>
        <hr />
        <p class="task">
          3) Print all key-value pairs of the following object: {title: 'Lord of
          the Rings', author: 'J.R.R. Tolkiens', books: '3'}. Also print the
          index of each item.
        </p>
        <ul class="solution">
          <li v-for="(value, attribute, index) in book" :key="index">
            {{ index }}.{{ attribute }}: {{ value }}
          </li>
        </ul>
        <hr />
        <p class="task">
          4) Print the following object (only the values) and also create a
          nested loop for the array: {name: 'TESTOBJECT', data: [1.67, 1.33,
          0.98, 2.21]} (hint: use v-for and v-if to achieve this)
        </p>
        <ul class="solution">
          <li v-for="(value, attribute, index) in testObject" :key="index">
            <span v-if="typeof value === 'string'"
              >{{ index }}. {{ attribute }}: {{ value }}</span
            >
            <ul v-else>
              <li v-for="(value, index) of testObject[attribute]" :key="index">
                {{ index }}. {{ value }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exercise5",
  data: function() {
    return {
      todolist: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true
        }
      ],
      turnedOn: false,
      book: {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkiens",
        books: "3"
      },
      testObject: { name: "TESTOBJECT", data: [1.67, 1.33, 0.98, 2.21] }
    };
  }
};
</script>

<style scoped lang="stylus">
.task
  color blue
.solution
  color green
</style>
