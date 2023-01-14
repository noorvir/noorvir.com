import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout(props: Props) {
  return (
    <div id={'layout'}>
      {props.children}
    </div>
  );
}

export default Layout;
