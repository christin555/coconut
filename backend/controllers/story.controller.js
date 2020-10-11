const db = require("../config/database");

exports.getMyStories = async (req, res) => {
    console.log("story/getMyStories, body:" + req.body);
    const userId = parseInt(req.body.userId);

    const response = await db.query('SELECT "stories"."media_path", "stories"."created_at", "stories"."id", "users"."name","users"."photo_path" FROM stories left join users on "users"."id" = "stories"."user_id" WHERE "user_id" IN (SELECT "subscription_id" FROM subscriptions where "subscriber_id"=$1)  AND INTERVAL \'1\' DAY + "stories"."created_at">= NOW();', [userId]);
    res.status(200).send(response.rows);

};
