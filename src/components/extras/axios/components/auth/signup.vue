<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input" :class="{ invalid: $v.email.$error }">
          <label for="email">Mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
            @blur="$v.email.$touch()"
          />
          <div class="invalid" v-if="!$v.email.email">
            Please provide a valid email
          </div>
          <div class="invalid" v-if="!$v.email.required">
            This field must not be empty
          </div>
          <div class="invalid" v-if="!$v.email.unique">
            This provided email is already in use
          </div>
        </div>

        <div class="input" :class="{ invalid: $v.age.$error }">
          <label for="age">Your Age</label>
          <input
            type="number"
            id="age"
            v-model.number="age"
            @blur="$v.age.$touch()"
          />
          <div class="invalid" v-if="!$v.age.minValue">
            You must be at least {{ $v.age.$params.minValue.min }} age.
          </div>
        </div>

        <div class="input" :class="{ invalid: $v.password.$error }">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            @blur="$v.password.$touch()"
          />
          <div class="invalid" v-if="!$v.password.required">
            Password is required.
          </div>
          <div class="invalid" v-if="!$v.password.minLength">
            Password must have at least
            {{ $v.password.$params.minLength.min }} letters.
          </div>
        </div>

        <div class="input" :class="{ invalid: $v.confirmPassword.$error }">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
            @blur="$v.confirmPassword.$touch()"
          />
          <div class="invalid" v-if="!$v.confirmPassword.sameAsPassword">
            Passwords must be identical.
          </div>
        </div>

        <div class="input">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
        </div>

        <div class="hobbies">
          <h3>Add some Hobbies</h3>
          <button @click="onAddHobby" type="button">Add Hobby</button>
          <div class="hobby-list">
            <div
              class="input"
              v-for="(hobbyInput, index) in hobbyInputs"
              :class="{ invalid: $v.hobbyInputs.$each[index].$error }"
              :key="hobbyInput.id"
            >
              <label :for="hobbyInput.id">Hobby #{{ index }}</label>
              <input
                type="text"
                :id="hobbyInput.id"
                @blur="$v.hobbyInputs.$each[index].value.$touch()"
                v-model="hobbyInput.value"
              />
              <button @click="onDeleteHobby(hobbyInput.id)" type="button">
                X
              </button>
            </div>
          </div>
          <p v-if="!$v.hobbyInputs.minLength">
            You have to specify at least
            {{ $v.hobbyInputs.$params.minLength.min }} hobbies
          </p>
          <p v-if="!$v.hobbyInputs.required">
            Please add hobbies
          </p>
        </div>

        <div class="input inline" :class="{ invalid: $v.terms.$invalid }">
          <input
            type="checkbox"
            id="terms"
            v-model="terms"
            @change="$v.terms.$touch()"
          />
          <label for="terms"> Accept Terms of Use</label>
        </div>
        <div class="submit">
          <button type="submit" :disabled="$v.$invalid">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @link https://vuelidate.js.org/
import {
  required,
  email,
  sameAs,
  minLength,
  minValue,
  numeric,
  requiredUnless
} from "vuelidate/lib/validators";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_FIREBASE_BASE_URL_TUTORIAL
});

export default {
  data() {
    return {
      email: "",
      age: null,
      password: "",
      confirmPassword: "",
      country: "usa",
      hobbyInputs: [],
      terms: false
    };
  },
  validations: {
    email: {
      required,
      email,
      unique: value => {
        if (value === "") return true;
        return instance
          .get('/users.json?orderBy="email"&equalTo="' + value + '"')
          .then(response => {
            return Object.keys(response.data).length === 0;
          });
      }
    },
    age: {
      minValue: minValue(18),
      required,
      numeric
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAsPassword: sameAs("password")
    },
    terms: {
      required: requiredUnless(vm => {
        return vm.country === "germany";
      })
    },
    hobbyInputs: {
      minLength: minLength(2),
      $each: {
        value: {
          required,
          minLength: minLength(5)
        }
      }
    }
  },
  methods: {
    onAddHobby() {
      const newHobby = {
        id: Math.random() * Math.random() * 1000,
        value: ""
      };
      this.hobbyInputs.push(newHobby);
    },
    onDeleteHobby(id) {
      this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id);
    },
    onSubmit() {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        country: this.country,
        hobbies: this.hobbyInputs.map(hobby => hobby.value),
        terms: this.terms
      };
      this.$store.dispatch("auth/signup", formData);
    }
  }
};
</script>

<style scoped>
.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.input.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}

.input.invalid label {
  color: red;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.hobbies button {
  border: 1px solid #521751;
  background: #521751;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}

.hobbies button:hover,
.hobbies button:active {
  background-color: #8d4288;
}

.hobbies input {
  width: 90%;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>
