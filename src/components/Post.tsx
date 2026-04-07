// import React, { useMemo, useState } from "react";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
// import { formatDistanceToNow } from "date-fns";

// /**
//  * PostCard (Production-ready defensive + interactive)
//  * - Handles undefined/null post safely
//  * - Provides loading / empty fallback
//  * - Adds optimistic UI for like/save
//  * - Guards all optional fields
//  */
// const PostCard = ({ post, isLoading = false }) => {
//   // ---- Guard: loading state ----
//   if (isLoading) {
//     return (
//       <Card className="w-full max-w-2xl mx-auto animate-pulse">
//         <CardHeader>
//           <div className="h-6 w-40 bg-gray-200 rounded" />
//         </CardHeader>
//         <CardContent>
//           <div className="h-48 w-full bg-gray-200 rounded" />
//         </CardContent>
//       </Card>
//     );
//   }

//   // ---- Guard: post undefined/null ----
//   if (!post || typeof post !== "object") {
//     return (
//       <Card className="w-full max-w-2xl mx-auto p-4 text-sm text-muted-foreground">
//         No post data available
//       </Card>
//     );
//   }

//   // ---- Safe destructuring with defaults ----
//   const {
//     image = {},
//     authorUsernameSnapshot = "unknown",
//     likesCount = 0,
//     commentsCount = 0,
//     sharesCount = 0,
//     savesCount = 0,
//     caption = "",
//     title = "",
//     hashtags = [],
//     mentions = [],
//     createdAt,
//   } = post || {};

//   // ---- Derived state (memoized) ----
//   const timeAgo = useMemo(() => {
//     if (!createdAt) return "";
//     try {
//       return formatDistanceToNow(new Date(createdAt)) + " ago";
//     } catch {
//       return "";
//     }
//   }, [createdAt]);

//   // ---- Local UI state (optimistic interactions) ----
//   const [liked, setLiked] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const [likes, setLikes] = useState(likesCount);

//   const handleLike = () => {
//     setLiked((prev) => !prev);
//     setLikes((prev) => (liked ? prev - 1 : prev + 1));
//     // TODO: trigger backend mutation (optimistic update)
//   };

//   const handleSave = () => {
//     setSaved((prev) => !prev);
//     // TODO: backend sync
//   };

//   return (
//     <Card className="w-full max-w-2xl mx-auto shadow-md rounded-2xl">
//       {/* Header */}
//       <CardHeader className="flex flex-row items-center justify-between">
//         <div className="flex items-center gap-3">
//           <Avatar>
//             <AvatarImage src={image?.url || ""} />
//             <AvatarFallback>
//               {authorUsernameSnapshot?.[0]?.toUpperCase() || "U"}
//             </AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="font-semibold text-sm">
//               {authorUsernameSnapshot}
//             </p>
//             <p className="text-xs text-muted-foreground">{timeAgo}</p>
//           </div>
//         </div>
//       </CardHeader>

//       {/* Image */}
//       {image?.url && (
//         <div className="w-full aspect-video overflow-hidden">
//           <img
//             src={image.url}
//             alt={title || "post image"}
//             loading="lazy"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       )}

//       {/* Content */}
//       <CardContent className="space-y-3">
//         {title && <h2 className="font-semibold text-lg">{title}</h2>}
//         {caption && (
//           <p className="text-sm text-gray-700">{caption}</p>
//         )}

//         {/* Hashtags */}
//         {hashtags.length > 0 && (
//           <div className="flex flex-wrap gap-2">
//             {hashtags.map((tag, idx) => (
//               <Badge key={idx} variant="secondary">
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//         )}

//         {/* Mentions */}
//         {mentions.length > 0 && (
//           <div className="flex flex-wrap gap-2">
//             {mentions.map((mention, idx) => (
//               <span key={idx} className="text-sm text-blue-500">
//                 @{mention}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Actions */}
//         <div className="flex items-center justify-between pt-3 border-t">
//           <div className="flex gap-4">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={handleLike}
//               className="flex gap-1"
//             >
//               <Heart
//                 size={16}
//                 className={liked ? "fill-red-500 text-red-500" : ""}
//               />
//               {likes}
//             </Button>

//             <Button variant="ghost" size="sm" className="flex gap-1">
//               <MessageCircle size={16} /> {commentsCount}
//             </Button>

//             <Button variant="ghost" size="sm" className="flex gap-1">
//               <Share2 size={16} /> {sharesCount}
//             </Button>
//           </div>

//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={handleSave}
//             className="flex gap-1"
//           >
//             <Bookmark
//               size={16}
//               className={saved ? "fill-black" : ""}
//             />
//             {savesCount}
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default React.memo(PostCard);

// /**
//  * ---- Suggested Test Cases (manual / unit) ----
//  * 1. post = undefined → should NOT crash, show fallback UI
//  * 2. post = {} → safe defaults render, no errors
//  * 3. missing image → image section hidden
//  * 4. missing hashtags/mentions → sections not rendered
//  * 5. like button → count increments/decrements optimistically
//  * 6. createdAt invalid → no crash, empty time
//  */
