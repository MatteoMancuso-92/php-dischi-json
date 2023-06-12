const { createApp } = Vue;

createApp({
	data() {
		return {
			urlApi: 'server.php',
			objDisc: null,
			arrDiscs: [],
		}
	},
	methods: {
		hideDetails() {
			this.objDisc = null;
		},
		showDiscDetails(index) {
			axios.get(this.urlApi, {  // serve.php?disc=2
				params: {
					disc: index
				}
			})
				.then(response => this.objDisc = response.data);
		}
	},
	created() {
		axios.get(this.urlApi)
			.then(response => this.arrDiscs = response.data);
	}
}).mount('#app')