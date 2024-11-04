import { ButtonInteraction } from 'discord.js';

export abstract class BaseButton {
  constructor(private customId: string) {}

  /**
   * Get the custom ID for this button
   * @returns Custom ID of button
   */
  getCustomId() { return this.customId; }

  /**
   * Execute the button interaction
   * @param interaction Interaction that triggered the execute
   */
  abstract execute(interaction: ButtonInteraction): Promise<void>;

  /**
   * Get information needed for any command
   */
  public async GetHelpers() {
  }
}