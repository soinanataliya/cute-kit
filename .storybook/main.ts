import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	framework: '@storybook/react-vite',
	staticDirs: ['../src'],
	core: {
		// disableTelemetry: true,
		builder: '@storybook/builder-vite',
	},
	docs: { autodocs: 'tag' },
	async viteFinal(config) {


		if (config.build) {
			config.base = ''
			config.build.assetsDir = 'assets/'
		}

		return config
	},
}

export default config
