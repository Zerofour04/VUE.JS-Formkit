import { defaultConfig } from '@formkit/vue'
import { genesisIcons } from "@formkit/icons"
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep'

const config = defaultConfig({
  plugins: [createMultiStepPlugin()],
  icons: {
    ...genesisIcons
  },
})

export default config