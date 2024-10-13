#!/usr/bin/env node
import { cli } from 'cleye'

// Parse argv
const argv = cli({
	name: 'ts-react-i18next',

	// Define parameters
	parameters: [
		'<first name>', // First name is required
		'[last name]', // Last name is optional
	],

	// Define flags/options
	flags: {
		// Parses `--time` as a string
		time: {
			type: String,
			description: 'Time of day to greet (morning or evening)',
			default: 'morning',
		},
	},
})

const name = [argv._.firstName, argv._.lastName].filter(Boolean).join(' ')

if (argv.flags.time === 'morning') {
	console.log(`Good morning ${name}!`)
} else {
	console.log(`Good evening ${name}!`)
}
