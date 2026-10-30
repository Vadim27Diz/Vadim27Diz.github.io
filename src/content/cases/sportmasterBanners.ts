import type { CaseStudyData } from "./blocks";

/**
 * Источник — Figma «Sportmaster_build_banners» (file y3tODq0YfchuG2SvvJiVgU),
 * страница «Кейс — схемы», фрейм «Древо метрик» (node 5468:26805).
 * Сетка страницы, шапка/подвал и типографика — те же, что в шаблоне кейса
 * (docs/07-case-template.md), в стиле кейса Inta (node 293:7, файл Untitled):
 * текст и border-линии, без цветных плашек и картинок.
 */
// 2026-10-29: переехал со слага sportmaster-build-banners на sportmaster-metrics-tree —
// тот слаг теперь занимает полный кейс (sportmasterCaseStudy.ts, Figma node 216:1257),
// который ссылается сюда как на отдельный деталный разбор («Древо метрик →»).
export const sportmasterBanners: CaseStudyData = {
  slug: "sportmaster-metrics-tree",
  title: "Sportmaster",
  subtitle: "древо метрик",
  blocks: [
    {
      type: "metricsTree",
      heading: "Древо метрик",
      subtitle: "Guardrail он ничего не двигает, он не даёт расти за чужой счёт.",
      rows: [
        {
          label: "Бизнес-результат",
          cells: [
            { body: "Рекламная выручка от бизнеса" },
            { body: "Оплаченные подписки Pro. фаза 2" },
          ],
        },
        {
          label: "Мост к деньгам",
          cells: [
            {
              body: "Кампании, запущенные с нашим баннером.",
              note: "Добавлена с оговоркой — в случае ее падению непонятно, что чинить",
            },
          ],
        },
        {
          label: "North Star",
          accentLabel: true,
          innerConnector: true,
          cells: [
            { body: "Продавцы с одобренным баннером" },
            {
              heading: "Guardrail",
              body: "Доля баннеров, одобренных с первой попытки",
            },
          ],
        },
        {
          label: "Драйверы",
          cells: [
            { body: "Продавцы, отправившие хотя бы один баннер" },
            { body: "Доля отправленных, дошедших до одобрения" },
          ],
        },
        {
          label: "Диагностика",
          cells: [
            {
              heading: "Брошенные кампании",
              body: "Ушёл после отказа, не дождался вердикта, перенёс на другой день, запустил кампанию без баннера",
            },
            { body: "Среднее число проверок на одобренный баннер" },
          ],
        },
      ],
    },
  ],
};
