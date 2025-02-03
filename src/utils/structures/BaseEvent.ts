import { ClientEvents } from 'discord.js';
import { Base } from './Base';

export abstract class BaseEvent<Event extends keyof ClientEvents> extends Base {
  constructor(private event: Event, private once?: boolean) { 
    super();
  }

  getEvent() { return this.event; }
  getOnce() { return this.once; }

  abstract execute(...args: ClientEvents[Event]): Promise<void>;

  public async GetHelpers() {

  }
}