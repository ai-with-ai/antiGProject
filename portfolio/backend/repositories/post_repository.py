import os
from models.post import Post
from core.config import settings
from typing import List, Optional

class PostRepository:
    def __init__(self):
        self.data_dir = settings.DATA_DIR
        # Ensure directory exists
        if not os.path.exists(self.data_dir):
            os.makedirs(self.data_dir)

    def get_all(self) -> List[Post]:
        posts = []
        for filename in os.listdir(self.data_dir):
            if filename.endswith(".md"):
                post_id = filename.replace(".md", "")
                post = self.get_by_id(post_id)
                if post:
                    posts.append(post)
        return posts

    def get_by_id(self, post_id: str) -> Optional[Post]:
        filepath = os.path.join(self.data_dir, f"{post_id}.md")
        if not os.path.exists(filepath):
            return None
        with open(filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()
            # Very basic parsing for title
            title = lines[0].strip().replace("# ", "") if lines else "Untitled"
            content = "".join(lines)
            return Post(id=post_id, title=title, content=content, tags=["Tech"])
