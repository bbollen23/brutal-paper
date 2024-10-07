import type { Preview } from "@storybook/react";
import { NotificationProvider } from "../src/components/Notification/NotificationContext";
import React from 'react';

// export const decorators = [
//   (Story) => (
//     <NotificationProvider>
//       <Story />
//     </NotificationProvider>
//   ),
// ];

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
        largeDesktop: {
          name: 'Large Desktop',
          styles: {
            width: '2560px',
            height: '1440px',
          },
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      return (<NotificationProvider><Story /></NotificationProvider>);

    },
  ],

};

export default preview;
