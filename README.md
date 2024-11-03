# DiscordBot_Template
Template for creating a DiscordBot.

This uses Node.js, TypeScript, and Docker.

## File Structure
- `.env.example`: Example .env file to be filled in
- `Dockerfile`: Used to create a docker image of your bot so it can be easily exported
- `package.json` and `tsconfig.json`: These files are used to configure Node.js
- `src/`: This is where your bot code would live
   - `./app.ts`: Entrypoint of your bot
   - `./DiscordHelper.ts`: Help set up your bot
   - `./*Interface.ts`: Structure for interactions handled by your bot
   - `./buttons/*`: All of your button interactions. When a new one gets added, you will need to update `./events/InteractionCreate.ts` as well
   - `./commands/*`: All of your commands (NOTE: All commands in this directory and one subdirectory level deeper will be automatically handled by bot)
   - `./events/*`: All of your discord events (NOTE: All events in this directory ONLY will be automatically handled by bot)
- All other files are auto generated so they do not need to be touched.

## How to Use
To start a development bot:
2. Copy `.env.example` to `.env` and fill it in for your discord bot
3. Call `npm install` to install node dependencies
4. Call `npm run register` to register your discord bot with your commands
   - If you change anything in a command definition (`command.data`), you will need to call this again.
5. Initiate a development server using `npm run dev`
   - This uses nodemon which will track real time updates to your changes and restart the server automatically
6. Once you get the `Ready! Logged in as <Discord Bot>`, your bot is online.

## How to Dockerize
1. Call `docker build -t <docker-image-name> -f Dockerfile .` to build your docker image
2. Call `docker run --env-file ./.env -dp <exposed-port>:<bot-port-from-env-file> <docker-image-name>` to run a docker container based on your image
3. Call `docker ps` to verify that the container is up and running
4. Call `docker logs <container-id>` to verify your bot is up and running
5. Call `docker stop <container-id>` to stop the container

NOTE: Since Docker container is in its own separate network, `localhost` might not connect correctly.