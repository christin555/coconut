var faker = require('faker');

let myPhotos = [
    'https://sun9-5.userapi.com/c836325/v836325134/4b85b/tyr5d3xcJJE.jpg',
    'https://sun9-72.userapi.com/c837630/v837630510/57ed7/tyb16MJEVYA.jpg',
    'https://sun3-13.userapi.com/W8NCO3vFylYkHDbQgjPP3NjvhjyNiItBjROYNg/aYc1LZqCQyY.jpg',
    'https://sun3-12.userapi.com/ik6tPoZq68Nl6lp4gcQ4l4s6ieCoPSdd0O-bUA/FMszondAAlU.jpg',
    'https://sun9-70.userapi.com/c638621/v638621474/24e87/pk4sFbs2CX0.jpg',
    'https://sun9-8.userapi.com/c850016/v850016159/21b0b/raKrs5Q0Kac.jpg',
    'https://sun9-24.userapi.com/c858024/v858024565/19b034/IQ73NW8LOxM.jpg',
    'https://sun9-28.userapi.com/c841232/v841232765/f4a9/PonaHdI4PPg.jpg',
    'https://sun9-46.userapi.com/c836123/v836123474/141de/Di3_Ysk5CEw.jpg',
    'https://sun9-67.userapi.com/c836328/v836328474/4eec1/VB8gTq62EI8.jpg',
    'https://sun9-36.userapi.com/WlF83VNtBDuiAcpLZg85zoiq-yZahe8BEjrPPA/SoOcMNESDeQ.jpg',
    'https://sun9-28.userapi.com/c845018/v845018864/c0b58/et_tkN3svi0.jpg',
    'https://sun9-11.userapi.com/c855428/v855428419/be19e/TP0fVjccXRM.jpg',
    'https://sun9-70.userapi.com/c858332/v858332309/4658/ecfnj3g4MNM.jpg',
    'https://sun9-50.userapi.com/c846020/v846020622/1df69b/nGkPY4Z6p0U.jpg',
    'https://sun9-49.userapi.com/c638931/v638931480/42f35/O2AE18gNUew.jpg',
    'https://sun9-49.userapi.com/c840222/v840222484/7d62a/3USmOEpLlFw.jpg',
    'https://sun9-26.userapi.com/c824501/v824501493/94075/MpCyUY51h08.jpg',
    'https://sun9-32.userapi.com/c841623/v841623308/2a141/tSRJ6_m1S-4.jpg',
    'https://sun9-15.userapi.com/c837226/v837226321/407c5/P_Es0mRMhUc.jpg',
    'https://sun9-3.userapi.com/c840231/v840231453/149b3/iIojjx1yA9M.jpg',
    'https://sun9-71.userapi.com/c840737/v840737611/57c7/WteasO4pPTM.jpg',
    'https://sun9-59.userapi.com/c855036/v855036230/72e58/AuZJIEs8atk.jpg',
    'https://sun3-13.userapi.com/sW_6qBIGxbOWZXkT0Wm2MpKSehGlQEXVFDVLfw/ppscI2GRR-k.jpg',
    'https://sun9-76.userapi.com/c637116/v637116314/34938/QoGYcB10ONI.jpg',
    'https://sun9-14.userapi.com/c858236/v858236729/1777f2/5NUBq_Q58Wc.jpg',
    'https://sun9-36.userapi.com/c637728/v637728138/485dc/G609gNpBrcg.jpg',
    'https://sun9-39.userapi.com/c639226/v639226453/47cc/CHXiw-9oMN0.jpg',
    'https://sun9-75.userapi.com/c830409/v830409871/1adef5/-AIDyW_520A.jpg',
    'https://sun9-39.userapi.com/c639627/v639627138/2938e/KKOEw0JUpvo.jpg',
    'https://sun9-23.userapi.com/c622223/v622223138/38142/gNZ3skSMdd4.jpg',
    'https://sun9-34.userapi.com/c836623/v836623321/739b/gIj-YNEBsL8.jpg',
    'https://sun9-12.userapi.com/c639627/v639627138/29362/WtnVui7AXfk.jpg',
    'https://sun9-44.userapi.com/c834400/v834400206/198ad/yWzKksDFQJI.jpg',
    'https://sun9-38.userapi.com/c840126/v840126793/6eb3d/_nwmAtcEAi8.jpg',
    'https://sun9-63.userapi.com/c840626/v840626082/62849/nz3CGS3Qmtc.jpg',
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomDate() {
    from = new Date() - getRandomInt(1e10);
    to = new Date();
    return new Date(from + Math.random() * (to - from));
}

let createRecord = (knex, id, user_id, photo_url) => {
    return knex('posts').insert({
        id,
        user_id: user_id,
        location: faker.address.secondaryAddress(),
        media_path: photo_url || faker.random.image(),
        description: faker.lorem.paragraph(),
        created_at: getRandomDate(),
    })
}


exports.seed = function (knex) {
    return knex('posts').del()
        .then(() => {
            let records = [];
            let id = 1;

            for (let j = 0; j < myPhotos.length; j++) {
                records.push(createRecord(knex, j, 1, myPhotos[j]));
                ++id;
            }

            for (let i = id; i < 130; i++) {
                let ran = getRandomInt(30);
                for (let j = 0; j < ran; j++) {
                    records.push(createRecord(knex, id, i));
                    ++id;
                }
            }
            ;

            return Promise.all(records);
        });
};
