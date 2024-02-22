import { defineConfig } from 'unocss/vite'
import config from '@slidev/client/uno.config'
import { presetWebFonts } from 'unocss'
const regex = /^badge-(.*)$/;
export default defineConfig({
  ...config,
  shortcuts: {
    ...config.shortcuts || {},
    'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
    [regex]: ([, c], { theme }) => {
      if (Object.keys(theme.colors).includes(c)) {
        return `bg-${c}4:10 text-${c}5 rounded`
      }
    }
  },
  presets: [
    presetWebFonts({
      fonts: {
        strong: 'Rubik Iso',
      },
    }),
  ],
})
