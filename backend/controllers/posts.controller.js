const db = require("../config/database");

exports.getLenta = async (req, res) => {
    console.log("posts/getLenta:" + req.body);
    const userId = parseInt(req.body.userId);
    const offset = parseInt(req.body.offset);
    const response = await db.query(
        'SELECT "posts"."media_path", "posts"."created_at", "posts"."id", "posts"."location", "posts"."description","users"."name", "users"."photo_path",\n' +
        '(SELECT count(*) FROM comments \n' +
        '        WHERE "comments"."post_id" = "posts"."id") AS "commentsCount",\n' +
        '(SELECT count(*) FROM likes WHERE "likes"."post_id" = "posts"."id") AS "likesCount",\n' +
        '(SELECT "name" FROM comments left join users on "users"."id" = "comments"."user_id" WHERE "comments"."post_id" = "posts"."id"  order by "comments"."created_at" DESC limit 1) AS "last_comment_user",\n' +
        '(SELECT "text" FROM comments \n' +
        '        WHERE "comments"."post_id" = "posts"."id" group by id order by "comments"."created_at" DESC limit 1) AS "last_comment"\n' +
        'FROM posts left join users on "users"."id" = "posts"."user_id" WHERE "user_id" IN (SELECT "subscription_id" FROM subscriptions where "subscriber_id"=$1)  order by "posts"."created_at" DESC limit 20 offset 10*$2', [userId, offset]);
    res.status(200).send(response.rows);

};
