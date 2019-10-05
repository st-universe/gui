const dayjs = require("dayjs");

export default {
    methods: {
		formatUnix(timestamp, format) {
			return dayjs.unix(timestamp).format(format);
		},
		getAssetPath() {
			return process.env.ASSETS_PATH;
		}
    },
};
