export const GetFormatDate = (v: string) => {
	const year = v.substring(0, 4);
	const month = v.substring(4, 6);
	const day = v.substring(6, 8);
	const yyyyMMdd = year + '-' + month + '-' + day;

	if (isNaN(new Date(yyyyMMdd).getTime())) {
		return 'Invalid date';
	}

	return yyyyMMdd;
};
