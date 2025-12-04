import chalk from "chalk"

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCode"),
    },

    {
        name: "type",
        description: chalk.yellow("Escolha o tipo de QRCode 1 - normal ou 2 - terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        require: true,
    },

]

export default promptQRCode