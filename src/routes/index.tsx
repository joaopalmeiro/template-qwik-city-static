import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Start here</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "template-qwik-city-static",
  meta: [
    {
      name: "description",
      content: "Opinionated Qwik City + SSG template for new projects.",
    },
  ],
};
