import * as React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { TransitionStyles, TransitionComponentProps } from '../types';

// This is for to force a repaint, which is necessary in order to transition styles when changing inline styles.
// CSSTransition from react-transition-group also follows this implementation:
// https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215
const withForceReflow = (callback) => (node, ...rest) => {
  node.scrollTop;
  callback && callback(node, ...rest);
};

const createTransition = (
  transitionStyles: TransitionStyles,
  defaultStyle?: Object,
  transitionProperty = 'all'
) => {
  const TransitionComponent = ({
    timeout,
    easing,
    children,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    ...rest
  }: TransitionComponentProps): React.ReactNode => {
    // example: all 300ms ease-in-out
    const transition = `${transitionProperty} ${timeout}ms ${easing}`;

    return (
      <Transition
        timeout={timeout}
        onEnter={withForceReflow(onEnter)}
        onEntered={withForceReflow(onEntered)}
        onEntering={withForceReflow(onEntering)}
        onExit={withForceReflow(onExit)}
        onExiting={withForceReflow(onExiting)}
        onExited={withForceReflow(onExited)}
        {...rest}
      >
        {(status: TransitionStatus) => {
          const style = {
            transition,
            ...defaultStyle,
            ...transitionStyles[status],
          };

          // support function as child render
          if (typeof children === 'function') {
            return children(status, style);
          }

          const child = React.Children.only(children);
          const childStyle = child.props.style || {};

          return React.cloneElement(child, {
            style: {
              ...style,
              ...childStyle,
            }
          })
        }}
      </Transition>
    )
  }

  TransitionComponent.defaultProps = {
    in: true,
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    easing: 'ease-in-out',
    timeout: 300,
  };

  return TransitionComponent;
};

export default createTransition;
