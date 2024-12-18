import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function fancy() {
  Fancybox.bind('[data-fancybox="gallery-1"]', {});
  Fancybox.bind('[data-fancybox="gallery-2"]', {});
  Fancybox.bind('[data-fancybox="gallery-3"]', {});
  Fancybox.bind('[data-fancybox="gallery-4"]', {});

  Fancybox.bind('[data-fancybox="certificates"]', {});
}