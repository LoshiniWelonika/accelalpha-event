Full-Stack Developer Intern Assessment Report
1. Live Gateways
Frontend Application
https://your-frontend.vercel.app
Backend API Endpoint
https://accelalpha-event-backend.onrender.com/
________________________________________
2. Local Setup Guide
Clone Repository
git clone https://github.com/LoshiniWelonika/accelalpha-event.git
cd accelalpha-event
Frontend Setup
cd frontend
npm install
npm run dev
The frontend will run at:
http://localhost:5173
Backend Setup
cd backend

python -m venv venv
Windows
venv\Scripts\activate
macOS/Linux
source venv/bin/activate
Install dependencies:
pip install -r requirements.txt
Create a .env file and add:
OPENROUTER_API_KEY=your_api_key_here
Run the Flask server:
python app.py
The backend will run at:
http://localhost:5000
________________________________________
3. Content Creation Check
This web system generate the most value when every attendee receives content aligned with their professional goals. Our AI-powered event engagement platform intelligently matches visitors to the most relevant agenda sessions and instantly creates personalized invitation drafts, improving attendee engagement and conversion rates. Built with React, Flask, and LLM automation, the solution helps conference organizers deliver highly targeted event experiences at scale.
________________________________________
4. Prompt Strategy
The LLM prompt is grounded using the contents of agenda.txt, which serves as the single source of truth for all event information. The prompt explicitly instructs the model to use only the matched session details from the agenda and prohibits inventing topics, speakers, schedules, or any information not present in the file. By injecting only the selected session into the prompt context and applying strict output rules, the system minimizes hallucinations and ensures that every generated invitation remains accurate and consistent with the event schedule.
