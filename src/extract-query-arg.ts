export const extractQueryArg = (queryArg: string, url = window.location.href): string | null => {
	queryArg = queryArg.replace(/[\[\]]/g, '\\$&');

	const matches = new RegExp(`[?&]${queryArg}(=([^&#]*)|&|#|$)`).exec(url);

	if (!matches) {
		return null;
	}

	if (!matches[2]) {
		return '';
	}

	return decodeURIComponent(matches[2].replace(/\+/g, ' '));
};

export default extractQueryArg;
