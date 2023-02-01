import { useEffect } from 'react'
import './App.css'
import { WebSynth } from './lib/web-synth'

function App() {
	const synth = new WebSynth()

	return (
		<div className="App">
			<div>
				<button onClick={() => synth.init()}>Play</button>
			</div>
			Note:{' '}
			<input
				type="range"
				min="30"
				max="80"
				value="50"
				style={{ width: '400px' }}
				onChange={(e) => synth.set_note(e.target.value)}
			/>
			FM Freq:{' '}
			<input
				type="range"
				min="0"
				max="3"
				step="0.05"
				style={{ width: '400px' }}
				onChange={(e) => synth.set_fm_frequency(e.target.value)}
			/>
			FM Amount:{' '}
			<input
				type="range"
				min="0"
				max="3"
				step="0.05"
				style={{ width: '400px' }}
				onChange={(e) => synth.set_fm_amount(e.target.value)}
			/>
		</div>
	)
}

export default App
