import { useState } from 'react';
import HEX from './HEX';
import hexToRgb from '../utils/hetToRgb';
import RGB from './RGB';

export default function ColorsConvector() {
	const [color, setColor] = useState('')
	const handlerChange = (event) => {
		const {value} = event.target
		if (value.length < 7) return
		const rgb = hexToRgb(value)
		if (!rgb) {
			setColor('Ошибка!')
			return
		}
		const rgbColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
		setColor(rgbColor)
		document.body.style.backgroundColor = rgbColor
	}
	return (
		<div className='colors-convector'>
			<HEX handlerChange={handlerChange}/>
			<RGB color={color}/>
		</div>
	)
}
