
const response = await sheets.spreadsheets.values.append({
	spreadsheetId: process.env.DATABASE_ID,
	range: 'Sheet1!A1:P1',
	valueInputOption: 'USER_ENTERED',
	requestBody: {
		values: [[SiteCode,
            Amount,
            TransactionReference,
            BankReference,
            Status]],
	},
});

async function handler(req, res) {
    if (req.method === "POST") {
        const  {
            SiteCode,
            Amount,
            TransactionReference,
            BankReference,
           
        } = req.body;
        res.status(201).json({ 
            SiteCode,
            Amount,
            TransactionReference,
            BankReference,
            Status
            })
    }
}

export default handler;