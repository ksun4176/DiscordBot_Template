import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { BaseChatInputCommand, CommandLevel } from '../utils/structures/BaseChatInputCommand';

export default class TestCommand extends BaseChatInputCommand {
  constructor() {
    const data = new SlashCommandBuilder()
      .setName('test')
      .setDescription('Replies with test command works!');
    super(CommandLevel.All, data);
  }
  
  override async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    interaction.reply('Test command works');
  }
}