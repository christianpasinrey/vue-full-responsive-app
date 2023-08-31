const menu = [
    {
        label: 'Dashboard',
        path: '/dashboard',
    },
    {
        label: 'About',
        path: '/about'
    },
    {
        label: 'Contacts',
        path: '/contacts',
        submenu:[
            {
                label: 'Add',
                path: '/contacts/add'
            },
            {
                label: 'List',
                path: '/contacts/list'
            }
        ]
    }
];

export default menu;