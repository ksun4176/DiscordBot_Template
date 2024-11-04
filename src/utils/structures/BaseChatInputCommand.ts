import { AutocompleteInteraction, ChatInputCommandInteraction, SharedSlashCommand } from 'discord.js';

/**
 * Which servers should be able to get command
 */
export enum CommandLevel {
  All = 1,
  Premium = 2,
  Owner = 3
}

export interface BaseChatInputCommand {
  /**
   * Supply options for command arguments that have been marked as being autocomplete
   * @param interaction Interaction that triggered the autocomplete
   */
  autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>;
}

export abstract class BaseChatInputCommand {
  constructor(private level: CommandLevel, private definition: SharedSlashCommand) {}

  /**
   * Get which servers should register the command
   * @returns Level of command
   */
  getLevel(): CommandLevel { return this.level; }
  /**
   * Get the definition of the command which contains information such as name, options, ...
   * @returns Command definition
   */
  getDefinition(): SharedSlashCommand { return this.definition; }
  /**
   * Get the name of command
   * @returns Name of command
   */
  getName(): string { return this.definition.name; }

  /**
   * Execute the command
   * @param interaction Interaction that triggered the execute
   */
  abstract execute(interaction: ChatInputCommandInteraction): Promise<void>;

  /**
   * Get information needed for any command
   */
  public async GetHelpers() {
  }
}