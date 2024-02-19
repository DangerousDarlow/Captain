import { test } from "vitest";
import { mount } from "@vue/test-utils";
import vuetify from "@/plugins/vuetify";
import Welcome from "./Welcome.vue";

test("renders", () => {
  const wrapper = mount(Welcome, { global: { plugins: [vuetify] } });
});
