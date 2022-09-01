import LayoutProps from './LayoutProps';

const Layout = ({ children }: LayoutProps) => (
  <main className="container py-4">{children}</main>
);

export default Layout;
