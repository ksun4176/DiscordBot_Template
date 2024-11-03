import dotenv from "dotenv";
import { REST, RESTPostAPIChatInputApplicationCommandsJSONBody, Routes } from 'discord.js';
import { CommandInterface, CommandLevel } from "./CommandInterface";
import { executeOnAllCommands } from "./DiscordHelper";

dotenv.config();

const discordClientId = process.env.CLIENT_ID!;

const applicationCommands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];
// const premiumCommands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];
const ownerCommands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];
const commandCallbackFn = (command: CommandInterface) => {
    switch (command.level) {
        case CommandLevel.Owner:
            ownerCommands.push(command.data.toJSON());
            break;
        case CommandLevel.Premium:
            // premiumCommands.push(command.data.toJSON());
            ownerCommands.push(command.data.toJSON());
            break;
        default:
            applicationCommands.push(command.data.toJSON());
            break;
    }
}
executeOnAllCommands(commandCallbackFn);


/**
 * Deploy the commands for the application
 */
const DeployCommands = async () => {
    try {
        const rest = new REST().setToken(process.env.CLIENT_TOKEN!);

        console.log(`Started refreshing ${applicationCommands.length} application (/) commands.`);
        const appData = await rest.put(
            Routes.applicationCommands(discordClientId),
            { body: applicationCommands },
        );
        console.log(`Successfully reloaded ${(appData as any[]).length} application (/) commands.`);

        try {
            console.log(`Started refreshing ${ownerCommands.length} owner (/) commands.`);
            const ownerData = await rest.put(
                Routes.applicationGuildCommands(discordClientId, process.env.OWNER_SERVER_ID!),
                { body: ownerCommands }
            );
            console.log(`Successfully reloaded ${(ownerData as any[]).length} owner (/) commands.`);
        }
        catch (error) {
            console.error(error);
        }

        // if (premiumCommands.length > 0) {
        // 	// get list of premium servers
        // 	console.log(`Started refreshing ${premiumCommands.length} premium (/) commands.`);
        // 	for (const server of premiumServers) {
        // 		try {
        // 			if (!server.discordId || server.discordId === process.env.OWNER_SERVER_ID) {
        // 				continue;
        // 			}
        // 			const premData = await rest.put(
        // 				Routes.applicationGuildCommands(discordClientId, server.discord_id),
        // 				{ body: premiumCommands }
        // 			);
        // 			console.log(`Successfully reloaded ${(premData as any[]).length} premium (/) commands in ${server.discord_id}.`);
        // 		}
        // 		catch (error) {
        // 			console.error(error);
        // 		}
        // 	}
        // }
    } 
    catch (error) {
        console.error(error);
    }
};
DeployCommands();