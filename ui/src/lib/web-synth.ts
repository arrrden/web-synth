import * as web_synth_rs from '../../pkg'

export class WebSynth {
	fm: null | web_synth_rs.FmOsc

	constructor() {
		this.fm = null
	}

	init() {
		if (this.fm === null) {
			this.fm = new web_synth_rs.FmOsc()
			this.fm.set_note(50)
			this.fm.set_fm_frequency(0)
			this.fm.set_fm_amount(0)
			this.fm.set_gain(0.8)
		} else {
			this.fm.free()
			this.fm = null
		}
	}

	set_note(value: string) {
		if (this.fm) {
			this.fm.set_note(parseInt(value))
		}
	}

	set_fm_frequency(value: string) {
		if (this.fm) {
			this.fm.set_fm_frequency(parseFloat(value))
		}
	}

	set_fm_amount(value: string) {
		if (this.fm) {
			this.fm.set_fm_amount(parseFloat(value))
		}
	}
}
