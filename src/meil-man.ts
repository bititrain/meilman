import TelegramBot = require('node-telegram-bot-api');

export class MeilMan {
  private bot: TelegramBot;
  private superUsers: Set<number> = new Set([]);

  constructor(private token: string, private url?: string) {
    this.bot = new TelegramBot(token);
    if (!url) {
      this.bot.startPolling();
    } else {
      this.bot.setWebHook(`${url}/bot${token}`);
    }
    this.configureMeilHandlers();
  }

  public addSuperUser(id: number): void {
    this.superUsers.add(id);
  }

  public messageSuperUsers(update: any) {
    const bot = this.bot;

    this.superUsers.forEach(sU =>
      bot.sendMessage(sU, update.message.text)
    );
  }

  public processUpdate(update: any): void {
    this.bot.processUpdate(update);
  }

  private configureMeilHandlers(): void {
    const bot = this.bot;

    bot.on('message', msg =>
      bot.sendMessage(msg.chat.id, "I've just got a meil!")
    );
  }
}
