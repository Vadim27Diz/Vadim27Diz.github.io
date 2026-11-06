import type { CaseStudyData, CaseVideoBlock } from "./blocks";

const video: CaseVideoBlock = {
  type: "video",
  src: "/video/pixel-fx/preview.mp4",
  webm: "/video/pixel-fx/preview.webm",
  poster: "/images/pixel-fx/preview-poster.webp",
  alt: "Pixel FX — интерфейс плагина с пиксельным конвейером эффектов",
  width: 1024,
  height: 512,
  shape: "wide",
};

export const pixelFx: Record<"ru" | "en", CaseStudyData> = {
  ru: {
    slug: "pixel-fx",
    title: "Pixel FX",
    subtitle: "Figma плагин",
    blocks: [
      video,

      {
        type: "text",
        groups: [
          {
            pairs: [
              { label: "продукт", value: "Pixel FX" },
              { label: "платформа", value: "Figma" },
              { label: "роль", value: "разработка плагина" },
              { label: "год", value: "2025" },
            ],
          },
          {
            heading: "Коротко",
            lines: [
              "Плагин для Figma, который переносит на холст полноценный пиксельный конвейер эффектов: альфа-ключ, уровни, реколор, тон/насыщенность, блендинг, бесшовный тайлинг и автообрезку. Обрабатывает выделенные слои пакетно, с живым превью и одним отменяемым действием на всю пачку.",
            ],
          },
          {
            heading: "Что делает",
            lines: [
              "— Семь модулей в фиксированном порядке конвейера: извлечение альфы (пять режимов, включая хромакей с допуском, размытием края и чокером), уровни (LUT на 256 значений — минимум/гамма/максимум), реколор (умножение на цвет, двухцветный градиент, тритон), тон/насыщенность (полный цикл RGB→HSL→RGB), блендинг (наложение слоя на себя с дробным числом итераций), бесшовный тайлинг со сдвигом и растушёвкой шва, плюс ресайз и автообрезка прозрачных полей.",
              "— «Применить» обрабатывает всё текущее выделение слоёв разом: прогресс, отмена, один Undo на весь пакет, автоматический обход ограничения Figma в 4096 px по стороне.",
              "— Тяжёлые вычисления (декодирование, сам конвейер, кодирование PNG) вынесены в Web Worker — интерфейс не подвисает даже на изображениях 4096×4096.",
              "— Пресеты сохраняются локально и доступны во всех файлах; настройки, с которыми обработан конкретный слой, запоминаются на самом слое и подставляются при повторном выборе.",
            ],
          },
          {
            heading: "Стек",
            lines: ["create-figma-plugin (Preact + create-figma-plugin/ui), TypeScript, Figma Plugin API."],
          },
          {
            link: {
              label: "Ссылка на плагин в Figma Community",
              href: "https://www.figma.com/community/plugin/1677704158330469128",
            },
          },
        ],
      },
    ],
  },
  en: {
    slug: "pixel-fx",
    title: "Pixel FX",
    subtitle: "Figma plugin",
    blocks: [
      { ...video, alt: "Pixel FX — the plugin's pixel effects pipeline interface" },

      {
        type: "text",
        groups: [
          {
            pairs: [
              { label: "product", value: "Pixel FX" },
              { label: "platform", value: "Figma" },
              { label: "role", value: "Plugin development" },
              { label: "year", value: "2025" },
            ],
          },
          {
            heading: "In short",
            lines: [
              "A Figma plugin that brings a full pixel-effects pipeline onto the canvas: alpha key, levels, recolor, hue/saturation, blending, seamless tiling, and auto-crop. Processes selected layers in a batch, with a live preview and one undoable action for the whole batch.",
            ],
          },
          {
            heading: "What it does",
            lines: [
              "— Seven modules in a fixed pipeline order: alpha extraction (five modes, including chroma key with tolerance, edge feather, and choke), levels (a 256-value LUT — min/gamma/max), recolor (color multiply, two-color gradient, tritone), hue & saturation (a full RGB→HSL→RGB cycle), blend (layer-on-itself overlay with a fractional iteration count), seamless tiling with offset and seam feathering, plus resize and auto-crop of transparent margins.",
              "— “Apply” processes the entire current layer selection at once: progress, cancel, one Undo for the whole batch, and an automatic workaround for Figma's 4096 px side limit.",
              "— Heavy computation (decoding, the pipeline itself, PNG encoding) runs in a Web Worker — the UI stays responsive even on 4096×4096 images.",
              "— Presets are saved locally and available across every file; the settings a given layer was processed with are remembered on the layer itself and reapplied the next time it's selected.",
            ],
          },
          {
            heading: "Stack",
            lines: ["create-figma-plugin (Preact + create-figma-plugin/ui), TypeScript, Figma Plugin API."],
          },
          {
            link: {
              label: "Plugin link on Figma Community",
              href: "https://www.figma.com/community/plugin/1677704158330469128",
            },
          },
        ],
      },
    ],
  },
};
