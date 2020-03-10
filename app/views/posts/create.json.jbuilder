json.created_at @post.created_at.strftime("%Y/%m/%d %H:%M")
json.content @post.content
json.image @post.image_url