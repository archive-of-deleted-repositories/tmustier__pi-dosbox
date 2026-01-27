export interface Modifiers {
	shift: boolean;
	ctrl: boolean;
	alt: boolean;
}

export interface KeyMapping extends Modifiers {
	keyCode: number;
}

const UNSHIFTED_KEYS = "`1234567890-=[]\\;',./";
const SHIFTED_KEYS = "~!@#$%^&*()_+{}|:\"<>?";

export function withModifiers(keyCode: number, modifiers: Partial<Modifiers> = {}): KeyMapping {
	return {
		keyCode,
		shift: modifiers.shift ?? false,
		ctrl: modifiers.ctrl ?? false,
		alt: modifiers.alt ?? false,
	};
}

export function mapPrintableChar(char: string, modifiers: Partial<Modifiers> = {}): KeyMapping | null {
	if (char.length !== 1) return null;

	let keyCode: number | null = null;
	let shift = false;

	if (char >= "a" && char <= "z") {
		keyCode = char.toUpperCase().charCodeAt(0);
	} else if (char >= "A" && char <= "Z") {
		keyCode = char.charCodeAt(0);
		shift = true;
	} else if (char >= "0" && char <= "9") {
		keyCode = char.charCodeAt(0);
	} else if (char === " ") {
		keyCode = 32;
	} else {
		const shiftedIndex = SHIFTED_KEYS.indexOf(char);
		if (shiftedIndex !== -1) {
			keyCode = UNSHIFTED_KEYS.charCodeAt(shiftedIndex);
			shift = true;
		} else {
			const unshiftedIndex = UNSHIFTED_KEYS.indexOf(char);
			if (unshiftedIndex !== -1) {
				keyCode = char.charCodeAt(0);
			}
		}
	}

	if (keyCode === null) return null;

	return {
		keyCode,
		shift: (modifiers.shift ?? false) || shift,
		ctrl: modifiers.ctrl ?? false,
		alt: modifiers.alt ?? false,
	};
}
