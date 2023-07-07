import { ReactNode } from 'react';

export const Layout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="card max-w-800 p-3">
    <h1 className="text-2xl font-medium mb-2">{title}</h1>
    {children}
  </div>
);

export const ComponentLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <>
    <h2 className="text-xl mb-2 mt-6">{title}</h2>
    <div className="flex gap-4">{children}</div>
  </>
);
