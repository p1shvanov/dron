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
        }
        // {
        //   id: 'documentation',
        //   title: 'Documentation',
        //   type: 'item',
        //   url: 'https://codedthemes.gitbook.io/berry/',
        //   icon: icons.IconHelp,
        //   external: true,
        //   target: true
        // }
    ]
};

export default other;
