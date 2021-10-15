import { google } from "googleapis"



const auth = new google.auth.GoogleAuth({
	credentials: {
		client_email: process.env.CLIENT_EMAIL,
		client_id: process.env.CLIENT_ID,
		private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
	},
	scopes: [
		'https://www.googleapis.com/auth/drive',
		'https://www.googleapis.com/auth/drive.file',
		'https://www.googleapis.com/auth/spreadsheets',
	],
});
const sheets = google.sheets({
	auth,
	version: 'v4',
});
const response = await sheets.spreadsheets.values.append({
	spreadsheetId: process.env.DATABASE_ID,
	range: 'Sheet1!A1:P1',
	valueInputOption: 'USER_ENTERED',
	requestBody: {
		values: [[first_nam, surname, email, contact_number, id_number, nationality, qualification, institution, student_number, fee_amount, year, qualify_1, qualify_2, choice_1, choice_2, note]],
	},
});

async function handler(req, res) {
	if (req.method === "POST") {
		const { first_name, surname, email, contact_number, id_number, nationality, qualification, institution, student_number, fee_amount, year, qualify_1, qualify_2, choice_1, choice_2, note } = req.body;
		res.status(201).json({response, result: "Feedback posted to spreadsheet!"})	}
}

export default handler;