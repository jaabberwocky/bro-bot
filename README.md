# Telegram Bro Bot

Simple Telegram bot which is based on this seminal Straits Times article: https://www.straitstimes.com/opinion/guys-please-stop-saying-bro-dude-and-mate. 

Talk to it on Telegram: https://t.me/bro_me_bot

The bot will respond to any incantations with "dude", "mate" or "bro".

<img src="doc/bro-bot-2.gif" width="200" height="250"/>

Deployed on Heroku.

## How to develop

1. Register for a bot token key with https://t.me/botfather
2. Save token key into a `.env` file:
`TELEGRAM_TOKEN=<token_key>`
3. Run in development mode with `npm run dev`
4. Run tests with `npm test`