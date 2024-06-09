// assets
import { IconHelp, IconMapRoute } from '@tabler/icons-react';

// constant
const icons = { IconMapRoute, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'route-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'route-page',
            title: 'Route Page',
            type: 'item',
            url: '/route-page',
            icon: icons.IconMapRoute,
            breadcrumbs: false
        },
        {
          id: 'graphPage',
          title: 'Graphics',
          type: 'item',
          url: '/graphs-page',
          icon: icons.IconHelp,
        //   external: true,
        //   target: true
        }
    ]
};

export default other;
