/** @type { import('@storybook/react').Preview } */
import { useDarkMode } from "storybook-dark-mode";

// export const decorators = [
//   (Story: any) => {
//     document.documentElement.setAttribute(
//       "color-theme",
//       useDarkMode() ? "dark" : "light"
//     );

//     return <Story />;
//   },
// ];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
