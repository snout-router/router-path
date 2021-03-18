export const escape: (literal: string) => string = literal => literal.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
export const unwrap: (exp: RegExp) => string = exp => String(exp).split('/').slice(1, -1).join('/')
