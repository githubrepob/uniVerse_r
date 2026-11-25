# uniVerse — setup and deployment

The existing backend and ML service are included unchanged. Existing localStorage keys are retained for session compatibility.

## Local development
1. Copy `backend/.env.example` to `backend/.env` and configure MongoDB, JWT, Gemini, ML service URL and Cloudinary credentials (`CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`) as needed.
2. In `ml-service`, create a Python virtual environment, install `pip install -r requirements.txt`, then run `python -m uvicorn app:app --host 0.0.0.0 --port 8001`.
3. In `backend`, run `npm ci` and `npm start` (or `node server.js`).
4. In `frontend`, copy `.env.example` to `.env`, run `npm ci`, then `npm start`.

## Hosting
- Deploy the ML service as a Python web service using the Uvicorn command above and the host-provided port.
- Deploy `backend` as a Node web service, with `node server.js` as the start command. Set the environment variables, including `ML_SERVICE_URL` to the deployed ML service URL. Use a hosted MongoDB database.
- Deploy `frontend` as a Create React App project on Vercel or Netlify. Set root directory to `frontend`, build command `npm run build`, output directory `build`, and `REACT_APP_API_URL=https://YOUR-BACKEND-HOST/api` before building. SPA routing configuration is included for both hosts.
- Do not commit actual `.env` files or credentials. The backend's existing permissive CORS and other production security settings should be reviewed before public launch.

## Verification
Run `npm run build` in frontend and test login, registration, notes, community, events, hackathons, careers, technical issues, interview practice, mock tests and `/placement-calculator` against configured services. The calculator retains the existing API and offline fallback. The dependency cache in the editing environment was incomplete, so a production build and browser/end-to-end testing were not completed here.
