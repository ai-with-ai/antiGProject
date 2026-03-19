from pydantic import BaseModel
from typing import List, Optional

class Post(BaseModel):
    id: str
    title: str
    content: str
    tags: Optional[List[str]] = []
