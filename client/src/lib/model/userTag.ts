export type UserTag = {
	id: bigint;
	user_id: string;
	tag_name: string;
	has_group: boolean;
	group_id: bigint;
	grant_limit: string;
};
