const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder()
        .setName("exit")
        .setDescription("Kick the bot from the channel."),
	execute: async ({ client, interaction }) => {

        // Get the current queue
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.reply("There are no songs in the queue")

        // Deletes all the songs from the queue and exits the channel
		queue.destroy();

        await interaction.reply("Why me?")
	},
}
