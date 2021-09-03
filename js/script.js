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
			if (select !== "All") {
				const selectedSongs = this.songs.filter((song) =>
					song.genre.includes(select)
				);
				return selectedSongs.sort((a, b) => b.year - a.year);
			}
		},

		selectTypes() {
			const selectTypes = [];
			for (var i = 0; i < this.songs.length; i++) {
				console.log(this.songs[i].genre);
				if (!selectTypes.includes(this.songs[i].genre)) {
					selectTypes.push(this.songs[i].genre);
				}
			}
			console.log(selectTypes);
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
