function sendContact(req, res) {

    if (req.method === 'POST') {
        const reqPayload = req?.body;
        console.log("req payload", reqPayload);

        return res.json({ msg: 'success' })
    }

    return res.status(500).json({
        msg: 'bad request'
    })
}

export default sendContact;