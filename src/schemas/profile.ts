export type ProfileDataType = {
  _id: string;
  username: string;
  fullname?: string;
  userId: string;
  email?: string;
  dateOfBirth?: Date;
  gender: number;
  avatar: string | null;
  bio?: string;
  followersCount: number;
  followingCount: number;
  postCounts: number;
  reelCounts: number;
  savedPostCounts: number;
  accountVisibility: "private" | "public";
  createdAt: Date;
  updatedAt: Date;
}