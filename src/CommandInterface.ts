import { AutocompleteInteraction, ChatInputCommandInteraction, SharedSlashCommand } from "discord.js";

export enum CommandLevel {
    All = 1,
    Premium = 2,
    Owner = 3
}

/**
 * Interface for individual commands.
 * This contains all the information used by command handlers in discord.
 */
export interface CommandInterface {
    level: CommandLevel,
    data: SharedSlashCommand;
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
    autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>;
}

/**
 * Get information needed for all commands
 * @returns 
 */
export async function GetCommandInfo() {
}