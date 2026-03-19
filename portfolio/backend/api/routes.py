from fastapi import APIRouter, HTTPException
from typing import List
from models.post import Post
from repositories.post_repository import PostRepository

router = APIRouter()
post_repo = PostRepository()

@router.get("/posts", response_model=List[Post])
async def get_posts():
    return post_repo.get_all()

@router.get("/posts/{post_id}", response_model=Post)
async def get_post(post_id: str):
    post = post_repo.get_by_id(post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post
