export default `
.expand-vertical-enter,
.expand-vertical-appear {
  transform-origin: top;
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: scaleY(0);
  opacity: 0;
}
.expand-vertical-enter-active,
.expand-vertical-appear-active {
  transform: scaleY(1);
  opacity: 1;
}
.expand-vertical-exit {
  transform-origin: top;
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: scaleY(1);
  opacity: 1;
}
.expand-vertical-exit-active {
  transform: scaleY(0);
  opacity: 0;
}

.expand-horizontal-enter,
.expand-horizontal-appear {
  transform-origin: left;
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: scaleX(0);
  opacity: 0;
}
.expand-horizontal-enter-active,
.expand-horizontal-appear-active {
  transform: scaleX(1);
  opacity: 1;
}
.expand-horizontal-exit {
  transform-origin: left;
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: scaleX(1);
  opacity: 1;
}
.expand-horizontal-exit-active {
  transform: scaleX(0);
  opacity: 0;
}

.scale-enter,
.scale-appear {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: scale(0);
  opacity: 0;
}
.scale-enter-active,
.scale-appear-active {
  transform: scale(1);
  opacity: 1;
}
.scale-exit {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: scale(1);
  opacity: 1;
}
.scale-exit-active {
  transform: scale(0);
  opacity: 0;
}

.flip-right-enter,
.flip-right-appear {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: rotate3d(0, 1, 0, -90deg);
  opacity: 0;
}
.flip-right-enter-active,
.flip-right-appear-active {
  transform: rotate3d(0, 1, 0, 0deg);
  opacity: 1;
}
.flip-right-exit {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: rotate3d(0, 1, 0, 0deg);
  opacity: 1;
}
.flip-right-exit-active {
  transform: rotate3d(0, 1, 0, -90deg);
  opacity: 0;
}

.flip-left-enter,
.flip-left-appear {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: rotate3d(0, 1, 0, 90deg);
  opacity: 0;
}
.flip-left-enter-active,
.flip-left-appear-active {
  transform: rotate3d(0, 1, 0, 0deg);
  opacity: 1;
}
.flip-left-exit {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: rotate3d(0, 1, 0, 0deg);
  opacity: 1;
}
.flip-left-exit-active {
  transform: rotate3d(0, 1, 0, 90deg);
  opacity: 0;
}

.flip-top-enter,
.flip-top-appear {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: rotate3d(1, 0, 0, 90deg);
  opacity: 0;
}
.flip-top-enter-active,
.flip-top-appear-active {
  transform: rotate3d(1, 0, 0, 0deg);
  opacity: 1;
}
.flip-top-exit {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: rotate3d(1, 0, 0, 0deg);
  opacity: 1;
}
.flip-top-exit-active {
  transform: rotate3d(1, 0, 0, 90deg);
  opacity: 0;
}

.flip-bottom-enter,
.flip-bottom-appear {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: rotate3d(1, 0, 0, -90deg);
  opacity: 0;
}
.flip-bottom-enter-active,
.flip-bottom-appear-active {
  transform: rotate3d(1, 0, 0, 0deg);
  opacity: 1;
}
.flip-bottom-exit {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: rotate3d(1, 0, 0, 0deg);
  opacity: 1;
}
.flip-bottom-exit-active {
  transform: rotate3d(1, 0, 0, -90deg);
  opacity: 0;
}

.rotate-enter,
.rotate-appear {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: rotate(180deg);
  opacity: 0;
}
.rotate-enter-active,
.rotate-appear-active {
  transform: rotate(360deg);
  opacity: 1;
}
.rotate-exit {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: rotate(360deg);
  opacity: 1;
}
.rotate-exit-active {
  transform: rotate(180deg);
  opacity: 0;
}

.slide-top-enter,
.slide-top-appear {
  transform: translate(0, -16px);
  opacity: 0;
  transition: transform 300ms ease-in, opacity 300ms ease-in;
}
.slide-top-enter-active,
.slide-top-appear-active {
  transform: translate(0);
  opacity: 1;
}
.slide-top-exit {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: translate(0);
  opacity: 1;
}
.slide-top-exit-active {
  transform: translate(0, -16px);
  opacity: 0;
}

.slide-left-enter,
.slide-left-appear {
  transform: translate(-16px, 0);
  opacity: 0;
  transition: transform 300ms ease-in, opacity 300ms ease-in;
}
.slide-left-enter-active,
.slide-left-appear-active {
  transform: translate(0);
  opacity: 1;
}
.slide-left-exit {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: translate(0);
  opacity: 1;
}
.slide-left-exit-active {
  transform: translate(-16px, 0);
  opacity: 0;
}

.slide-right-enter,
.slide-right-appear {
  transform: translate(16px, 0);
  opacity: 0;
  transition: transform 300ms ease-in, opacity 300ms ease-in;
}
.slide-right-enter-active,
.slide-right-appear-active {
  transform: translate(0);
  opacity: 1;
}
.slide-right-exit {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: translate(0);
  opacity: 1;
}
.slide-right-exit-active {
  transform: translate(16px, 0);
  opacity: 0;
}

.slide-bottom-enter,
.slide-bottom-appear {
  transform: translate(0, 16px);
  opacity: 0;
  transition: transform 300ms ease-in, opacity 300ms ease-in;
}
.slide-bottom-enter-active,
.slide-bottom-appear-active {
  transform: translate(0);
  opacity: 1;
}
.slide-bottom-exit {
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  transform: translate(0);
  opacity: 1;
}
.slide-bottom-exit-active {
  transform: translate(0, 16px);
  opacity: 0;
}`;