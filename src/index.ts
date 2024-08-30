export function capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function camelCase(str: string): string {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

export function truncate(str: string, length: number): string {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
}

export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

export function startsWith(str: string, searchString: string): boolean {
    return str.indexOf(searchString) === 0;
}

export function endsWith(str: string, searchString: string): boolean {
    return str.indexOf(searchString, str.length - searchString.length) !== -1;
}

export function padStart(str: string, length: number, padString: string = ' '): string {
    return str.padStart(length, padString);
}

export function padEnd(str: string, length: number, padString: string = ' '): string {
    return str.padEnd(length, padString);
}


export function repeat(str: string, count: number): string {
    return Array(count).fill(str).join(' ');
}

export function kebabCase(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
}

