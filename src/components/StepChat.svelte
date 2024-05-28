<script>
  import { Input, Label } from "flowbite-svelte";
  import { appStatusInfo } from "../store";

  const { id, url, pages } = $appStatusInfo;

  let loading = false;

  const numOfImagesToShow = Math.min(pages, 4);
  const images = Array.from({ length: numOfImagesToShow }, (_, i) => {
    const page = i + 1;
    return url
      .replace("/upload/", `/upload/w_400,h_540,c_fill,pg_${page}/`)
      .replace(".pdf", ".jpg");
  });

  const handleSubmit = () => {
    loading = true;
    fetch("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        question: "¿De qué trata este documento?",
      }),
    });
  };
</script>

<div class="grid grid-cols-4 gap-2">
  {#each images as image}
    <img
      class="rounded w-full h-auto aspect-[400/540]"
      src={image}
      alt="PDF page"
    />
  {/each}
</div>

<form class="mt-8" on:submit={handleSubmit}>
  <Label for="question-input" class="block mb-2">Deja aquí tu pregunta</Label>
  <Input
    id="question-input"
    required
    placeholder="¿De qué trata este documento?"
  ></Input>
</form>
