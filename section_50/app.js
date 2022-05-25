const bcrypt = require('bcrypt')

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw, salt)
    console.log(salt)
    console.log(hash)
}

// 솔트를 따로 설정하지 않아도 된다.
const hashPassword1 = async (pw) => {
    const hash = await bcrypt.hash(pw, 12)
    console.log(hash)
}

const login = async (pw, hashedPw) => {
    const res = await bcrypt.compare(pw, hashedPw)
    if (res) {
        console.log("success!!")
    } else {
        console.log("fail!!!!")
    }
}

// hashPassword('monkey');
login('monkey!', '$2b$10$LyB0h.2zQrRy.in.tpBIUurbvN3oJUQyJLbeMFOlUk2JY/ba4lENO')