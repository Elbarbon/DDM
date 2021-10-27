import { Icon } from '@iconify/react';
import peopleFill from '@iconify/icons-eva/people-fill';
import viewDashboard from '@iconify/icons-mdi-light/view-dashboard';
import arrangeBringToFront from '@iconify/icons-mdi-light/arrange-bring-to-front';
import chartLine from '@iconify/icons-mdi-light/chart-line';
import sitemapIcon from '@iconify/icons-mdi-light/sitemap';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: getIcon(viewDashboard)
  },
  {
    title: 'Sitios',
    path: '/dashboard/user',
    icon: getIcon(sitemapIcon)
  },
  {
    title: 'Cuentas',
    path: '/dashboard/products',
    icon: getIcon(arrangeBringToFront)
  },
  {
    title: 'Usuarios',
    path: '/dashboard/blog',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Tasa de Riego',
    path: '/dashboard/blog',
    icon: getIcon(chartLine)
  }
];

export default sidebarConfig;
