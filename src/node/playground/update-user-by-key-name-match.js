const Easypost = require('@easypost/api');

const api = new Easypost(process.env.API_KEY);

// Retrieve all user's API keys, match them to names and only update those with the specified name
// This is done this way because the EasyPost Node CL does not allow you to retrieve the API keys of a single user
// USAGE: API_KEY=123... NAME='test test' node update-user-by-key-name-match.js

async function retrieveUsers() {
    keys = await api.ApiKey.all().catch(console.log)
    for (i = 0; i < keys.length; i++) {
        user = await api.User.retrieve(keys[i]['user_id']).catch(console.log)
        if (user['name'] == process.env.NAME) {
            console.log(user['name'] + ' | ' + user['id'] + ' | ' + keys[i]['key'])
        
            // Items to update
            user.recharge_threshold = '50.00'
            user.save().then(console.log).catch(console.log)
        }
    }
}

retrieveUsers()