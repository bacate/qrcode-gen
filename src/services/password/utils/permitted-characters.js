async function permittedCharacters() {
    let permitted = []

    if (process.env.UPPERCASE_LETTERS === "true")
        permitted.push(... "ABCDEFGHIJLMNOPQRSTUVXWZ")

    if (process.env.LOWERCASE_LETTERS === "true")
        permitted.push(... "abcdefghijlmnopqrstuvxwz")

    if (process.env.NUMBERS === "true")
        permitted.push(... "0123456789")

    if (process.env.SPECIAL_CHARACTER === "true")
        permitted.push(... "!@#$%^&*")

    return permitted
}

export default permittedCharacters