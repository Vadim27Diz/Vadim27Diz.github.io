import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let activeLenis: Lenis | null = null;

/**
 * Мгновенный прыжок к координате скролла, безопасный при переходах
 * между роутами. Lenis создаётся один раз на всё приложение (не
 * размонтируется между Home/CaseStudyPage) — если на предыдущей
 * странице был реальный скролл колесом/тачпадом, у него остаётся
 * недоехавшая инерционная анимация к старой цели. Обычный
 * `window.scrollTo` эту анимацию не останавливает: Lenis на
 * следующем кадре просто утягивает страницу обратно к своей старой
 * цели — отсюда баг «кейс открывается с координатами главной».
 * `lenis.scrollTo(y, { immediate: true })` обнуляет velocity и
 * останавливает анимацию (`reset()` внутри Lenis), поэтому дальше
 * его raf-цикл не спорит с положением скролла.
 */
export function scrollToInstant(y: number) {
  if (activeLenis) {
    activeLenis.scrollTo(y, { immediate: true });
  } else {
    window.scrollTo(0, y);
  }
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis();
    activeLenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      activeLenis = null;
    };
  }, []);
}
