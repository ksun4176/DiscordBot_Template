import { ButtonInteraction } from "discord.js";

export const Buttons = {
}

/**
 * Interface for individual button interactions.
 */
export interface ButtonInterface {
    execute: (interaction: ButtonInteraction) => Promise<void>;
}

/**
 * Get information needed for all buttons
 * @returns 
 */
export async function GetButtonInfo() {
}