export default `
.expand-transition-leave,
.expand-transition-appear.expand-transition-appear-active,
.expand-transition-enter.expand-transition-enter-active {
  max-height: 1000px;
  transition: max-height 0.5s ease-in-out;
}

.expand-transition-enter,
.expand-transition-appear,
.expand-transition-leave.expand-transition-leave-active {
  max-height: 0;
  transition: max-height 0.5s ease-in-out;
}

.scale-transition-appear,
.scale-transition-enter,
.scale-transition-leave {
  transition: transform 0.5s ease-in-out;
}

.scale-transition-appear,
.scale-transition-enter,
.scale-transition-leave.scale-transition-leave-active {
  transform: scale(0);
}

.scale-transition-leave,
.scale-transition-appear.scale-transition-appear-active,
.scale-transition-enter.scale-transition-enter-active {
  transform: scale(1);
}

.flip-transition-appear,
.flip-transition-enter,
.flip-transition-leave {
  transition: transform 0.5s ease-in-out;
}

.flip-transition-appear,
.flip-transition-enter,
.flip-transition-leave.flip-transition-leave-active {
  transform: rotate3d(0, 1, 0, -90deg);
}

.flip-transition-leave,
.flip-transition-appear.flip-transition-appear-active,
.flip-transition-enter.flip-transition-enter-active {
  transform: rotate3d(0, 1, 0, 0deg);
}

.fade-transition-leave,
.fade-transition-appear.fade-transition-appear-active,
.fade-transition-enter.fade-transition-enter-active {
  opacity: 1;
  transition: opacity 0.5s ease-in;
}

.fade-transition-enter,
.fade-transition-appear,
.fade-transition-leave.fade-transition-leave-active {
  opacity: 0.01;
  transition: opacity 0.5s ease-in;
}

.slide-transition > * {
  position: relative;
}

.slide-transition--top-leave,
.slide-transition--top-appear.slide-transition--top-appear-active,
.slide-transition--top-enter.slide-transition--top-enter-active {
  top: 0;
  transition: top 0.5s ease-in;
}

.slide-transition--top-enter,
.slide-transition--top-appear,
.slide-transition--top-leave.slide-transition--top-leave-active {
  top: -1000px;
  transition: top 0.5 ease-in;
}

.slide-transition--bottom-leave,
.slide-transition--bottom-appear.slide-transition--bottom-appear-active,
.slide-transition--bottom-enter.slide-transition--bottom-enter-active {
  bottom: 0;
  transition: bottom 0.5s ease-in;
}

.slide-transition--bottom-enter,
.slide-transition--bottom-appear,
.slide-transition--bottom-leave.slide-transition--bottom-leave-active {
  bottom: -1000px;
  transition: bottom 0.5 ease-in;
}

.slide-transition--left-leave,
.slide-transition--left-appear.slide-transition--left-appear-active,
.slide-transition--left-enter.slide-transition--left-enter-active {
  left: 0;
  transition: left 0.5s ease-in;
}

.slide-transition--left-enter,
.slide-transition--left-appear,
.slide-transition--left-leave.slide-transition--left-leave-active {
  left: -1000px;
  transition: left 0.5 ease-in;
}

.slide-transition--right-leave,
.slide-transition--right-appear.slide-transition--right-appear-active,
.slide-transition--right-enter.slide-transition--right-enter-active {
  right: 0;
  transition: right 0.5s ease-in;
}

.slide-transition--right-enter,
.slide-transition--right-appear,
.slide-transition--right-leave.slide-transition--right-leave-active {
  right: -1000px;
  transition: right 0.5 ease-in;
}

.slide-fade-transition > * {
  position: relative;
}

.slide-fade-transition-leave,
.slide-fade-transition-appear.slide-fade-transition-appear-active,
.slide-fade-transition-enter.slide-fade-transition-enter-active {
  top: 0;
  opacity: 1;
  transition: all 0.3s ease-in;
}

.slide-fade-transition-enter,
.slide-fade-transition-appear,
.slide-fade-transition-leave.slide-fade-transition-leave-active {
  top: -10px;
  opacity: 0.01;
  transition: all 0.3s ease-in;
}
`;