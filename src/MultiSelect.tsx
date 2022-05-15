import { useState } from 'react'
import Select from 'react-select'

const options = [
	{
		value: 'south-korea',
		label: 'South korea',
	},
	{
		value: 'germany',
		label: 'Germany',
	},
	{
		value: 'canada',
		label: 'Canada',
	},
	{
		value: 'japan',
		label: 'Japan',
	},
]

const isMulti = true

function MultiSelect() {
	const [currentCountries, setCurrentCountries] = useState<any>([
		'south-korea',
		'japan',
	])

	const getValue = () => {
		if (currentCountries) {
			return isMulti
				? options.filter(c => currentCountries.indexOf(c.value) >= 0)
				: options.find(c => c.value === currentCountries)
		} else {
			return isMulti ? [] : ''
		}
	}

	const onChange = (newValue: any) => {
		setCurrentCountries(
			isMulti ? newValue.map((v: any) => v.value) : newValue.value
		)
		// ['japan', 'south-korea']
		// 'japan'
	}

	return (
		<div className='w-4/5 mx-auto my-10'>
			<h1 className='mb-3 text-white text-xl font-medium'>Chose country:</h1>
			<Select
				classNamePrefix='custom-select'
				onChange={onChange}
				value={getValue()}
				options={options}
				isMulti={isMulti}
				placeholder='Chose countries'
			/>
		</div>
	)
}

export default MultiSelect
