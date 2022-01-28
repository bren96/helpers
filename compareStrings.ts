type string1 = string;
type string2 = string;
type position = number;

type CompareStringsInput = [string1, string2]; 
type MisMatch = [string1, string2, position];

/**
 * Compares the two strings for character differences.
 * If strings are not equal, returns where the strings do not align.
 * Ex: string1 = 'abc1, string2 = 'abd', output = ['c', 'd', 3].
 * @param string1 string
 * @param string2 string
 * @returns [character from string 1, character from string 2, index of mismatch]
 */
function compareStrings(strings: CompareStringsInput): MisMatch[] {

    const misMatches: MisMatch[] = [];

    const splitStrings: string[][] = strings.map(
        (wholeString: string) => wholeString.split('')
    );

    splitStrings[0].forEach((char1: string, indx) => {
        const char2 = splitStrings[1][indx];
        if (char1 !== char2) {
            misMatches.push([char1, char2, indx]);
        }
    });

    return misMatches;
}