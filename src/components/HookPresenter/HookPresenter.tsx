import React from 'react';

type HookPresenterProps = {
  heading: string;
  ComponentWithHook: React.ComponentType;
};

export const HookPresenter = ({
  heading,
  ComponentWithHook,
}: HookPresenterProps): JSX.Element => (
  <div
    style={{ margin: '25px', padding: '25px', border: '1px solid lightGrey' }}
  >
    <h3>{heading}</h3>
    <ComponentWithHook />
  </div>
);
