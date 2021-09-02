console.log("Vue", Vue);

Vue.config.devtools = true;

const app = new Vue({
	el: "#app",
	data: {
		songs: [],
		error: false,
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
