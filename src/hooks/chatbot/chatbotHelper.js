import data from "./../../data/chat.json"

export const handleOptionClick = (chatbotStates, op) => {
    const botRes = data[op.res_id]

    op.res_id === 0
        ? chatbotStates.messages = [{ msg: botRes.res, type: "bot" }]
        : chatbotStates.messages.push({ msg: op.label, type: "sender" }, { msg: botRes.res, type: "bot" })

    chatbotStates.options = data[op.res_id].options
    return chatbotStates
}

const checkKeyword = keyword => data
    .map(res => res.options.filter(op => op.keywords.includes(keyword)))

export const handleMessageSubmit = (chatbotStates, msg) => {
    chatbotStates.messages.push({ msg, type: "sender" })

    let keywords = msg.split(" ")
        .map(word => word.length > 3
            ? word
                .replace("ال", "")
                .replace("است", "")
                .replace("لي", "")
                .replace("ون", "")
                .replace("ين", "")
                .replace("كم", "")
                .replace("ة", "")
                .replace("ي", "")
                .replaceAll("ا", "")
            : word
        )

    let res = keywords.map(checkKeyword)[0][0]

    if (res.length === 0) {
        chatbotStates.messages.push({
            msg: "للأسف لا استطيع معرفة المكتوب, يمكنك اختيار واحدة من الخيارات الموجودة بالأسفل",
            type: "bot"
        })
        chatbotStates.options = data[0].options

    } else {
        chatbotStates.messages.push({
            msg: data[res[0].res_id].res,
            type: "bot"
        })
        chatbotStates.options = data[res[0].res_id].options
    }

    return chatbotStates
}
