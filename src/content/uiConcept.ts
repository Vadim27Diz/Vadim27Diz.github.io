export type UIConceptItem =
  | {
      type: "video";
      src: string;
      webm: string;
      poster: string;
      width: number;
      height: number;
    }
  | {
      type: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
    };

/**
 * Порядок — Figma (node 23:9, слои video_01/Camfrog/video_03/video_02) с перестановкой
 * video_01 и video_03 по просьбе пользователя: верх-лево, верх-право, низ-лево, низ-право.
 */
export const uiConcept: UIConceptItem[] = [
  {
    type: "video",
    src: "/video/ui-concept/video-03.mp4",
    webm: "/video/ui-concept/video-03.webm",
    poster: "/video/ui-concept/video-03-poster.webp",
    width: 830,
    height: 830,
  },
  {
    type: "image",
    src: "/images/ui-concept/camfrog.webp",
    width: 830,
    height: 830,
    alt: "",
  },
  {
    type: "video",
    src: "/video/ui-concept/video-01.mp4",
    webm: "/video/ui-concept/video-01.webm",
    poster: "/video/ui-concept/video-01-poster.webp",
    width: 600,
    height: 600,
  },
  {
    type: "video",
    src: "/video/ui-concept/video-02.mp4",
    webm: "/video/ui-concept/video-02.webm",
    poster: "/video/ui-concept/video-02-poster.webp",
    width: 576,
    height: 576,
  },
];
