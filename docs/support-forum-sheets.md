# Connecting the support forms to Google Sheets

The website links to the provided Google Forms directly. The website does not have authenticated access to either form or to a destination spreadsheet, so responses are not currently connected by the site.

To connect them manually:

1. Open the English form in Google Forms and select **Responses**.
2. Select **Link to Sheets**, then create a spreadsheet named `FridgeVista Support - English`.
3. Repeat for the Chinese form and name its spreadsheet `FridgeVista Support - Chinese`.
4. Keep both spreadsheets private and share them only with the support account.
5. Do not make the response sheets public. The forms contain account and diagnostic information.

Google Forms can write submissions into Sheets, but a Sheet does not provide a threaded public forum by itself. A public forum with replies, moderation, search, and user identities requires a database-backed service or forum platform.

If a live support dashboard is needed later, the next safe step is a private server endpoint or Google Apps Script that appends validated submissions to Sheets and sends a notification. Credentials must remain server-side and must not be embedded in this static website.
