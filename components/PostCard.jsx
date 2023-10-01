import React from "react";

const PostCard = ({ post }) => {
  return (
    <div>
      {post.tittle}
      {post.excerpt}
    </div>
  );
};

export default PostCard;
