import { ClientEvents } from 'discord.js';

export abstract class BaseEvent<Event extends keyof ClientEvents> {
  constructor(private event: Event, private once?: boolean) { }

  getEvent() { return this.event; }
  getOnce() { return this.once; }

  abstract execute(...args: ClientEvents[Event]): Promise<void>;

  public async GetHelpers() {

  }
}