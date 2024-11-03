import { Events, Interaction } from "discord.js";
import { CommandInterface } from "../CommandInterface";
import { EventInterface } from "../EventInterface";
// import { Buttons } from "../buttons/ButtonInterface";

const interactionCreateEvent: EventInterface<Events.InteractionCreate> = {
    name: Events.InteractionCreate,
	async execute(interaction: Interaction) {
        if (interaction.isChatInputCommand()) {
            const command: CommandInterface | undefined = interaction.client.commands.get(interaction.commandName);
        
            try {
                if (!command) {
                    throw new Error(`No command matching ${interaction.commandName} was found.`);
                }
                await command.execute(interaction);
            } 
            catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
                } 
                else {
                    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
                }
            }
        }
        else if (interaction.isAutocomplete()) {
            const command: CommandInterface | undefined = interaction.client.commands.get(interaction.commandName);

            try {
                if (!command || !command.autocomplete) {
                    throw new Error(`No command matching ${interaction.commandName} has autocomplete set up.`);
                }
                await command.autocomplete(interaction);
            } catch (error) {
                console.error(error);
            }
        }
        // else if (interaction.isButton()) {
        //     switch(interaction.customId){
        //         case Buttons.:
        //             break;
        //     }
        // }
    },
}

export = interactionCreateEvent;