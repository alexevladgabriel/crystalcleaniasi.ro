<script lang="ts">
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import "photoswipe/style.css";
  import { onMount } from "svelte";
  import { identity } from "svelte/internal";

  // interface Image {
  //   asset_id: string;
  //   public_id: string;
  //   format: string;
  //   version: number;
  //   resource_type: string;
  //   type: string;
  //   created_at: string;
  //   bytes: number;
  //   width: number;
  //   height: number;
  //   folder: string;
  //   url: string;
  //   secure_url: string;
  // }

  // interface CloudResponse {
  //   resources: Image[];
  //   next_cursor: string;
  //   // rate_limit_allowed: number;
  //   // rate_limit_remaining: number;
  //   // rate_limit_reset_at: string;
  //   // total_count: number;
  //   error?: {
  //     message: string;
  //   };
  // }

  interface Image {
    name: string;
    path: string;
    size: {
      width: number;
      height: number;
    };
  }
  interface Results {
    images: Image[];
  }

  function paginate(array: any[], page_size: number, page_number: number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  function setPage(page: number) {
    page++;
  }

  export let results: Results;
  let lightbox: {
    destroy: () => void;
    addFilter: (arg0: string, arg1: (numItems: number) => number) => void;
    init: () => void;
  };
  let page = 1;

  onMount(() => {
    lightbox = new PhotoSwipeLightbox({
      gallery: "#my-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.addFilter("numItems", (numItems: number) => {
      return results.images.length;
    });
    lightbox.init();
  });
</script>

<div class="pswp-gallery mt-8 grid grid-cols-1 gap-6 md:grid-cols-5" id="my-gallery">
  {#each paginate(results.images, 10, page) as image}
    <a
      href={"/assets/imgs/" + image.path}
      data-pswp-width={image.size.width}
      data-pswp-height={image.size.height}
      target="_blank"
      rel="noreferrer"
    >
      <img class="aspect-square object-center" src={"/assets/imgs/" + image.path} alt={image.name} loading="lazy" />
    </a>
  {/each}
</div>
<button class="px-1.5 py-3 bg-green-400" on:click={() => setPage(page)}>Load more</button>
