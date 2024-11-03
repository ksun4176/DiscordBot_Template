import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { CommandInterface, CommandLevel } from "../../CommandInterface";

const pingCommand: CommandInterface = {
    level: CommandLevel.Owner,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    
    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.reply('Pong!')
    }
}

export = pingCommand;