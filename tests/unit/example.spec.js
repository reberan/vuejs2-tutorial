import { shallowMount } from "@vue/test-utils";
import Exercise1 from "@/components/exercises/exercise1/";

describe("Exercise1.vue", () => {
  it("Renders correctly", () => {
    const wrapper = shallowMount(Exercise1);
    expect(wrapper.text()).not.toBeNull();
  });
});
