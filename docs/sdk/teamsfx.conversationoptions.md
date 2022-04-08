<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/teamsfx](./teamsfx.md) &gt; [ConversationOptions](./teamsfx.conversationoptions.md)

## ConversationOptions interface

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Options to initialize [ConversationBot](./teamsfx.conversationbot.md)

<b>Signature:</b>

```typescript
export interface ConversationOptions 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [adapter?](./teamsfx.conversationoptions.adapter.md) | BotFrameworkAdapter | <b><i>(BETA)</i></b> <i>(Optional)</i> The bot adapter. If not provided, a default adapter will be created: - with <code>adapterConfig</code> as constructor parameter. - with a default error handler that logs error to console, sends trace activity, and sends error message to user. |
|  [adapterConfig?](./teamsfx.conversationoptions.adapterconfig.md) | { \[key: string\]: unknown; } | <b><i>(BETA)</i></b> <i>(Optional)</i> If <code>adapter</code> is not provided, this <code>adapterConfig</code> will be passed to the new <code>BotFrameworkAdapter</code> when created internally. |
|  [command?](./teamsfx.conversationoptions.command.md) | [CommandOptions](./teamsfx.commandoptions.md) &amp; { enabled?: boolean; } | <b><i>(BETA)</i></b> <i>(Optional)</i> The command part. |
|  [notification?](./teamsfx.conversationoptions.notification.md) | NotificationOptions &amp; { enabled?: boolean; } | <b><i>(BETA)</i></b> <i>(Optional)</i> The notification part. |
