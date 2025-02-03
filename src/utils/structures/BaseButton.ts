import { ButtonInteraction } from 'discord.js';
import { Base } from './Base';

export abstract class BaseButton extends Base {
  constructor(private customId: string) {
    super();
  }

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
   * Get information needed for any button interaction
   */
  public async GetHelpers() {
  }
}