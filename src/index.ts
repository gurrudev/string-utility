function validateType(
    value: any,
    type: "string" | "number" | "boolean" | "object",
): void {
    if (
        typeof value !== type ||
        (type === "object" && (value === null || Array.isArray(value)))
    ) {
        throw new Error(`${type} required! ${value} is not a valid ${type}`);
    }
}

export function capitalize(str: string): string {
    validateType(str, "string");
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function camelCase(str: string): string {
    validateType(str, "string");
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

export function truncate(str: string, length: number): string {
    validateType(str, "string");
    validateType(length, "number");
    if (str.length <= length) return str;
    return str.slice(0, length) + "...";
}

export function reverseString(str: string): string {
    validateType(str, "string");
    return str.split("").reverse().join("");
}

export function startsWith(str: string, searchString: string): boolean {
    validateType(str, "string");
    validateType(searchString, "string");
    return str.indexOf(searchString) === 0;
}

export function endsWith(str: string, searchString: string): boolean {
    validateType(str, "string");
    validateType(searchString, "string");
    return str.indexOf(searchString, str.length - searchString.length) !== -1;
}

export function padStart(
    str: string,
    length: number,
    padString: string = " ",
): string {
    validateType(str, "string");
    validateType(length, "number");
    validateType(padString, "string");
    return str.padStart(length, padString);
}

export function padEnd(
    str: string,
    length: number,
    padString: string = " ",
): string {
    validateType(str, "string");
    validateType(length, "number");
    validateType(padString, "string");
    return str.padEnd(length, padString);
}

export function repeat(str: string, count: number): string {
    validateType(str, "string");
    validateType(count, "number");
    return Array(count).fill(str).join(" ");
}

export function kebabCase(str: string): string {
    validateType(str, "string");
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
}

export function upperCase(str: string): string {
    validateType(str, "string");
    return str.toUpperCase();
}

export function lowerCase(str: string): string {
    validateType(str, "string");
    return str.toLowerCase();
}

export function strippedString(str: string): string {
    validateType(str, "string");
    return str.replace(/<\/?[^>]+(>|$)/g, "");
}
