import * as React from 'react';
import { useState } from 'react';
import createTransition from '../../createTransition';
import { withFade } from '../FadeTransition';
import { TransitionComponentProps } from '../../types';

type Props = TransitionComponentProps & {
  height: string,
}

const transitionStyles = ({ height, fade }) => withFade(fade, {
  entering: { height: 0 },
  entered: { height },
  exiting: { height: 0 },
  exited: { height: 0 },
});

const defaultStyle = ({ height }) => ({
  overflow: height !== 'auto' ? 'hidden' : null,
});

const BaseHeightTransition: React.SFC<Props> = createTransition(
  transitionStyles,
  defaultStyle,
);

const HeightTransition = ({
  children,
  onEnter,
  onExit,
  timeout,
  ...rest
}: TransitionComponentProps) => {
  const [height, setHeight] = useState('auto');

  return (
    <BaseHeightTransition
      timeout={timeout}
      height={height}
      onEnter={(node, isAppearing) => {
        const child = node.children[0];
        const dimensions = child.getBoundingClientRect();

        setHeight(`${dimensions.height}px`);

        onEnter && onEnter(node, isAppearing);
      }}
      onExit={(node) => {
        setHeight('0px');

        onExit && onExit(node);
      }}
      {...rest}
    >
      <div>
        {children}
      </div>
    </BaseHeightTransition>
  )
}

HeightTransition.displayName = 'HeightTransition';

export default HeightTransition;