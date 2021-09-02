console.log("Vue", Vue);

Vue.config.devtools = true;

const app = new Vue({
	el: "#app",
	data: {
		songs: [],
		error: false,
		select: "",
	},
	computed: {
		selectedSongs() {
			const select = this.select;
			const selectedSongs = this.songs.filter((song) =>
				song.genre.includes(select)
			);
			return selectedSongs;
		},

		selectTypes() {
			const selectTypes = [];
			for (const song in this.songs) {
				if (selectTypes.includes(song.genre)) {
				} else {
					selectTypes.push(song.genre);
				}
			}
			return selectTypes;
		},
	},
	methods: {},
	created() {
		axios
			.get("https://flynn.boolean.careers/exercises/api/array/music")
			.then((res) => {
				const songs = res.data.response;
				this.songs = songs;
			})
			.catch(() => {
				this.error = true;
			});
	},
});
