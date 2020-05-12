import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/app/w-chter/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/app/w-chter/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/app/w-chter/layout/stepper',
      },
      {
        title: 'List',
        link: '/app/w-chter/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/app/w-chter/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/app/w-chter/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/app/w-chter/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/app/w-chter/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/app/w-chter/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/app/w-chter/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/app/w-chter/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/app/w-chter/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/app/w-chter/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/app/w-chter/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/app/w-chter/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/app/w-chter/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/app/w-chter/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/app/w-chter/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/app/w-chter/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/app/w-chter/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/app/w-chter/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/app/w-chter/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/app/w-chter/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/app/w-chter/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/app/w-chter/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/app/w-chter/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/app/w-chter/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/app/w-chter/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/app/w-chter/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/app/w-chter/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/app/w-chter/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/app/w-chter/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/app/w-chter/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/app/w-chter/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/app/w-chter/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/app/w-chter/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/app/w-chter/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/app/w-chter/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/app/w-chter/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
