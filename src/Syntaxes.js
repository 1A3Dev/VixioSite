export default {
  Events: [
    {
      description: "Fired when a song a bot is playing ends.",
      name: "Track end",
      patterns: ["track end [seen by %-string%]"],
      eventvalues: ["event-bot", "event-guild", "event-audiotrack"],
      examples: ['on track end seen by "Jewel"'],
    },
    {
      description:
        "Fired when the position of a track a bot is playing is changed. This is when it is manually changed, via set position.",
      name: "Track Seek",
      patterns: ["track seek [seen by %-string%]"],
      eventvalues: ["event-bot", "event-guild", "event-audiotrack"],
      examples: ['on track seek seen by "Jewel"'],
    },
    {
      description:
        "Fired when a song starts. May be when a new track in the queue starts or when the first track is played.",
      name: "Track start",
      patterns: ["track start [seen by %-string%]"],
      eventvalues: ["event-bot", "event-guild", "event-audiotrack"],
      examples: ['on track start seen by "Jewel"'],
    },
    {
      description: "Fired when a reaction is added to a message",
      name: "Reaction Add",
      patterns: ["reaction add[ed] [seen by %-string%]"],
      eventvalues: [
        "event-bot",
        "event-user",
        "event-member",
        "event-guild",
        "event-message",
        "event-messagechannel",
        "event-guildchannel",
        "event-emote",
      ],
      examples: ["on reaction add:"],
    },
    {
      description: "Fired when a Vixio bot first logs in",
      name: "Bot Login Event",
      patterns: ["[vixio] bot (login|connect) [seen by %-string%]"],
      eventvalues: ["event-bot"],
      examples: [
        "on bot connect:",
        '\tbroadcast "%event-bot% is ready to go!"',
      ],
    },
    {
      description: "Used to detect when a specific vixio command is fired",
      name: "Vixio Command",
      patterns: ["vixio command [%-string%]"],
      eventvalues: [
        "event-discordcommand",
        "event-user",
        "event-member",
        "event-guildchannel",
        "event-messagechannel",
        "event-message",
        "event-guild",
        "event-bot",
      ],
      examples: ['on vixio command "eval":'],
    },
    {
      description:
        "Fired when a message is sent in a text channel that the bot can read.",
      name: "Guild Message Received",
      patterns: [
        "(guild|server) message (receive[d] [seen]|sent) [by %-string%]",
      ],
      eventvalues: [
        "event-guildchannel",
        "event-messagechannel",
        "event-user",
        "event-member",
        "event-message",
        "event-guild",
        "event-bot",
        "event-string",
      ],
      examples: ['on guild message received seen by "a bot":'],
    },
    {
      description: "Fired when a user joins a voice channel",
      name: "Voice Join",
      patterns: [
        "user join voice [seen by %-string%]",
        "voice [channel] join [seen by %-string%]",
      ],
      eventvalues: [
        "event-bot",
        "event-user",
        "event-member",
        "event-voicechannel",
        "event-guildchannel",
        "event-guild",
      ],
      examples: ["on voice channel join:"],
    },
    {
      description: "Fired when a user leaves a voice channel",
      name: "Voice Leave",
      patterns: [
        "user leave voice [seen by %-string%]",
        "voice [channel] leave [seen by %-string%]",
      ],
      eventvalues: [
        "event-bot",
        "event-user",
        "event-member",
        "event-voicechannel",
        "event-guildchannel",
        "event-guild",
      ],
      examples: ["on voice channel leave:"],
    },
    {
      description: "Fired when a private message is received or sent.",
      name: "Private Message",
      patterns: [
        "(private message|direct message) <receive(d)?( seen)?|sent> [by %-string%]",
      ],
      eventvalues: [
        "event-bot",
        "event-message",
        "event-user",
        "event-messagechannel",
      ],
      examples: ["on direct message received:"],
    },
    {
      description: "Fired when a reaction is removed from a message",
      name: "Reaction Remove",
      patterns: ["reaction remove[d] [seen by %-string%]"],
      eventvalues: [
        "event-bot",
        "event-user",
        "event-member",
        "event-guild",
        "event-message",
        "event-messagechannel",
        "event-guildchannel",
        "event-emote",
      ],
      examples: ["on reaction remove:"],
    },
    {
      description: "Fired when a bot joins a new guild.",
      name: "Bot Join Guild",
      patterns: ["bot (join|enter) [new] guild [seen by %-string%]"],
      eventvalues: ["event-bot", "event-guild"],
      examples: ["on bot join guild"],
    },
    {
      description:
        "Fired when a bot leaves a guild. This could be caused by getting kicked or just naturally leaving.",
      name: "Bot Leave Guild",
      patterns: ["bot (leave|exit) guild [seen by %-string%]"],
      eventvalues: ["event-bot", "event-guild"],
      examples: ["on bot leave guild:"],
    },
    {
      description: "Fired when a user is banned from a guild.",
      name: "User Banned",
      patterns: ["user ban[ned] [seen by %-string%]"],
      eventvalues: ["event-bot", "event-user", "event-guild"],
      examples: ["on user banned:"],
    },
    {
      description: "Fired when a user is unbanned from a guild.",
      name: "User Unbanned",
      patterns: ["user unban[ned] [seen by %-string%]"],
      eventvalues: ["event-bot", "event-user", "event-guild"],
      examples: ["on user unbanned:"],
    },
    {
      description: "Fired when a button is clicked.",
      name: "Button Interaction Received",
      patterns: ["button interaction receive[d] [seen by %-string%]"],
      eventvalues: [
        "event-user",
        "event-messagechannel",
        "event-member",
        "event-bot",
        "event-string",
        "event-emote",
        "event-guild",
        "event-guildchannel",
      ],
      examples: ["on button interaction received:"],
    },
    {
      description: "Fired when a selection is made.",
      name: "Select Menu Interaction Received",
      patterns: ["select [menu] interaction receive[d] [seen by %-string%]"],
      eventvalues: [
        "event-user",
        "event-messagechannel",
        "event-member",
        "event-bot",
        "event-string",
        "event-guild",
        "event-guildchannel",
      ],
      examples: ["on select interaction received:"],
    },
    {
      description: "Fired when a slash command is executed.",
      name: "Slash Command Received",
      patterns: ["slash command [interaction] receive[d] [seen by %-string%]"],
      eventvalues: [
        "event-user",
        "event-messagechannel",
        "event-member",
        "event-bot",
        "event-string",
        "event-guild",
        "event-guildchannel",
      ],
      examples: ["on slash command received:"],
    },
    {
      description:
        "Fired when a Member receives a new role or roles. You can use the `the roles` expression to get all the roles.",
      name: "Role Added",
      patterns: ["member role add[ed] [seen by %-string%]"],
      eventvalues: [
        "event-bot",
        "event-guild",
        "event-role",
        "event-user",
        "event-member",
      ],
      examples: ["on member role add:"],
    },
    {
      description: "Fired when a member switches voice channels.",
      name: "Member Switch Voice Channel",
      patterns: ["member (switch|move) [voice] channel [seen by %-string%]"],
      eventvalues: [
        "event-bot",
        "event-member",
        "event-guildchannel",
        "event-guild",
        "event-user",
      ],
      examples: [
        "on member switch voice channel:",
        '\tbroadcast "%event-user% left %old channel% and joined %new channel%"',
      ],
    },
    {
      description: "Fired when a user joins a guild",
      name: "Guild Join",
      patterns: ["(user|member) join (guild|server) [seen by %-string%]"],
      eventvalues: ["event-bot", "event-user", "event-member", "event-guild"],
      examples: ["on member join guild:"],
    },
    {
      description:
        "Fired when a user leaves a guild. Could be caused by kicking them or them leaving on their own free will. This event only fires if you have the guild members intent enabled.",
      name: "Guild Leave",
      patterns: ["(guild|member) leave (guild|server) [seen by %-string%]"],
      eventvalues: ["event-bot", "event-user", "event-member", "event-guild"],
      examples: ["on member leave guild:"],
    },
    {
      description: "Fired when a member changes their nickname.",
      name: "Nickname Change",
      patterns: ["[member] nick[name] (change|update) [seen by %-string%]"],
      eventvalues: ["event-bot", "event-user", "event-member", "event-guild"],
      examples: ["on nickname update:"],
    },
    {
      description:
        "Fired when a Member has a role or roles removed from them. You can use the `the roles` expression to get all the roles.",
      name: "Role Removed",
      patterns: ["member role remove[d] [seen by %-string%]"],
      eventvalues: [
        "event-bot",
        "event-guild",
        "event-role",
        "event-user",
        "event-member",
      ],
      examples: ["on member role remove:"],
    },
    {
      description: "Fired when a message is deleted",
      name: "Message Deleted",
      patterns: ["message delete[d] [seen by %-string%]"],
      eventvalues: [
        "event-bot",
        "event-message",
        "event-messagechannel",
        "event-guildchannel",
        "event-guild",
      ],
      examples: ["on message deleted"],
    },
    {
      description:
        "Fired when a message is edited in a text channel that the bot can read.",
      name: "Guild Message Edited",
      patterns: ["(guild|server) message edit[ed] [seen by %-string%]"],
      eventvalues: [
        "event-guildchannel",
        "event-messagechannel",
        "event-user",
        "event-member",
        "event-message",
        "event-guild",
        "event-bot",
        "event-string",
      ],
      examples: ['on guild message edited seen by "a bot":'],
    },
    {
      description:
        "Fired when a message is received anywhere, either a private message or a text channel",
      name: "Message Received",
      patterns: ["message receive[d] [seen by %-string%]"],
      eventvalues: [
        "event-user",
        "event-messagechannel",
        "event-member",
        "event-bot",
        "event-string",
        "event-message",
        "event-guild",
        "event-guildchannel",
      ],
      examples: ["on message received:"],
    },
  ],
  Conditions: [
    {
      description: "Tell if a bot is paused or not.",
      name: "Bot paused",
      patterns: [
        "%bot/string% is paused [in %guild%]",
        "%bot/string% (is|are)(n't| not) paused [in %guild%]",
      ],
      examples: ["if event-bot isn't paused:"],
    },
    {
      description: "Check if a bot is playing something in a guild",
      name: "Bot is playing",
      patterns: [
        "%bot/string% is playing [in %guild%]",
        "%bot/string% (is|are)(n't| not) playing [in %guild%]",
      ],
      examples: ["if event-bot is playing"],
    },
    {
      description:
        "If the guild modifier is included, this passes if the member is deafened via a guild admin.If it isn't included, it passes if the user has either deafened themselves, or was deafened by an admin",
      name: "Member is deafened",
      patterns: [
        "%members% (is|are) [<guild>] deafened",
        "%members% (is|are)(n't| not) [<guild>] deafened",
      ],
      examples: [
        "discord command $checkGuildMute <member>:",
        "\ttrigger:",
        "\t\tif arg-1 is guild muted:",
        '\t\t\treply with "%arg-1% is guild muted!"',
        "\t\t\tstop",
        '\t\treply with "%arg-1% is not guild muted!"',
      ],
    },
    {
      description: "Check if a emote is animated.",
      name: "Emote is Animated",
      patterns: [
        "%emotes% (is|are) animated",
        "%emotes% (is|are)(n't| not) animated",
      ],
      examples: [
        "discord command $emotes:",
        "\ttrigger:",
        "\t\tloop emotes of event-guild:",
        "\t\t\tif loop-value is animated:",
        "\t\t\t\tadd loop-value to {_animated::*}",
        "\t\t\telse:",
        "\t\t\t\tadd loop-value to {_non::*}",
        "\t\tcreate embed:",
        '\t\t\tset the author info of the embed to author named "Emotes %reaction "":smile:""%" with no url and no icon',
        '\t\t\tset the description of the embed to "%name of event-guild% has %size of {_non::*}% regular emotes and %size of {_animated::*}% animated emotes!!"',
        "\t\t\tset the colour of the embed to Purple",
        '\t\t\tadd field named "Local emotes (1/1)" with value "%{_non::*}%" to embed',
        '\t\t\tadd field named "Animated emotes (1/1)" with value "%{_animated::*}%" to embed',
        "\t\tsend the last created embed to event-channel with event-bot",
      ],
    },
    {
      description:
        "Check if a member has a permission, can also check if they have a permission in a certain GuildChannel.",
      name: "Member Has Permission",
      patterns: [
        "%member% has permission %permission% [in %-channel%]",
        "%user% has permission %permission% [in %guild/channel%]",
        "%member% (doesn[']t|does not) have permission %permission% [in %-channel%]",
        "%user% (doesn[']t|does not) have permission %permission% [in %guild/channel%]",
      ],
      examples: ["if event-member has permission voice connect"],
    },
    {
      description:
        "Check if a member either does, or does not have either a specific %role% or a role with a certain name.",
      name: "Member has role",
      patterns: [
        "%member% (has|have) [the] role %role%",
        "%member% (does[n[']t]|does not) have [the] role %role%",
        "%member% (has|have) [the] role [named] %string%",
        "%member% (does[n[']t]|does not) have [the] role [named] %string%",
      ],
      examples: [
        "discord command $role <member> <string>:",
        "\ttrigger:",
        "\t\tif arg-1 has role named arg-2:",
        '\t\t\treply with "%arg-1% does have a role named %arg-2%"',
        "\t\t\tstop",
        '\t\treply with "%arg-1% does not have a role named %arg-2%"',
      ],
    },
    {
      description:
        "If the guild modifier is included, this passes if the member is muted via a guild admin.If it isn't included, it passes if the user has either muted themselves, or was muted by an admin",
      name: "Member is muted",
      patterns: [
        "%members% (is|are) [<guild>] muted",
        "%members% (is|are)(n't| not) [<guild>] muted",
      ],
      examples: [
        "discord command $checkGuildMute <member>:",
        "\ttrigger:",
        "\t\tif arg-1 is guild muted:",
        '\t\t\treply with "%arg-1% is guild muted!"',
        "\t\t\tstop",
        '\t\treply with "%arg-1% is not guild muted!"',
      ],
    },
    {
      description:
        "Lets you check if a channel builder or text channel is nsfw/sfw.",
      name: "NSFW",
      patterns: [
        "[the] nsfw state[s] of %channelbuilders/textchannels%",
        "%channelbuilders/textchannels%'[s] nsfw state[s]",
      ],
      examples: [
        "discord command nsfw:",
        "\tprefixes: $",
        "\ttrigger:",
        "\t\tif event-channel is nsfw:",
        '\t\t\treply with "%event-channel% is nsfw"',
      ],
    },
    {
      description: "Check if a message attachment is an image.",
      name: "Attachment is Image",
      patterns: [
        "%attachments% (is|are) [a[n]] image[s]",
        "%attachments% (is|are)(n't| not) [a[n]] image[s]",
      ],
      examples: [
        "on guild message received:",
        "\tset {_} to attachment of event-message",
        "\tif {_} is set:",
        "\t\tif {_} is not an image:",
        '\t\t\tbroadcast "%attachment url of {_}%"',
      ],
    },
    {
      description:
        "This is for verified bots or bots that have enabled privileged intents and need to activate them in Vixio",
      name: "Create Bot Scope",
      patterns: ["(make|create) vixio bot"],
      examples: [
        "discord command neeko:",
        "\ttrigger:",
        "\t\tcreate vixio bot:",
        "\t\t\tenable the guild members intent",
        '\t\t\tlogin to "YAHITAMUH" with the name "Neeko"',
      ],
    },
    {
      description:
        "Provides a easy way to create either a text channel or a voice channel.",
      name: "Create channel scope",
      patterns: ["(make|create) [text] channel", "(make|create) voice channel"],
      examples: [
        "command /channel:",
        "\ttrigger:",
        "\t\tcreate text channel:",
        '\t\tset name of the channel to "Testing"',
        '\t\tset {guild} to guild with id "56156156615611"',
        "\t\tset nsfw state of the channel to true",
        '\t\tcreate the channel in {guild} with "Jewel"',
      ],
    },
    {
      description:
        "Provides a pretty and easy way of making a new embed with a bunch of different attributes",
      name: "Make Embed",
      patterns: [
        "(make|create) (embed|embed %-embedbuilder%)",
        "(make|create) (embed|embed %-embedbuilder%) and send [(it|the embed)] to %users/channels% [(with|using) %bot/string%] [and store (it|the message) in %-objects%]",
        "(make|create) (embed|embed %-embedbuilder%) and reply with [(it|the embed)] [and store (it|the message) in %-objects%]",
      ],
      examples: [
        "command $scope:",
        "\ttrigger:",
        "\t\tmake a new embed:",
        "\t\t\tset color of embed the embed to red",
        '\t\t\tset url of the embed to "https://google.com"',
        '\t\t\tset title of the embed to "Google!"',
        "\t\tset {_embed} to last made embed",
      ],
    },
    {
      description: "Create an invitation to a channel within a guild.",
      name: "Create Invite to",
      patterns: [
        "(make|create) [a[n]] invite to %channel% [(with|as) %bot/string%]",
      ],
      examples: [
        "discord command invite:",
        "\tprefixes: /",
        "\ttrigger:",
        "\t\tcreate invite to event-channel:",
        "\t\t\tset the max usage of the invite to 1",
        '\t\treply with "Done!"',
      ],
    },
  ],
  Effects: [
    {
      description:
        "This will force a bot to play a track and set the current playing track to be next in the queue. If the input isn't a single track or not able to be found it will not affect the bot.",
      name: "Force Play",
      patterns: ["force [%bot/string% to] play %string/track% [in %guild%]"],
      examples: [
        'force play "some youtube url im too lazy to go find one" in event-guild',
      ],
    },
    {
      description: "Join a voice channel with a bot",
      name: "Join voice channel",
      patterns: ["join %voicechannel% [with %bot/string%]"],
      examples: ["join event-channel"],
    },
    {
      description: "Make a bot leave it's voice channel in a guild.",
      name: "Leave Voice Channel",
      patterns: [
        "make %bots/strings% (leave|disconnect from) (voice|vc) [in %guild%]",
      ],
      examples: [
        "discord command leave:",
        "\tprefixes: ##",
        "\ttrigger:",
        "\t\tif voice channel of event-bot in event-guild is set:",
        "\t\t\tmake event-bot leave vc",
        '\t\t\treply with "I\'ve left my voice channel"',
        "\t\t\tstop",
        '\t\treply with "I\'m not currently in any voice channels!"',
      ],
    },
    {
      description:
        "Pause a track a bot is playing in a guild, if it is already paused nothing happens",
      name: "Pause track",
      patterns: [
        "pause [the] (track|song) %bot/string% is playing [in %guild%]",
      ],
      examples: ["pause the track event-bot is playing in event-guild"],
    },
    {
      description:
        "Play a specific audio track or attempt to load something from a URL",
      name: "Play audio",
      patterns: ["play %strings/tracks% [in %guild%] [with %bot/string%]"],
      examples: [
        'play "https://www.youtube.com/watch?v=elwTgpHlty0" in guild with id "2199673352656165156" with "Jewel"',
      ],
    },
    {
      description:
        "Resume a track a bot is playing in a guild, if the bot is not paused then nothing happens",
      name: "Resume track",
      patterns: [
        "resume [the] (track|song|music) %bot/string% (is playing|has paused) [in %guild%]",
      ],
      examples: ["resume the track event-bot is playing"],
    },
    {
      description:
        "Lets you search various music sites for a query. You can either access the results via the search results expression, or store them in a variable.",
      name: "Search Audio",
      patterns: [
        "search (youtube|soundcloud) for %strings% [and store the results in %listvariable%]",
      ],
      examples: [
        "on join:",
        '\tsearch youtube for "%player%" and store the results in {_results::*}',
        "\tif {_results::*} is set:",
        '\t\tmessage "Did you know there are %size of {_results::*}% videos about you on YouTube?" to player',
      ],
    },
    {
      description: "This will randomize a bots queue",
      name: "Shuffle Queue",
      patterns: ["shuffle [the] queue of %bot/string% [in %guild%]"],
      examples: ["shuffle the queue of event-bot in event-guild"],
    },
    {
      description: "Skip the current track a bot is playing in a guild",
      name: "Skip track",
      patterns: [
        "skip [the] (track|song)[s] %bot/string% is playing [in %guilds%]",
      ],
      examples: ["skip track event-bot is playing in event-guild"],
    },
    {
      description: "Stop a track a bot is playing in a guild",
      name: "Stop track",
      patterns: [
        "stop [the] (track|song) %bot/string% is playing [in %guild%]",
      ],
      examples: ["stop the track event-bot is playing"],
    },
    {
      description:
        "Set a bot's game to a certain gametype. This can be: streaming/watching/playing/listening. For streaming you must include a valid twitch URL to stream to and a title.",
      name: "Mark Bot as Gametype",
      patterns: [
        "mark %bot/string% as %gametype% [to] [with title] %string% [(and|on|with|at) url %-string%]",
      ],
      examples: [
        "discord command watch <text>:",
        "\tprefixes: ##",
        "\ttrigger:",
        "\t\tmark event-bot as watching arg-1",
        "discord command play <text>:",
        "\tprefixes: ##",
        "\ttrigger:",
        "\t\tmark event-bot as playing arg-1",
        "discord command stream <text> <text>:",
        "\tprefixes: ##",
        "\ttrigger:",
        "\t\tmark event-bot as streaming arg-1 with url arg-2",
        "discord command listen <text>:",
        "\tprefixes: ##",
        "\ttrigger:",
        "\t\tmark event-bot as listening to arg-1",
      ],
    },
    {
      description:
        "Retrieve a User via their ID on Discord. This should be a fallback option! Use the user with id expression to get users normally. This searches all of discord, not just your accessible users.",
      name: "Retrieve User by ID",
      patterns: [
        "(retrieve|grab) [the] user with id %string% [and store (them|the user) in %-objects%]",
      ],
      examples: [
        'retrieve user with id "65156156156156" and store them in {_message}',
      ],
    },
    {
      description:
        "Shutdown or logout of a bot, destroys the instance and closes the connection",
      name: "Logout of Bot",
      patterns: ["(logout [of]|shutdown) %bot/string%"],
      examples: [
        "discord command $shutdown:",
        "\ttrigger:",
        "\t\tshutdown event-bot",
      ],
    },
    {
      description:
        "This is used specifically to enable specific gateway intents in the create bot scope. This must be done before you login to your bot and you must restart for changes to take effect.",
      name: "Enable Gateway Intent",
      patterns: ["enable [the] %gatewayintent% [gateway] intent [for bot]"],
      examples: [
        "on skript load:",
        "\tcreate vixio bot:",
        "\t\tenable the guild members intent",
        '\t\tlogin to "YAHITAMUH" with the name "Neeko"',
      ],
    },
    {
      description: "Grab a number of messages from a text channel",
      name: "Grab Messages",
      patterns: ["grab [the] last %number% messages in %textchannel%"],
      examples: [
        "discord command $purge <number>:",
        "\texecutable in: guild",
        "\ttrigger:",
        "\t\tset {_num} to arg-1 ",
        "\t\tgrab the last {_num} messages in event-channel",
        "\t\tpurge the grabbed messages with event-bot",
        "\t\tset {_error} to last vixio error ",
        "\t\tif {_error} is set:",
        '\t\t\treply with "I ran into an error! `%{_error}%`"',
        "\t\t\tstop",
        '\t\treply with "I have successfully purged %arg-1% messages"',
      ],
    },
    {
      description:
        "Grab the pinned messages of a channel or a dm with a user. Can be gotten with the last grabbed pinned messages expression.",
      name: "Grab Pinned Messages",
      patterns: [
        "(retrieve|grab) pinned messages (of|in|with) %textchannel/user%",
      ],
      examples: ["grab pinned messages of event-channel"],
    },
    {
      description: "Pin a message in a channel.",
      name: "Pin Message",
      patterns: ["pin %messages% [with %bot/string%]"],
      examples: ["pin event-message in event-channel"],
    },
    {
      description: "Make a bot start typing in a text channel.",
      name: "Send typing",
      patterns: ["send typing in %textchannel/user% [with %bot/string%]"],
      examples: ["send typing in event-channel"],
    },
    {
      description:
        "This is for verified bots or bots that have enabled privileged intents and need to activate them in Vixio. The intents must be enabled before you login to your bot.",
      name: "Login",
      patterns: [
        "(login|connect) to %string% (using|with) [the] name %string%",
      ],
      examples: [
        "on skript load:",
        "\tcreate vixio bot:",
        "\t\tenable the guild members intent",
        '\t\tlogin to "YAHITAMUH" with the name "Neeko"',
      ],
    },
    {
      description: "Lets you mark a text channel as sfw/nsfw",
      name: "Change NSFW",
      patterns: [
        "(make|mark) %textchannels% [as] [<n>]sfw (with|using) %bot/string%",
      ],
      examples: [
        "discord command $nsfw <boolean>:",
        "\ttrigger:",
        "\t\tif arg-1 is true:",
        "\t\t\tmark event-channel as nsfw with event-bot",
        "\t\t\tstop",
        "\t\tmark event-channel as sfw with event-bot",
      ],
    },
    {
      description: "Bulk delete a bunch of messages.",
      name: "Purge Messages",
      patterns: ["purge %messages% with %bot/string%"],
      examples: [
        "discord command $purge <number>:",
        "\texecutable in: guild",
        "\ttrigger:",
        "\t\tset {_num} to arg-1 ",
        "\t\tgrab the last {_num} messages in event-channel",
        "\t\tpurge the grabbed messages with event-bot",
        "\t\tset {_error} to last vixio error ",
        "\t\tif {_error} is set:",
        '\t\t\treply with "I ran into an error! `%{_error}%`"',
        "\t\t\tstop",
        '\t\treply with "I have successfully purged %arg-1% messages"',
      ],
    },
    {
      description:
        "Lets you enable or disable text to speech for message builders",
      name: "Change TTS",
      patterns: ["(enable|disable) t[ext ]t[o ]s[peech] for %messagebuilders%"],
      examples: ["enable tts for {_message builder}"],
    },
    {
      description:
        "Pauses or resumes update's to a message's data. For example, if updates are pausedand a new reaction is added to the paused message, the message will still showas if it doesn't have that reaction.",
      name: "Updates",
      patterns: ["<pause|resume> updates (for|to) %messages%"],
      examples: [
        "on guild message receive:",
        "\tpause updates for event-message",
      ],
    },
    {
      description:
        "Send a file to a channel or a user. You can input a direct URL to the file or a direct path to the local image/file.",
      name: "Send file",
      patterns: [
        "upload %string% [with (message|embed) %-message/string%] to %user/channel% [with %bot/string%] [and store (it|the message) in %-objects%]",
      ],
      examples: [
        "discord command $upload [<text>] [<text>]:",
        "\ttrigger:",
        "\t\tif arg-1 is not set:",
        '\t\t\tupload "https://cdn.discordapp.com/attachments/236641445363056651/482328479288000513/e8873489-b8e8-41f0-bfdf-1af0e7f8689a.png" to event-channel',
        "\t\t\tstop",
        "\t\tif arg-2 is not set:",
        "\t\t\tupload arg-1 to event-channel",
        "\t\t\tstop",
        "\t\tupload arg-1 with message arg-2 to event-channel",
      ],
    },
    {
      description:
        "Create either a voice channel or a text channel as requested.",
      name: "Create channel",
      patterns: [
        "create text[(-| )]channel [named] %string% [in %guild%] [(as|with) %bot/string%]",
        "create voice[(-| )]channel [named] %string% [in %guild%] [(as|with) %bot/string%]",
      ],
      examples: [
        "discord command $create <text> <text>:",
        "\ttrigger:",
        '\t\tif arg-1 contains "voice":',
        "\t\t\tcreate voice channel named arg-2",
        "\t\t\tstop",
        '\t\telse if arg-1 contains "text":',
        "\t\t\tcreate text channel named arg-2",
        "\t\t\tstop",
        '\t\treply with "The first argument must either be ""text"" or ""voice"""',
      ],
    },
    {
      description:
        "Clone a existing channel into either a new guild or the current guild under a new name.",
      name: "Clone Channel",
      patterns: [
        "clone %channel% [in[to] %guild%] [with [the] [new] name %-string%] [(with|as) %bot/string%] [and store (it|the channel) in %-objects%]",
      ],
      examples: ['clone event-channel with the new name "Rawr!"'],
    },
    {
      description: "Create a channel created with the create channel scope",
      name: "Create Channel Builder",
      patterns: [
        "create %channelbuilder% in %guild% [(with|as) %bot/string%] [and store (it|the channel) in %-objects%]",
      ],
      examples: [
        "discord command ##create:",
        "\ttrigger:",
        "\t\tcreate voice channel:",
        '\t\t\tset the name of the channel to "{@bot}"',
        "\t\t\tset the bitrate of the channel to 69",
        "\t\t\tcreate the channel in event-guild",
      ],
    },
    {
      description:
        "Create a emote in a specific guild, the first %string% can either be a direct url or a direct local path to a file.",
      name: "Create emote",
      patterns: [
        "create emote %string% with [the] name %string% [in %guild%] [with %bot/string%]",
      ],
      examples: [
        "discord command $createEmote <text> <text>:",
        "\ttrigger:",
        "\t\tcreate emote arg-1 with name arg-2 ",
        "\t\twait 2 seconds",
        '\t\treply with "%reaction arg-2%"',
      ],
    },
    {
      description: "Delete any deletable discord entity",
      name: "Delete Discord Entity",
      patterns: [
        "delete discord entit(y|ies) %messages/channels/roles/guilds/categories/emote% [with %bot/string%]",
      ],
      examples: ["delete discord entity event-channel"],
    },
    {
      description:
        "Retrieve all of the banned users in a guild. The results are stored in the retrieved bans expression",
      name: "Bans list",
      patterns: ["(retrieve|grab) [the] (bans|ban list) of %guild%"],
      examples: [
        "discord command $bans:",
        "\ttrigger:",
        "\t\tgrab bans of event-guild",
        "\t\tset {_errors} to the last vixio error",
        "\t\tif {_errors} is set:",
        '\t\t\treply with "I ran into an error! %{_errors}%"',
        "\t\t\tstop",
        '\t\treply with "Here are the current bans: `%grabbed bans%`"',
      ],
    },
    {
      description: "Force a bot to leave a guild.",
      name: "Make Bot leave Guild",
      patterns: ["make %bot/string% leave %guild%"],
      examples: ["make event-bot leave event-guild"],
    },
    {
      description:
        "Move a member to a different voice channel, they must already be in a voice channel to be moved.",
      name: "Move Member to Voice Channel",
      patterns: ["move %member% to %voicechannel% [with %bot/string%]"],
      examples: [
        "discord command $move <member> <string>:",
        "\ttrigger:",
        "\t\tset {_voiceChannel} to voice channel with id arg-2",
        "\t\tif {_voiceChannel} is not set:",
        '\t\t\treply with "I could not find a voice channel by that id"',
        "\t\t\tstop",
        "\t\tmove arg-1 to {_voiceChannel}",
      ],
    },
    {
      description: "Allow, or deny a role or a member permissions to a channel",
      name: "Member Permission in GuildChannel",
      patterns: [
        "(allow|deny) %roles/members% [the] permission[s] %permissions% [in %channels%] [with %bot/string%]",
      ],
      examples: [
        "discord command grant <text> <permission>:",
        "\ttrigger:",
        '\t\tif id of event-guild is not "219967335266648065":',
        "\t\t\tstop",
        "\t\tset {_role} to role with id arg-1",
        "\t\tallow {_role} the permission arg-2 in event-channel",
        "\t\tdeny the public role of event-guild the permission arg-2 in event-channel",
      ],
    },
    {
      description:
        "Create a invitation to a channel. Can store the newly created invite with the storage option or use the last created invite expression.",
      name: "Create Invite to Channel",
      patterns: [
        "create a[n] (invite|invitation) to %channel% [with %bot/string%] [and store it in %-objects%]",
      ],
      examples: [
        "discord command invite:",
        "\ttrigger:",
        "\t\tcreate an invite to event-channel",
        '\t\treply with "%the last created invite%"',
      ],
    },
    {
      description:
        "Retrieve invites in a Guild or a Channel in a Guild. Must use the last retrieved invites expression to get them after calling this.",
      name: "Retrieve Invites of",
      patterns: ["(grab|retrieve) the invite(s| link[s]) of %guild/channel%"],
      examples: [
        "discord command test:",
        "\tprefixes: /",
        "\ttrigger:",
        "\t\tretrieve the invites of event-guild",
        '\t\treply with "%last grabbed invites%"',
      ],
    },
    {
      description: "Ban either a user, a member, or a user by their ID",
      name: "Ban user",
      patterns: [
        "ban %users/strings% from %guild% [(due to|with reason|because of) %-string%] [and delete %-number% days [worth] of messages] [(with|as) %bot/string%]",
      ],
      examples: [
        "command /ban <text>:",
        "\ttrigger:",
        '\t\tban arg-1 from guild with id "622156156316116151" due to "Not following discord rules" as "Jewel"',
      ],
    },
    {
      description:
        "Lets you deafen or undeafen a member/user. They must be in a voice channel for this to take effect.",
      name: "Deafen user",
      patterns: ["[<un>]deafen %members% [(with|using) %bot%]"],
      examples: [
        "discord command $deaf <member>:",
        "\ttrigger:",
        "\t\tif voice channel of arg-1 is not set:",
        '\t\t\treply with "You cannot deaf or undeafen someone who is not in a voice channel"',
        "\t\t\tstop",
        "\t\tif arg-1 is not guild deafened:",
        "\t\t\tdeafen arg-1 with event-bot",
        '\t\t\treply with "%arg-1% is now deaf"',
        "\t\telse:",
        "\t\t\tundeafen arg-1 with event-bot",
        '\t\t\treply with "%arg-1% is no longer deafened"',
      ],
    },
    {
      description: "Kick either a user, a member, or a user by their ID",
      name: "Kick user",
      patterns: [
        "kick %users/strings% from %guild% [(due to|with reason|because of) %-string%] [(with|as) %bot/string%]",
      ],
      examples: [
        "command /kick <text>:",
        "\ttrigger:",
        '\t\tkick arg-1 from guild with id "622156151" due to "Not following discord rules" as "Jewel"',
      ],
    },
    {
      description: "Either guild mute a member, or guild unmute a member.",
      name: "Mute/UnMute a User/Member",
      patterns: ["[<un>]mute %members% [(with|using) %bot%]"],
      examples: [
        "discord command $mute <member>:",
        "\ttrigger:",
        "\t\tif voice channel of arg-1 is not set:",
        '\t\t\treply with "You cannot mute or unmute someone who is not in a voice channel"',
        "\t\t\tstop",
        "\t\tif arg-1 is not guild muted:",
        "\t\t\tmute arg-1 with event-bot",
        '\t\t\treply with "%arg-1% is now muted"',
        "\t\telse:",
        "\t\t\tunmute arg-1 with event-bot",
        '\t\t\treply with "%arg-1% is no longer muted"',
      ],
    },
    {
      description: "Un-ban a user from a guild as a bot.",
      name: "Unban user from Guild",
      patterns: ["unban %users/strings% from %guild% [(with|as) %bot/string%]"],
      examples: [
        "command /ban <text>:",
        "\ttrigger:",
        "\t\tunban arg-1 from event-guild",
      ],
    },
    {
      description: "Acknowledge an interaction.",
      name: "Acknowledge Interaction",
      patterns: ["ack[nowledge] [the] interaction [event]"],
      examples: ["on slash command received:", "\tacknowledge interaction"],
    },
    {
      description: "Create a new slash command.",
      name: "Create Command",
      patterns: [
        "create command %string% with description %string% [in %-guild%] with %bot/string%",
      ],
      examples: [
        'create command "say" with description "Say a message" in event-guild',
      ],
    },
    {
      description: "Allow, or deny a role or a member permissions to a command",
      name: "Command Permission in Guild",
      patterns: [
        "(allow|deny|reset) %roles/users/members% access to %string% in %guild% [with %bot/string%]",
      ],
      examples: [
        "discord command grant <text> <string>:",
        "\ttrigger:",
        '\t\tif id of event-guild is not "219967335266648065":',
        "\t\t\tstop",
        "\t\tset {_role} to role with id arg-1",
        "\t\tallow {_role} access to arg-2 in event-guild",
        "\t\tdeny {_role} access to arg-2 in event-guild",
      ],
    },
    {
      description: "Defer an interaction.",
      name: "Defer Interaction",
      patterns: ["defer [the] interaction [event] (silently|normally)"],
      examples: ["on slash command received:", "\tdefer interaction"],
    },
    {
      description: "Send a follow up response to an interaction.",
      name: "Interaction Follow Up Response",
      patterns: [
        "say interaction message (silently|normally) (and say|with) %messages/strings%",
      ],
      examples: [
        "on slash command received:",
        '\tsay interaction message normally with "test"',
      ],
    },
    {
      description: "Respond to an interaction.",
      name: "Respond to Interaction",
      patterns: [
        "respond to [the] interaction [event] (silently|normally) (and say|with) %messages/strings%",
      ],
      examples: [
        "on slash command received:",
        '\trespond to the interaction normally with "test"',
      ],
    },
    {
      description:
        "Add text to a Message Builder. If you include the word 'line' then it will append a new line for you after your text.",
      name: "Append String to Message Buillder",
      patterns: ["append [line] %strings% to %messagebuilder%"],
      examples: [
        "command /build:",
        "\ttrigger:",
        "\t\tset {e} to a new message builder",
        '\t\tset text of {e} to "Hello"',
        '\t\tappend " World!" to {e}',
        'broadcast "The final product is: %text of {e}%"',
      ],
    },
    {
      description:
        "Add a reaction to a message, can get a reaction with the reaction %string% expression",
      name: "Add Reaction to Message",
      patterns: ["add %emotes% to %messages% [with %bot/string%]"],
      examples: ['add reaction "smile" to event-message with "Jewel"'],
    },
    {
      description:
        "A more natural way to edit a message. Don't forget that you can only edit your own messages.",
      name: "Edit Message",
      patterns: ["edit %messages% to (show|say) %message/string%"],
      examples: [
        "discord command $edit:",
        "\ttrigger:",
        '\t\treply with "Ping" and store it in {_msg}',
        '\t\tedit {_msg} to show "Pong!"',
      ],
    },
    {
      description:
        "Remove a specific users emote from a message, this is for removing a users reacted emote in the reaction add event mostly.",
      name: "Remove Emote by User",
      patterns: [
        "remove %emotes% added by %user% from %message% [with %bot/string%]",
      ],
      examples: [
        "on reaction added:",
        "\tremove event-emote added by event-user from event-message",
      ],
    },
    {
      description: "Reply to a message.",
      name: "Reply to Message",
      patterns: [
        "reply to %messages% (with|without) mention and say %message/string% [and store (it|the message) in %-objects%]",
      ],
      examples: [
        "discord command reply:",
        "\ttrigger:",
        '\t\treply to event-message with mention and say "Replied"',
      ],
    },
    {
      description: "Reply with a message in a event",
      name: "Reply with",
      patterns: [
        "reply with %messages/strings% [and store (it|the message) in %-objects%]",
      ],
      examples: ['reply with "Hello %mention tag of event-user%"'],
    },
    {
      description: "Get a Message via it's ID from a Guild/TextChannel",
      name: "Retrieve message with id",
      patterns: [
        "retrieve message [with id] %string% [(in|from) %channel/user%]",
      ],
      examples: [
        "discord command $addReaction <text> <text>:",
        "\ttrigger:",
        "\t\tretrieve message with id arg-1 ",
        "\t\tif last retrieved message is not set:",
        '\t\t\treply with "Could not find a message with that id!"',
        "\t\t\tstop",
        "\t\tadd reaction arg-2 to reactions of last retrieved message with event-bot",
      ],
    },
    {
      description: "Send a message to either a user or a text channel.",
      name: "Send Message",
      patterns: [
        "send %message/string/messagebuilder/embedbuilder% to %channels/users% with %bot/string% [and store (it|the message) in %-objects%]",
      ],
      examples: [
        "discord command $send <text> [<text>]:",
        "\ttrigger:",
        "\t\tif arg-2 is not set:",
        "\t\t\tsend arg-1 to event-channel with event-bot",
        "\t\t\tstop",
        "\t\tset {_channel} to channel with id arg-2",
        "\t\tif {_channel} is not set:",
        '\t\t\treply with "I could not find a channel with that id!"',
        "\t\t\tstop",
        "\t\tsend arg-1 to {_channel} with event-bot",
      ],
    },
    {
      description: "Delete a %message% with a specific bot",
      name: "Delete message",
      patterns: ["delete %message% with %bot/string%"],
      examples: ['delete event-message with "Jewel"'],
    },
  ],
  Expressions: [
    {
      description: "Check if a bot is paused or not. Can be set to true/false.",
      name: "Bot paused state",
      patterns: ["%bot/string% paused state [in %guild%]"],
      examples: [
        "discord command $pause:",
        "\texecutable in: guild",
        "\ttrigger:",
        "\t\tif event-bot is paused:",
        "\t\t\tset event-bot paused state to false",
        '\t\t\treply with "I\'m no longer paused"',
        "\t\t\tstop",
        "\t\tset event-bot paused state to true",
        '\t\treply with "I\'m now paused"',
      ],
    },
    {
      description:
        "Get all the tracks a bot currently has queued up for a guild.",
      name: "Queue of bot",
      patterns: ["[the] queue of %bot/string% [in %guild%]"],
      examples: [
        "discord command $reset:",
        "\ttrigger:",
        "\t\treset the queue of event-bot",
        '\t\treply with "You have successfully cleared my queue"',
      ],
    },
    {
      description: "Get the tracks a bot is playing in a specific guild.",
      name: "Track Bot Is Playing",
      patterns: ["[the] track[s] %bot/string% is playing [in %guild%]"],
      examples: [
        "discord command $info:",
        "\ttrigger:",
        "\t\tset {_track} to track event-bot is playing",
        "\t\tif {_track} is not set:",
        '\t\t\treply with "I am not currently playing anything!"',
        "\t\t\tstop",
        '\t\treply with "I am currently playing %name of {_track}% by %author of {_track}%"',
      ],
    },
    {
      description:
        "Get the volume a bot is set to in a guild. Can be set to a number that is between 0 and 150. This can also be reset which sets the volume to 150. Anything over 150 is ignored and the volume is set to 150.",
      name: "Volume of bot",
      patterns: ["[the] volume of %bot/string% [in %guild%]"],
      examples: [
        "discord command $volume [<number>]:",
        "\ttrigger:",
        "\t\tif arg-1 is not set:",
        '\t\t\treply with "%volume of event-bot%"',
        "\t\t\tstop",
        "\t\tset the volume of event-bot to arg-1",
        '\t\treply with "My volume is now: `%volume of event-bot%`"',
      ],
    },
    {
      description:
        "Get the type of game a user, a bot, or a bot specified by name is playing.",
      name: "Game type",
      patterns: [
        "[the] game type[s] of %bots/users/strings%",
        "%bots/users/strings%'[s] game type[s]",
      ],
      examples: [
        "discord command $streaming <user>:",
        "\ttrigger:",
        "\t\tset {_type} to the game type of event-user",
        "\t\tif {_type} is streaming:",
        '\t\t\treply with "%arg-1% is live!"',
        "\t\t\tstop",
        '\t\treply with "%arg-1% is not streaming currently"',
      ],
    },
    {
      description: "Get all enabled Gateway intentions a bot has",
      name: "Gateway Intents of bot",
      patterns: [
        "[the] [gateway] intent[s] of %bot/string%",
        "%bot/string%'[s] [gateway] intent[s]",
      ],
      examples: ["gateway intents of event-bot"],
    },
    {
      description: "Get all the guilds of a bot",
      name: "Guilds of bot",
      patterns: ["[the] guild[s] of %bot/string%", "%bot/string%'[s] guild[s]"],
      examples: ["guilds of event-bot"],
    },
    {
      description:
        "Get all the guilds a user and a bot share. The bot may be assumed in events.",
      name: "Mutual Guild of User",
      patterns: [
        "[the] mutual guilds (of|with) %user% [and %bot/string%]",
        "%user%[[']s] and %bot/string%[[']s] mutual guilds",
      ],
      examples: [
        "discord command $mutual <user>:",
        "\ttrigger:",
        '\t\treply with "I share %size of mutual guilds of arg-1% guilds with %arg-1%"',
      ],
    },
    {
      description:
        "Get the amount of time a bot has been up in a skript date form.",
      name: "Uptime Of Bot",
      patterns: [
        "[the] uptime[s] of %strings/bots%",
        "%strings/bots%'[s] uptime[s]",
      ],
      examples: [
        "discord command $uptime:",
        "\ttrigger:",
        '\t\treply with "I\'ve been awake for %uptime of event-bot%"',
      ],
    },
    {
      description: "Get the channel in a create channel scope",
      name: "The Channel",
      patterns: ["[(the|a)][new] channel[(-| )builder]"],
      examples: [
        "discord command $setup:",
        "\ttrigger:",
        "\t\tcreate text channel:",
        '\t\t\tset the name of the channel to "Bot channel"',
        '\t\t\tset the topic of the channel to "Hi Pika"',
        "\t\t\tcreate the channel in event-guild and store it in {_chnl}",
      ],
    },
    {
      description:
        "Get the bitrate of a channel builder. The default value is 64kbps for channel builders. Rates multiplied by 1000.You can set or reset this (resets to 64kbps)",
      name: "Bitrate of channel builder",
      patterns: [
        "[the] bitrate[s] of %channelbuilders%",
        "%channelbuilders%'[s] bitrate[s]",
      ],
      examples: [
        "discord command $create:",
        "\ttrigger:",
        "\t\tcreate voice channel:",
        '\t\t\tset the name of the channel to "{@bot}"',
        "\t\t\tset the bitrate of the channel to 69",
        "\t\t\tcreate the channel in event-guild",
      ],
    },
    {
      description: "Get or sets the user limit of a channel builder",
      name: "User limit of a channel builder",
      patterns: [
        "[the] user limit[s] of %channelbuilders%",
        "%channelbuilders%'[s] user limit[s]",
      ],
      examples: [
        "discord command $create:",
        "\ttrigger:",
        "\t\tcreate voice channel:",
        '\t\t\tset the name of the channel to "{@bot}"',
        "\t\t\tset the user limit of the channel to 5",
        "\t\tcreate the last made channel in event-guild and store it in {_chnl}",
        '\t\treply with "I have successfully created the channel! ID: %id of {_chnl}%"',
      ],
    },
    {
      description: "Get the name of a channel builder. Can be set to a string.",
      name: "Name of Channel Builder",
      patterns: [
        "[the] name[s] of %channelbuilders%",
        "%channelbuilders%'[s] name[s]",
      ],
      examples: [
        "discord command $create <text>:",
        "\ttrigger:",
        "\t\tcreate text channel:",
        "\t\t\tset the name of the channel to arg-1",
        "\t\tcreate the last made channel in event-guild and store it in {_chnl}",
        '\t\treply with "I have successfully created the channel! ID: %id of {_chnl}%"',
      ],
    },
    {
      description:
        "Returns whether or not a channel builder is NSFW (false by default). Can be set to either true or false.",
      name: "NSFW State of a channel builder",
      patterns: [
        "[the] nsfw state[s] of %channelbuilders%",
        "%channelbuilders%'[s] nsfw state[s]",
      ],
      examples: [
        "discord command $create <text> <boolean>:",
        "\ttrigger:",
        "\t\tcreate text channel:",
        "\t\t\tset the name of the channel to arg-1",
        "\t\t\tset the nsfw state of the channel to arg-2",
        "\t\tcreate the last made channel in event-guild and store it in {_chnl}",
        "\t\treply with \"I've successfully created a channel named `%arg-1%`",
        ' ID: %id of {_chnl}%"',
      ],
    },
    {
      description: "Get or set the category of a channel builder.",
      name: "Category of channel builder",
      patterns: [
        "[the] (category|parent)[s] of %channelbuilders%",
        "%channelbuilders%'[s] (category|parent)[s]",
      ],
      examples: [
        "discord command $create <text>:",
        "\ttrigger:",
        "\t\tcreate text channel:",
        "\t\t\tset the name of the channel to arg-1 ",
        '\t\t\tset the parent of the channel to category named "xd"',
        "\t\tcreate the last made channel in event-guild and store it in {_chnl}",
        "\t\treply with \"I've successfully created a channel named `%arg-1%`",
        ' ID: %id of {_chnl}%"',
      ],
    },
    {
      description: "Gets or sets the topic of a channel builder.",
      name: "Topic of channel builder",
      patterns: [
        "[the] topic[s] of %channelbuilders%",
        "%channelbuilders%'[s] topic[s]",
      ],
      examples: [
        "discord command $create <text>:",
        "\ttrigger:",
        "\t\tcreate text channel:",
        "\t\t\tset the name of the channel to arg-1 ",
        '\t\t\tset the topic of the channel to "Hi Pika"',
        "\t\tcreate the last made channel in event-guild and store it in {_chnl}",
        "\t\treply with \"I've successfully created a channel named `%arg-1%`",
        ' ID: %id of {_chnl}%"',
      ],
    },
    {
      description:
        "Get the last made Channel Builder created via the Channel Builder scope.",
      name: "Last Created Channel Builder",
      patterns: ["[the] last[ly] [(made|created)] channel[[ ]builder]"],
      examples: [
        "discord command $create <text>:",
        "\ttrigger:",
        "\t\tcreate text channel:",
        "\t\t\tset the name of the channel to arg-1 ",
        '\t\t\tset the topic of the channel to "Hi Pika"',
        "\t\tcreate the last made channel in event-guild and store it in {_chnl}",
        "\t\treply with \"I've successfully created a channel named `%arg-1%`",
        ' ID: %id of {_chnl}%"',
      ],
    },
    {
      description:
        "Get the bitrate of a voice channel. The default value is 64kbps for channel builders. Rates multiplied by 1000. You can set or reset this (resets to 64kbps)",
      name: "Bitrate of Voice Channel",
      patterns: [
        "[the] bitrate[s] of %voicechannels%",
        "%voicechannels%'[s] bitrate[s]",
      ],
      examples: [
        "discord command $bitrate <string> <number>:",
        "\ttrigger:",
        "\t\tset bitrate of voice channel with id arg-1 to arg-2",
      ],
    },
    {
      description: "Get or sets the user limit of a voice channel",
      name: "User limit of Voice Channel",
      patterns: [
        "[the] user limit[s] of %voicechannels%",
        "%voicechannels%'[s] user limit[s]",
      ],
      examples: [
        "discord command $bitrate <string> <number>:",
        "\ttrigger:",
        "\t\tset user limit of voice channel with id arg-1 to arg-2 with event-bot",
      ],
    },
    {
      description:
        "Get a channel via it's name, you can include the type of channel and/or the guild to speed the retrieval process up. The searching is case sensitive.",
      name: "Channel Named",
      patterns: [
        "[(voice|text)][(-| )]channel[s] named %string% [in %-guild%]",
      ],
      examples: [
        "discord command move <text>:",
        "\ttrigger:",
        "\t\tset {_} to voice channel named arg-1",
        "\t\tif voice channel of event-member is not set:",
        '\t\t\treply with "Not in vc to move to"',
        "\t\t\tstop",
        "\t\tmove event-member to {_}",
        '\t\treply with "Done! %event-member% was moved to %{_}%"',
      ],
    },
    {
      description:
        "Returns whether or not a channel is NSFW (false by default). This can be set to a boolean or reset.",
      name: "NSFW state of Text Channel",
      patterns: [
        "[the] nsfw state[s] of %textchannels%",
        "%textchannels%'[s] nsfw state[s]",
      ],
      examples: [
        "discord command nsfw <boolean>:",
        "\tprefixes: $",
        "\ttrigger:",
        "\t\tset nsfw state of event-channel to arg-1",
      ],
    },
    {
      description: "Get or set the category of a channel.",
      name: "Category of Channel",
      patterns: [
        "[the] (category|parent)[s] of %channels%",
        "%channels%'[s] (category|parent)[s]",
      ],
      examples: [
        "discord command $category <string> <string>:",
        "\ttrigger:",
        "\t\tset {_category} to category named arg-2",
        "\t\tset {_channel} to channel with id arg-1",
        "\t\tset parent of {_channel} to {_category} with event-bot",
        '\t\treply with "Successfully moved %{_channel}% to %{_category}%"',
      ],
    },
    {
      description:
        "Get or set the current position of a role or a channel. With channels, 0 is the highest channel, with roles 0 is the lowest custom role, then 1 is the next role up, then 2...",
      name: "Position of",
      patterns: [
        "[the] discord position[s] of %channels/roles%",
        "%channels/roles%'[s] discord position[s]",
      ],
      examples: [
        "discord command $pos <text>:",
        "\ttrigger:",
        "\t\tset {_vc} to channel with id arg-1",
        '\t\treply with "%{_vc}%"',
        '\t\treply with "%discord position of {_vc}%"',
      ],
    },
    {
      description:
        "Get or set the topic of a text channel. You may also delete the topic to reset it.",
      name: "Topic of Text Channel",
      patterns: [
        "[the] topic[s] of %textchannels%",
        "%textchannels%'[s] topic[s]",
      ],
      examples: ['set topic of event-channel to "Hi Pika" with event-bot'],
    },
    {
      description: "Get or set the type of a channel.",
      name: "Type of Channel",
      patterns: ["[the] type[s] of %channels%", "%channels%'[s] topic[s]"],
      examples: ['set type of event-channel to "TEXT" with event-bot'],
    },
    {
      description:
        "Get the grabbed messages from the grab messages effect. This can be used in the purge effect to purge the messages.",
      name: "Grabbed Messages",
      patterns: ["[the] grabbed messages"],
      examples: [
        "discord command $purge <number>:",
        "\texecutable in: guild",
        "\ttrigger:",
        "\t\tset {_num} to arg-1 ",
        "\t\tgrab the last {_num} messages in event-channel",
        "\t\tpurge the grabbed messages with event-bot",
        "\t\tset {_error} to last vixio error ",
        "\t\tif {_error} is set:",
        '\t\t\treply with "I ran into an error! `%{_error}%`"',
        "\t\t\tstop",
        '\t\treply with "I have successfully purged %arg-1% messages"',
      ],
    },
    {
      description: "Get the results of the last grab pinned messages search.",
      name: "Last Retrieved Pins",
      patterns: ["[last] (grabbed|retrieved) (pins|pinned messages)"],
      examples: [
        "discord command $pins:",
        "\ttrigger:",
        "\t\tgrab pinned messages in event-channel",
        '\t\treply with "%grabbed pins%"',
      ],
    },
    {
      description:
        "Set the slowmode of a text channel. Only text channels can have have their slowmode set and retrieved. This can be set, reset, and deleted.",
      name: "Slowmode of TextChannel",
      patterns: [
        "[the] slowmode[s] of %channel/textchannel%",
        "%channel/textchannel%'[s] slowmode[s]",
      ],
      examples: ['broadcast "slowmode of event-channel"'],
    },
    {
      description: "Returns the used alias in a command",
      name: "Used Alias",
      patterns: ["[the] used alias"],
      examples: ["broadcast the used alias"],
    },
    {
      description: "Returns the aliases of a command",
      name: "Aliases of command",
      patterns: [
        "[the] [<usable>] aliases[s] of %discordcommands%",
        "%discordcommands%'[s] [<usable>] aliases[s]",
      ],
      examples: [
        'broadcast aliases of "commandname" parsed as a discord command',
      ],
    },
    {
      description: "Represents the argument of a command",
      name: "Last Argument",
      patterns: ["[the] last arg[ument][s]"],
      examples: [
        "discord command say <string>:",
        "\tprefixes: !",
        " . and ;",
        "\ttrigger:",
        "\t\treply with arg-1 # replies with the first argument",
      ],
    },
    {
      description: "Returns the used command in a command",
      name: "Used Command",
      patterns: ["[the] used command"],
      examples: ["broadcast aliases of the used command"],
    },
    {
      description: "Returns all registered discord commands",
      name: "All Commands",
      patterns: ["[all] discord commands"],
      examples: [
        "loop all discord commands:",
        "\tbroadcast description of loop-value",
      ],
    },
    {
      description: "Returns the description of a command.",
      name: "Description of Command",
      patterns: [
        "[the] description[s] of %discordcommands%",
        "%discordcommands%'[s] description[s]",
      ],
      examples: [
        'broadcast description of "commandname" parsed as a discord command',
      ],
    },
    {
      description: "Returns the used prefix in a command",
      name: "Used Prefix",
      patterns: ["[the] used prefix"],
      examples: ["broadcast the used prefix"],
    },
    {
      description: "Returns the prefixes of a command",
      name: "Prefixes of command",
      patterns: [
        "[the] prefixes[s] of %discordcommands%",
        "%discordcommands%'[s] prefixes[s]",
      ],
      examples: [
        'broadcast prefixes of "commandname" parsed as a discord command',
      ],
    },
    {
      description: "Returns the type of channel a command was sent to",
      name: "Command Recipient",
      patterns: ["[the] command recipient"],
      examples: ["broadcast the command recipient"],
    },
    {
      description: "Returns the usage of a command.",
      name: "Usage of Command",
      patterns: [
        "[the] usage[s] of %discordcommands%",
        "%discordcommands%'[s] usage[s]",
      ],
      examples: [
        'broadcast usage of "commandname" parsed as a discord command',
      ],
    },
    {
      description:
        "If it isn't inside an embed scope, this expression returns a new embed. If it is inside of an embed scope, it returns the embed that belongs to that scope.",
      name: "New/Current Embed",
      patterns: ["[(the|an|[a] new)] embed"],
      examples: [
        "# outside a scope",
        "set {_e} to a new embed",
        "make embed:",
        "\tset color of embed the embed to red",
        '\tset url of the embed to "https://google.com"',
        '\tset title of the embed to "Google!"',
        "set {_embed} to last made embed",
      ],
    },
    {
      description: "Returns the author of an embed. Can be set any author.",
      name: "Author of Embed",
      patterns: [
        "[the] author[s] of %embedbuilders%",
        "%embedbuilders%'[s] author[s]",
      ],
      examples: [
        'set author of {_embed} to an author named "Hi Pika" and icon "https://i.imgur.com/TQgR2hW.jpg" and url "https://1a3dev.github.io/VixioSite/"',
      ],
    },
    {
      description:
        "Returns the color of an embed. Can be set to any color (e.g. red).",
      name: "Color of Embed",
      patterns: [
        "[the] colo[u]r[s] of %embedbuilders%",
        "%embedbuilders%'[s] colo[u]r[s]",
      ],
      examples: ["set discord color of {_embed} to red"],
    },
    {
      description:
        "Returns the description of an embed. Can be set to any string.",
      name: "Description of Embed",
      patterns: [
        "[the] description[s] of %embedbuilders%",
        "%embedbuilders%'[s] description[s]",
      ],
      examples: [
        'set the description of {_embed} to "This is a cool description!"',
      ],
    },
    {
      description: "Returns a embed's fields",
      name: "Fields Of Embed",
      patterns: [
        "[the] field[s] of %embedbuilders%",
        "%embedbuilders%'[s] field[s]",
      ],
      examples: ["set {_fields::*} to fields of {_embed}"],
    },
    {
      description: "Returns the footer of an embed. Can be set any footer.",
      name: "Footer of Embed",
      patterns: [
        "[the] footer[s] of %embedbuilders%",
        "%embedbuilders%'[s] footer[s]",
      ],
      examples: [
        'set footer of {_embed} to a footer with text "Hi Pika" and icon "https://i.imgur.com/TQgR2hW.jpg"',
      ],
    },
    {
      description: "Returns the image of an embed. Can be set any url.",
      name: "Image of Embed",
      patterns: [
        "[the] image[s] of %embedbuilders%",
        "%embedbuilders%'[s] image[s]",
      ],
      examples: [
        'set the image of {_embed} to "https://i.imgur.com/TQgR2hW.jpg"',
      ],
    },
    {
      description: "Get the Embed of a Message",
      name: "Embed of Message",
      patterns: ["[the] embeds[s] of %messages%", "%messages%'[s] embeds[s]"],
      examples: ['broadcast "%embeds of event-message%"'],
    },
    {
      description:
        "Returns the thumbnail of an embed. Can be set to any string (e.g. https://i.imgur.com/TQgR2hW.jpg).",
      name: "Thumbnail of Embed",
      patterns: [
        "[the] (thumbnail|icon)[s] of %embedbuilders%",
        "%embedbuilders%'[s] (thumbnail|icon)[s]",
      ],
      examples: [
        'set the thumbnail of {_embed} to "https://i.imgur.com/TQgR2hW.jpg"',
      ],
    },
    {
      description: "Returns the title of an embed.",
      name: "Title of Embed",
      patterns: [
        "[the] title[s] of %embedbuilders%",
        "%embedbuilders%'[s] title[s]",
      ],
      examples: [
        'set the embed title of {_embed} to title with text "hey this is a cool title!" and no icon',
      ],
    },
    {
      description:
        "Lets you easily make an embed with a couple common properties.",
      name: "Inline Embed",
      patterns: [
        "%embedbuilder% ((with|and) [the] title %-string%|titled %-string%)",
        "%embedbuilder% (with|and) [the] description %string%",
      ],
      examples: [
        'set {_embed} to a new embed with the title "Title" and the description "Description"',
      ],
    },
    {
      description: "Returns the embed that was last made in a embed scope",
      name: "Last Made Embed",
      patterns: ["[the] last[ly] [(made|created)] embed[[ ]builder]"],
      examples: ["set {_embed} to the last embed"],
    },
    {
      description: "Returns the url of a title.",
      name: "Url of Title",
      patterns: [
        "[the] (url|link)[s] of %titles%",
        "%titles%'[s] (url|link)[s]",
      ],
      examples: ['broadcast "%link of {_embed}\'s title%"'],
    },
    {
      description:
        "Returns a dimension of an embed's thumbnail, image, footer icon or icon. You can specify either width or height.",
      name: "Dimension of Image",
      patterns: [
        "[the] <width|height>[s] of %thumbnails/imageinfos%",
        "%thumbnails/imageinfos%'[s] <width|height>[s]",
      ],
      examples: ['reply with "%width of {_embed}\'s thumbnail%"'],
    },
    {
      description:
        "Returns the url of an embed's thumbnail, footer icon, author, icon or large image. Adding the proxy modifier to the syntax will return Discord's proxy url if possible.",
      name: "Url of Image",
      patterns: [
        "[the] [<proxy>] url[s] of %thumbnails/imageinfos/footers/authorinfos%",
        "%thumbnails/imageinfos/footers/authorinfos%'[s] [<proxy>] url[s]",
      ],
      examples: ['broadcast "%proxy url of {_embed}\'s thumbnail%"'],
    },
    {
      description: "Returns a author with the specified data",
      name: "New Author",
      patterns: [
        "[an] author named %string%[( and [the]|, )(icon %-string%|no icon)][( and [the]|, )(url %-string%|no url)]",
      ],
      examples: [
        'set author of {_embed} to an author named "Hi Pika" and icon "https://i.imgur.com/TQgR2hW.jpg" and url "https://1a3dev.github.io/VixioSite/"',
      ],
    },
    {
      description: "Returns a field with the specified data",
      name: "New Field",
      patterns: [
        "[(a|the)] (split|inline) field[s] [named %-string%] [with [the] value %-string%]",
        "[(a|the)] field[s] [named %-string%] [with [the] value %-string%]",
      ],
      examples: [
        'set field of {_embed} to a split field named "Super cool field" and value "Super cool value"',
      ],
    },
    {
      description: "Returns a footer with the specified data",
      name: "New Footer",
      patterns: [
        "[a] footer with [the] text %string%[( and [the]|, )(icon %-string%|no icon)]",
      ],
      examples: [
        'set footer of {_embed} to a footer with text "Hi Pika" and icon "https://i.imgur.com/TQgR2hW.jpg"',
      ],
    },
    {
      description: "Returns a title with the specified data",
      name: "New Title",
      patterns: [
        "[a] title [with] [the] text %string%[( and [the]|, )((url|link) %-string%|no (url|link))]",
      ],
      examples: [
        'set title of {_embed} to a title with text "Vixio" and url "https://i.imgur.com/TQgR2hW.jpg"',
      ],
    },
    {
      description:
        "Get the new channel or previous channel for the member channel switch event.",
      name: "New and Previous Channel",
      patterns: [
        "[the] (prev[ious]|old) [voice] channel",
        "[the] new [voice] channel",
      ],
      examples: [
        "on member switch voice channel:",
        '\tbroadcast "%event-user% left %old channel% and joined %new channel%"',
      ],
    },
    {
      description:
        "A color that can be more specific that Skript's color type.",
      name: "Color",
      patterns: [
        "[java[ ]]colo[u]r from rgb %number%(, | and )%number%(, | and )%number%",
      ],
      examples: [
        "set {_color} to color from rgb 0",
        " 0 and 0 # results in black",
        "set {_color} to black # results in black",
        'set {_color} to "black" parsed as a color  # results in black',
      ],
    },
    {
      description:
        "Get a emoji by its name, if its a custom emote you must include the guild.",
      name: "Emoji Named",
      patterns: ["(emoji|emote|reaction)[s] %strings% [(from|in) %-guild%]"],
      examples: [
        "on guild message receive:",
        '\tadd reaction "smile" to event-message',
      ],
    },
    {
      description: "Get the guild of various types.",
      name: "Guild of",
      patterns: [
        "[the] guild[s] of %channel/voicechannel/message/emote/category/role/member/invite%",
        "%channel/voicechannel/message/emote/category/role/member/invite%'[s] guild[s]",
      ],
      examples: ["set {_guild} to guild of event-message"],
    },
    {
      description: "Get the ID of any discord entity.",
      name: "ID of",
      patterns: [
        "[the] discord id[s] of %channel/guild/bot/user/message/role/avatar/category/member/emote/attachment%",
        "%channel/guild/bot/user/message/role/avatar/category/member/emote/attachment%'[s] discord id[s]",
      ],
      examples: ['reply with "%id of event-user%"'],
    },
    {
      description: "Set when Vixio runs into a error, like a permission error.",
      name: "Last Vixio Error",
      patterns: ["[the] last vixio error"],
      examples: [
        "discord command $ban <member>:",
        "\ttrigger:",
        "\t\tban arg-1 from event-guild ",
        "\t\tset {_error} to the last vixio error",
        "\t\tif {_error} is set:",
        '\t\t\treply with "I tried to ban that user but didn\'t have the perms!"',
      ],
    },
    {
      description:
        "Get the mention tag of any discord entity that can be mentioned.",
      name: "Mention of",
      patterns: [
        "[the] mention tag[s] of %users/channel/members/emotes/roles/textchannel%",
        "%users/channel/members/emotes/roles/textchannel%'[s] mention tag[s]",
      ],
      examples: ["reply with mention tag of event-user"],
    },
    {
      description:
        "Get the name of any discord entity. You can set the name of channels, guilds, bots, categories, and channel builders.",
      name: "Name of",
      patterns: [
        "[the] discord name[s] of %channel/guild/bot/user/role/track/category/emote/field/attachment%",
        "%channel/guild/bot/user/role/track/category/emote/field/attachment%'[s] discord name[s]",
      ],
      examples: ['broadcast "%discord name of event-user%"'],
    },
    {
      description:
        "Get the new or previous nickname from the nick change event.",
      name: "New and Previous Nicknames",
      patterns: ["[the] prev[ious] nick[name]", "[the] new nick[name]"],
      examples: [
        "on nickname change:",
        '\tbroadcast "%event-member% has changed their nick from %prev nick% to %new nick%"',
      ],
    },
    {
      description:
        "Get the roles that were added or removed in the member role added and member role removed events.",
      name: "Added or Removed roles.",
      patterns: ["[the] role[s]"],
      examples: ["SOON"],
    },
    {
      description:
        "Represents the search results from the last usage of the search effect. The search results get reset every time the search effect is used.",
      name: "Search Results",
      patterns: ["[the] [last] search results"],
      examples: [
        "on join:",
        '\tsearch youtube for "%player%" and store the results in {_results::*}',
        "\tif search results are set:",
        '\t\tmessage "Did you know there are %size of search results% videos about you on YouTube?" to player',
      ],
    },
    {
      description:
        "Retrieve a user by their name. If the [s] is included in users than this will return a list.If the s is not included but their are multiple people with the same name, then the first one will be returned.This does NOT retrieve the user from Discord. This is from what your bots can see.",
      name: "User Named",
      patterns: ["user[s] (with [the] name|named) %string% [in %-guild%]"],
      examples: [
        "discord command user <text>:",
        "\ttrigger:",
        "\t\tset {_} to user with the name arg-1 in event-guild",
        '\t\treply with "Oh',
        ' found them! %discord name of {_}%##%discriminator of {_}%"',
      ],
    },
    {
      description:
        "Get all of the categories in a guild. You may add a category to this by name which creates a category, or delete/remove a category by inputting a category.",
      name: "Categories of guild",
      patterns: [
        "[the] categories[s] of %guilds%",
        "%guilds%'[s] categories[s]",
      ],
      examples: [
        "discord command $categories:",
        "\ttrigger:",
        "\t\tset {_categories::*} to the categories of event-guild",
        '\t\treply with "Here are the current categories: `%{_categories::*}%`"',
      ],
    },
    {
      description: "Get a Category by its name in a Guild.",
      name: "Category named",
      patterns: [
        "[the] category (with [the] name|named) %string% [in %guild%]",
      ],
      examples: [
        "discord command $create <text>:",
        "\ttrigger:",
        "\t\tcreate text channel:",
        "\t\t\tset the name of the channel to arg-1 ",
        '\t\t\tset the parent of the channel to category named "xd"',
        "\t\tcreate the last made channel in event-guild and store it in {_chnl}",
        "\t\treply with \"I've successfully created a channel named `%arg-1%`",
        ' ID: %id of {_chnl}%"',
      ],
    },
    {
      description: "Get a Category via it's ID.",
      name: "Category with ID",
      patterns: ["category with id %string% [in %-guild%]"],
      examples: ['reply with "%category with id ""4516161651""%"'],
    },
    {
      description: "Get or set the owner of a guild.",
      name: "Owner of Guild",
      patterns: [
        "[the] discord owner[s] of %guilds%",
        "%guilds%'[s] discord owner[s]",
      ],
      examples: [
        "discord command $transfer <member>:",
        "\ttrigger:",
        "\t\tset discord owner of event-guild to arg-1 with event-bot",
      ],
    },
    {
      description:
        "Get the AFK voice channel of a guild. You can set this to another channel.",
      name: "Afk channel of Guild",
      patterns: [
        "[the] afk channel[s] of %guilds%",
        "%guilds%'[s] afk channel[s]",
      ],
      examples: [
        "discord command $afk:",
        "\ttrigger:",
        '\t\treply with "%afk channel of event-guild%"',
      ],
    },
    {
      description:
        "Get the last set of retrieved bans from a guild. The bot must have enough permissions to retrieve the bans list.",
      name: "Retrieved bans",
      patterns: ["[last] (grabbed|retrieved) bans"],
      examples: [
        "discord command $bans:",
        "\ttrigger:",
        "\t\tgrab bans of event-guild",
        '\t\treply with "Here are the banned users: %grabbed bans%"',
      ],
    },
    {
      description: "Get all of the channels of a guild or category.",
      name: "Channels of",
      patterns: [
        "[the] channel[s] of %guild/category%",
        "%guild/category%'[s] channel[s]",
      ],
      examples: [
        "discord command $channels [<text>]:",
        "\ttrigger:",
        "\t\tif arg-1 is not set:",
        '\t\t\treply with "Here are the current channels: `%channels of event-guild%`"',
        "\t\t\tstop",
        "\t\tset {_category} to category named arg-1",
        '\t\treply with "Here are the channels of the category named %arg-1%: `%channels of {_category}%`"',
      ],
    },
    {
      description: "Get the creation date of most things in Discord.",
      name: "Discord Creation Date of",
      patterns: [
        "[the] discord creation date[s] of %channel/guild/message/role/category/emote/attachment%",
        "%channel/guild/message/role/category/emote/attachment%'[s] discord creation date[s]",
      ],
      examples: ['broadcast "%discord creation date of event-guild%"'],
    },
    {
      description: "Get all of the emotes a guild has added.",
      name: "Emotes of guild",
      patterns: [
        "[the] [<global>] emote[s] of %guild%",
        "%guild%'[s] [<global>] emote[s]",
      ],
      examples: [
        "discord command $emotes:",
        "\texecutable in: guild",
        "\ttrigger:",
        "\t\tloop emotes of event-guild:",
        "\t\t\tif loop-value is animated:",
        "\t\t\t\tadd loop-value to {_animated::*}",
        "\t\t\telse:",
        "\t\t\t\tadd loop-value to {_non::*}",
        "\t\tcreate embed:",
        '\t\t\tset the author info of the embed to author named "Emotes %reaction "":smile:""%" with no url and no icon',
        '\t\t\tset the description of the embed to "%name of event-guild% has %size of {_non::*}% regular emotes and %size of {_animated::*}% animated emotes!!"',
        "\t\t\tset the colour of the embed to Purple",
        '\t\t\tadd field named "Local emotes (1/1)" with value "%{_non::*}%" to embed',
        '\t\t\tadd field named "Animated emotes (1/1)" with value "%{_animated::*}%" to embed',
        "\t\tsend the last created embed to event-channel with event-bot",
      ],
    },
    {
      description: "Get a guild's icon url.",
      name: "Icon URL of Guild",
      patterns: ["[the] icon[s] of %guilds%", "%guilds%'[s] icon[s]"],
      examples: ['reply with "%icon of event-guild%"'],
    },
    {
      description:
        "Get the last invite created by vixio, can specify the specific channel if you want.",
      name: "Last Created Invitation",
      patterns: ["[the] last created invite [for %-channel%]"],
      examples: [
        "discord command invite:",
        "\ttrigger:",
        "\t\tcreate an invite to event-channel",
        '\t\treply with "%the last created invite%"',
      ],
    },
    {
      description: "Get all of the Member from a variety of different types.",
      name: "Members of",
      patterns: [
        "[the] discord member[s] of %guild/category/channel%",
        "%guild/category/channel%'[s] discord member[s]",
      ],
      examples: [
        "discord command $guild:",
        "\ttrigger:",
        '\t\treply with "%size of discord members of event-guild%"',
      ],
    },
    {
      description: "Get the public role in a guild. This is the everyone role.",
      name: "Public Role of Guild",
      patterns: [
        "[the] public role[s] of %guild%",
        "%guild%'[s] public role[s]",
      ],
      examples: [
        "discord command role:",
        "\ttrigger:",
        '\t\treply with "`%public role of event-guild%`"',
      ],
    },
    {
      description: "Get a role via it's name in a guild.",
      name: "Role Named",
      patterns: [
        "[the] role[<s>] (with [the] name|named) %string% [in %guild%]",
      ],
      examples: [
        "discord command $role <text>:",
        "\ttrigger:",
        "\t\tset {_role} to role named arg-1",
        "\t\tif {_role} is not set:",
        '\t\t\treply with "Could not find a role by that name!"',
        "\t\t\tstop",
        '\t\treply with "I found the role! ID: %id of {_role}%"',
      ],
    },
    {
      description: "Get all of the roles a guild has.",
      name: "Roles of Guild",
      patterns: ["[the] role[s] of %guild%", "%guild%'[s] role[s]"],
      examples: [
        "discord command $roles:",
        "\ttrigger:",
        '\t\treply with "Here are the current roles: `%roles of event-guild%`"',
      ],
    },
    {
      description: "Get all of the text channels in a guild or a category.",
      name: "Text Channels of",
      patterns: [
        "[the] text(-| )channel[s] of %guild/category%",
        "%guild/category%'[s] text(-| )channel[s]",
      ],
      examples: [
        "discord command $channels [<text>]:",
        "\ttrigger:",
        "\t\tif arg-1 is not set:",
        '\t\t\treply with "Here are the current channels: `%channels of event-guild%`"',
        "\t\t\tstop",
        "\t\tset {_category} to category named arg-1",
        '\t\treply with "Here are the channels of the category named %arg-1%: `%channels of {_category}%`"',
      ],
    },
    {
      description:
        "Get a Guild's verification level. This can be reset and set.",
      name: "Discord Verification level of Guild",
      patterns: [
        "[the] discord verification level[s] of %guilds%",
        "%guilds%'[s] discord verification level[s]",
      ],
      examples: ['broadcast "%discord verification level of event-guild%"'],
    },
    {
      description: "Get all of the voice channels of a guild or category.",
      name: "Voice Channels",
      patterns: [
        "[the] voice[(-| )]channels of %guild/category%",
        "%guild/category%'[s] voice[(-| )]channels",
      ],
      examples: [
        "on guild message receive:",
        "\tset {_channels::*} to voice channels of event-guild",
        "\tloop {_channels::*}:",
        '\t\tbroadcast "%name of loop-value%"',
      ],
    },
    {
      description: "Get the channel an invite was created for.",
      name: "Channel of",
      patterns: [
        "[the] [discord] channel[s] of %invite%",
        "%invite%'[s] [discord] channel[s]",
      ],
      examples: [
        "discord command parse <text>:",
        "\tprefixes: /",
        "\ttrigger:",
        "\t\tretrieve the invites of event-guild ",
        "\t\tset {in::*} to last grabbed invites",
        "\t\tloop {in::*}:",
        '\t\t\tif "%loop-value%" contains arg-1:',
        "\t\t\t\tset {_} to loop-value",
        "\t\tmake embed and send it to event-channel:",
        '\t\t\tset the title of the embed to title with text "Parsing results for invite: %invite url of {_}%"',
        "\t\t\tset the colour of the embed to Cyan ",
        '\t\t\tset the thumbnail of embed to "https://cdn.discordapp.com/icons/236641445363056651/e51b2c2f4d539f7c18ae966d60992d25.png"',
        '\t\t\tadd field named "Max Uses" with value "%max uses of {_}%" to embed ',
        '\t\t\tadd field named "Max Age (In Seconds)" with value "%max age of {_}%" to embed',
        '\t\t\tadd field named "Time Created" with value "%creation date of {_}%" to embed',
        '\t\t\tadd field named "Guild" with value "%guild of {_}%" to embed',
        '\t\t\tadd field named "Channel" with value "%channel of {_}%" to embed',
      ],
    },
    {
      description:
        "If it isn't inside an invite creation scope, this expression returns a new invite. If it is inside an invite creation scope, it returns the invite that belongs to that scope.",
      name: "New/Current Invite",
      patterns: ["[(the|an|[a] new)] invite"],
      examples: [
        "discord command rawr:",
        "\tprefixes: /",
        "\ttrigger:",
        "\t\tcreate invite to event-channel with event-bot:",
        "\t\t\tset max uses of the invite to 5",
        "\t\t\tset {_} to the invite",
        '\t\treply with "%creation date of of {_}%"',
      ],
    },
    {
      description:
        "Set how long an invite that is being created in the invite creation scope should last. (In seconds).This defaults to 86400 seconds (24 Hours.). Set it to 0 if you want it to never expire. This number cannot be negative",
      name: "Max Age",
      patterns: ["[the] max age[s] of %invite%", "%invite%'[s] max age[s]"],
      examples: [
        "discord command invite:",
        "\tprefixes: /",
        "\ttrigger:",
        "\t\tcreate invite to event-channel:",
        "\t\t\tset the max usage of the invite to 1",
        "\t\t\tset the max age of the invite to 36",
        "\t\t\tset {_} to the invite",
        '\t\treply with "%max age of {_}%"',
      ],
    },
    {
      description:
        "Get either how many times an invite can be used, or set how many times an invite can be used inside the invite creation scope.",
      name: "Invite Max Usage",
      patterns: [
        "[the] max (use[s]|usage)[s] of %invite%",
        "%invite%'[s] max (use[s]|usage)[s]",
      ],
      examples: [
        "discord command rawr:",
        "\tprefixes: /",
        "\ttrigger:",
        "\t\tcreate invite to event-channel with event-bot:",
        "\t\t\tset max uses of the invite to 5",
        "\t\t\tset {_} to the invite",
        '\t\treply with "%max uses of {_}%"',
      ],
    },
    {
      description: "Get the time a discord invite was created.",
      name: "Creation date of Invite",
      patterns: [
        "[the] [invite] creation date[s] of %invite%",
        "%invite%'[s] [invite] creation date[s]",
      ],
      examples: [
        "discord command rawr:",
        "\tprefixes: /",
        "\ttrigger:",
        "\t\tcreate invite to event-channel with event-bot:",
        "\t\t\tset max uses of the invite to 5",
        "\t\t\tset {_} to the invite",
        '\t\treply with "%creation date of of {_}%"',
      ],
    },
    {
      description: "Get the Url of a Discord invite.",
      name: "Invite Url of",
      patterns: [
        "[the] invite url[s] of %invite%",
        "%invite%'[s] invite url[s]",
      ],
      examples: [
        "discord command invite:",
        "\tprefixes: /",
        "\ttrigger:",
        "\t\tcreate invite to event-channel:",
        "\t\t\tset the max usage of the invite to 1",
        "\t\t\tset {_} to the invite",
        '\t\treply with "Done! Created: %invite url of {_}%"',
      ],
    },
    {
      description: "Get the invites the retrieve invites effect retrieved.",
      name: "Retrieved Invites",
      patterns: ["[the] last (grabbed|retrieved) invites"],
      examples: [
        "discord command test:",
        "\tprefixes: /",
        "\ttrigger:",
        "\t\tretrieve the invites of event-guild",
        '\t\treply with "%last grabbed invites%"',
      ],
    },
    {
      description: "Get the color of a role. This can be set to any color.",
      name: "Color of Role",
      patterns: ["[the] colo[u]r[s] of %roles%", "%roles%'[s] colo[u]r[s]"],
      examples: ["set the color of {_role} to red with event-bot"],
    },
    {
      description: "Get the label from a button interaction.",
      name: "Button Label",
      patterns: ["[the] button [interaction] label"],
      examples: ["button label"],
    },
    {
      description: "Get the content of a slash command option.",
      name: "Slash Command Option",
      patterns: ["[the] [slash] [command] option [with id] %string%"],
      examples: ['slash command option "name"'],
    },
    {
      description: "Get the selected options on the select interaction event.",
      name: "Selected options.",
      patterns: ["[the] selection[s]"],
      examples: ["SOON"],
    },
    {
      description:
        "Get the deafened state of a member in a guild. If they are deafened by someone then this returns true. This will not be updated unless a user is in a voice channel when they are deafened.",
      name: "Guild Deafened State of Member",
      patterns: [
        "[the] [<guild>] deafen[ed] state[s] of %members%",
        "%members%'[s] [<guild>] deafen[ed] state[s]",
      ],
      examples: [
        "on guild message receive:",
        '\treply with "%deafen state of event-user in event-guild%"',
      ],
    },
    {
      description:
        "Get the date a member joined a guild. If you append discord then it gets the date they joined discord, otherwise its the date they joined the guild if the input is a member and the discord join date for users.",
      name: "Join Date",
      patterns: [
        "[the] [<discord>] join date[s] of %members/users%",
        "%members/users%'[s] [<discord>] join date[s]",
      ],
      examples: ['reply with "%discord join date of event-user%"'],
    },
    {
      description:
        "Gets a member's nickname (guild sensitive name). You can set this expression.",
      name: "Nickname of",
      patterns: [
        "[the] discord nickname[s] of %members%",
        "%members%'[s] discord nickname[s]",
      ],
      examples: [
        'set the discord nickname of event-member to "new nickname" with event-bot',
      ],
    },
    {
      description:
        "Get the online status of a user or a member. The online status can be set or reset for a bot.",
      name: "Online status of",
      patterns: [
        "[the] [online][(-| )]status[s] of %members/users/bots/strings%",
        "%members/users/bots/strings%'[s] [online][(-| )]status[s]",
      ],
      examples: ["set status of event-bot to do not disturb"],
    },
    {
      description:
        "Get the roles that a member has in a guild. You can remove, add and set the roles.",
      name: "Roles of Member",
      patterns: ["[the] role[s] of %members%", "%members%'[s] role[s]"],
      examples: [
        'remove role with id "6110981981981" from roles of event-member',
      ],
    },
    {
      description: "Get the voice channel a member is in if they are in one.",
      name: "Voice Channel of Member",
      patterns: [
        "[the] [current] voice[(-| )]channel of %members%",
        "%members%'[s] [current] voice[(-| )]channel",
      ],
      examples: ["join voice channel of event-member"],
    },
    {
      description: "Get the attachments of a message.",
      name: "Attachments of",
      patterns: [
        "[the] attachment[s] of %message%",
        "%message%'[s] attachment[s]",
      ],
      examples: ['broadcast "%discord name of attachment of event-message%"'],
    },
    {
      description: "Get the height of an attachment",
      name: "Attachment Height of",
      patterns: [
        "[the] attachment height[s] of %attachment%",
        "%attachment%'[s] attachment height[s]",
      ],
      examples: ['broadcast "%height of attachment of event-message%"'],
    },
    {
      description: "Get the URL of a message attachment.",
      name: "Attachment Url of",
      patterns: [
        "[the] attachment url[s] of %attachment%",
        "%attachment%'[s] attachment url[s]",
      ],
      examples: ['broadcast "%attachment url of attachment of event-message%"'],
    },
    {
      description: "Get the width of an attachment",
      name: "Attachment Width of",
      patterns: [
        "[the] attachment width[s] of %attachment%",
        "%attachment%'[s] attachment width[s]",
      ],
      examples: [
        "on guild message received:",
        "\tset {_} to attachment of event-message",
        "\tif {_} is set:",
        "\t\tif {_} is an image:",
        '\t\t\treply with "its %attachment width of {_}% by %attachment height of {_}%"',
      ],
    },
    {
      description:
        "Get the Embed of a Message Builder. You can set, delete and reset the embed.",
      name: "Embed of Message Builder",
      patterns: [
        "[the] embed[s] of %messagebuilders%",
        "%messagebuilders%'[s] embed[s]",
      ],
      examples: [
        "discord command $build:",
        "\ttrigger:",
        "\t\tmake embed:",
        '\t\t\tadd field with value "Hey there this is an embed!" to the embed',
        "\t\t\tset color of the embed to red",
        "\t\tset {e} to a new message builder",
        '\t\tset text of {e} to "Hey there%nl%"',
        "\t\tset embed of {e} to last embed",
        '\t\tappend "Info for embed attached to this builder: %color of embed of {e}%" to {e}',
        "\t\tsend {e} to event-channel with event-bot\t",
      ],
    },
    {
      description:
        "Get the text inside of a message builder. Can be either set, reset, or deleted.",
      name: "Text of a message builder",
      patterns: [
        "[the] [<stripped>] text[s] of %messagebuilders%",
        "%messagebuilders%'[s] [<stripped>] text[s]",
      ],
      examples: [
        "command /build:",
        "\ttrigger:",
        "\t\tset {e} to a new message builder",
        '\t\tset text of {e} to "Hey look at this"',
        '\t\tbroadcast "%text of {e}%"',
      ],
    },
    {
      description: "Create a new MessageBuilder",
      name: "Message Builder",
      patterns: ["a [new] message builder"],
      examples: ["set {e} to a new message builder"],
    },
    {
      description:
        "Get the TTS state of a Message Builder. The state can be set to true or false.",
      name: "TTS of Message Builder",
      patterns: [
        "[the] tts state[s] of %messagebuilders%",
        "%messagebuilders%'[s] tts state[s]",
      ],
      examples: [
        "discord command $tts:",
        "\ttrigger:",
        "\t\tset {_} to a new message builder",
        "\t\tset tts state of {_} to true",
        "\t\tsend {_} to event-channel with event-bot",
        '\t\treply with "done?"',
      ],
    },
    {
      description:
        "Get the reactions of a message. Can be deleted, reset, removed and added to.",
      name: "Reactions of Message",
      patterns: [
        "[the] reactions[s] of %messages%",
        "%messages%'[s] reactions[s]",
      ],
      examples: [
        "on guild message receive:",
        '\tadd reactions "smile" and "frowning" to reactions of event-message',
      ],
    },
    {
      description: "Get the author of a message",
      name: "Author of Message",
      patterns: [
        "[the] [discord] author[s] of %messages%",
        "%messages%'[s] [discord] author[s]",
      ],
      examples: ["author of event-message"],
    },
    {
      description:
        "Get the content of a Message. The content can be set and deleted.",
      name: "Content of Message",
      patterns: [
        "[the] [<stripped|display(able)?>] content[s] of %messages%",
        "%messages%'[s] [<stripped|display(able)?>] content[s]",
      ],
      examples: ["content of event-message"],
    },
    {
      description: "Get the direct jump url to a message.",
      name: "Jump URL of Message",
      patterns: ["[the] jump url[s] of %message%", "%message%'[s] jump url[s]"],
      examples: [""],
    },
    {
      description:
        "Get the last retrieved message called from the retrieve message effect. Cleared every time the retrieve message effect is used.",
      name: "Last retrieved Message",
      patterns: ["last retrieved [discord] message"],
      examples: ["set {_message} to last retrieved message"],
    },
    {
      description: "Get the mentioned Channels in a Message",
      name: "Mentioned Channels",
      patterns: [
        "[the] mentioned channel[s] of %messages%",
        "%messages%'[s] mentioned channel[s]",
      ],
      examples: ["set {_var::*} to event-message's mentioned channels"],
    },
    {
      description: "Get the mentioned Roles in a Message",
      name: "Mentioned Roles",
      patterns: [
        "[the] mentioned role[s] of %messages%",
        "%messages%'[s] mentioned role[s]",
      ],
      examples: ["set {_var::*} to event-message's mentioned roles"],
    },
    {
      description: "Get the mentioned Users in a Message",
      name: "Mentioned Users",
      patterns: [
        "[the] mentioned user[s] of %messages%",
        "%messages%'[s] mentioned user[s]",
      ],
      examples: ["set {_var::*} to event-message's mentioned users"],
    },
    {
      description: "Get the message that was replied to.",
      name: "Message Reference of Message",
      patterns: [
        "[the] message reference[s] of %message%",
        "%message%'[s] message reference[s]",
      ],
      examples: [
        "discord command $rmsg <text>:",
        "\ttrigger:",
        "\t\tset {_msg} to message reference of event-message",
        '\t\treply with "%content of {_msg}%"',
      ],
    },
    {
      description:
        "Returns the timestamp of either a message or an embed. You can set the time of an embed to any date (e.g. now).",
      name: "Timestamp of",
      patterns: [
        "[the] (timestamp|date)[s] of %embedbuilders/messages%",
        "%embedbuilders/messages%'[s] (timestamp|date)[s]",
      ],
      examples: [
        "set the timestamp of {_embed} to now",
        "",
        "# You can also set it to a date in the past/future like this",
        "",
        "set {_thePast} to now",
        "subtract 5 days from {_thePast}",
        "set the timestamp of {_embed} to {_thePast}",
      ],
    },
    {
      description: "Grabs a channel by its ID",
      name: "Channel with ID",
      patterns: ["channel with id %string% [in %-guild%]"],
      examples: ['broadcast "%name of channel with id ""6515615645451561""%'],
    },
    {
      description:
        "Get a Voice channel by it's ID, can include the Guild it is in for faster results.",
      name: "Voice Channel with ID",
      patterns: ["voice(-| )channel with id %string% [in %-guild%]"],
      examples: [
        "discord command topic <string> <string>:",
        "\tusage: topic <channel id> <new topic>",
        "\tprefixes: $",
        "\ttrigger:",
        "\t\tset name of voice channel with id arg-1 to arg-2 with event-bot",
      ],
    },
    {
      description:
        "Get all the guilds with a certain name that vixio can find.",
      name: "Guild  Named",
      patterns: ["guild[s] named %string%"],
      examples: ['set {_var::*} to guilds named "Vixio"'],
    },
    {
      description: "Get a Guild via it's ID",
      name: "Guild with ID",
      patterns: ["(server|guild) with id %string%"],
      examples: ['broadcast name of guild with id "16165192162168461"'],
    },
    {
      description: "Returns the member form of a user in the specified guild",
      name: "User in Guild",
      patterns: ["%user% in %guild%"],
      examples: [
        'broadcast nickname of user with id "1561515615610515" in event-guild',
      ],
    },
    {
      description:
        "Get a Role via it's ID. You may get the id of a role by either making the role mentionable and typing @rolename or by looping the roles of the guild and finding it by name. You could also use the `role named` syntax to retrieve the role outright.",
      name: "Role with ID",
      patterns: ["role with id %string% [in %-guild%]"],
      examples: [
        'add role with id "5151561851" to roles of event-user in event-guild',
      ],
    },
    {
      description: "Get a User via their ID.",
      name: "User with ID",
      patterns: ["user with id %string%"],
      examples: ['broadcast name of user with id "456145141891891"'],
    },
    {
      description:
        "Tell if a role can be publicly mentioned, can be set to true or false",
      name: "Mentionable State of Role",
      patterns: [
        "[the] mentionable state[s] of %roles%",
        "%roles%'[s] mentionable state[s]",
      ],
      examples: [
        'reply with "%mentionable state of role with id ""55416516516516""%',
      ],
    },
    {
      description: "Get the duration of a track. This is how long it is.",
      name: "Duration of Track",
      patterns: ["[the] duration[s] of %tracks%", "%tracks%'[s] duration[s]"],
      examples: ['broadcast "%duration of track event-bot is playing%"'],
    },
    {
      description:
        "Get a track's identifier, this is the unique ID given to it by the hosting site.",
      name: "Identifier of Track",
      patterns: [
        "[the] identifier[s] of %tracks%",
        "%tracks%'[s] identifier[s]",
      ],
      examples: ['broadcast "%identifier of track event-bot is playing%"'],
    },
    {
      description:
        "Get the last track a bot has loaded. This does not mean the track the bot is playing.",
      name: "Last Loaded Audio Track",
      patterns: [
        "[the] last loaded [audio] track [of %bot/string%] [in %guild%]",
      ],
      examples: ['reply with "%the last loaded track%"'],
    },
    {
      description:
        "Get the position a track is at. This is the current play time the track is at.",
      name: "Position of Track",
      patterns: ["[the] position[s] of %tracks%", "%tracks%'[s] position[s]"],
      examples: ['broadcast "%position of track event-bot is playing%"'],
    },
    {
      description: "Get a track's author. This is the creator of the source.",
      name: "Author of Track",
      patterns: ["[the] author[s] of %tracks%", "%tracks%'[s] author[s]"],
      examples: ['broadcast "%author of track event-bot is playing%"'],
    },
    {
      description: "Get a track's url.",
      name: "Url of Track",
      patterns: ["[the] ur(i|l)[s] of %tracks%", "%tracks%'[s] ur(i|l)[s]"],
      examples: ['broadcast "%url of track event-bot is playing%"'],
    },
    {
      description:
        "Get either the user's custom avatar or their default one that discord gave them. You can extract the id from the url using the ID expression.",
      name: "Avatar of User",
      patterns: [
        "[the] [discord] [<default>] avatar[s] of %users/bots/strings/member%",
        "%users/bots/strings/member%'[s] [discord] [<default>] avatar[s]",
      ],
      examples: [
        "discord command $info <user>:",
        "\ttrigger:",
        '\t\treply with "%avatar of arg-1%"',
      ],
    },
    {
      description: "Check if a user is a bot or not.",
      name: "Bot State Of User",
      patterns: ["[the] bot state[s] of %users%", "%users%'[s] bot state[s]"],
      examples: ["set {var} to bot state of event-user"],
    },
    {
      description:
        "Get the discriminator of a user, this is the four numbers after a users name.",
      name: "Discriminator of User",
      patterns: [
        "[the] discriminator[s] of %users%",
        "%users%'[s] discriminator[s]",
      ],
      examples: [
        "discord command $info <user>:",
        "\ttrigger:",
        '\t\treply with "%discriminator of arg-1%"',
      ],
    },
    {
      description:
        "Get the game of a user. You may use this to set a bots game, this will set it as Playing: <whatever you input>. Use the mark as gametype effect to use the other types.",
      name: "Game of User",
      patterns: [
        "[the] game[s] of %members/users/bots/strings%",
        "%members/users/bots/strings%'[s] game[s]",
      ],
      examples: [
        "discord command $info <user>:",
        "\ttrigger:",
        '\t\treply with "%game of arg-1%"',
      ],
    },
    {
      description: "Get a newline, which means skips to a new line",
      name: "New Line",
      patterns: ["([a] new line|nl)"],
      examples: [
        "discord command $nl:",
        "\ttrigger:",
        "\t\tset {_m} to a message builder",
        '\t\tappend "Hey!" to {_m}',
        '\t\tappend "%nl%" to {_m}',
        '\t\tappend "There!" to {_m}',
        "\t\treply with {_m}",
      ],
    },
    {
      description: "Get a zero width space",
      name: "Zero width space",
      patterns: ["[a] zero width space"],
      examples: ["append zero width space to {_messageBuilder}"],
    },
  ],
};
