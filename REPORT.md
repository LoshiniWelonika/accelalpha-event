```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full-Stack Developer Intern Assessment Report</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f7fa;
            margin: 0;
            padding: 40px;
            line-height: 1.7;
            color: #333;
        }

        .container {
            max-width: 1000px;
            margin: auto;
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
        }

        h1 {
            color: #1e3a8a;
            text-align: center;
            margin-bottom: 30px;
        }

        h2 {
            color: #2563eb;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 8px;
            margin-top: 35px;
        }

        .section {
            margin-bottom: 30px;
        }

        code {
            background: #eef2ff;
            padding: 2px 5px;
            border-radius: 4px;
        }

        pre {
            background: #1f2937;
            color: #fff;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
        }

        a {
            color: #2563eb;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        .divider {
            margin: 30px 0;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>

<div class="container">

    <h1>Full-Stack Developer Intern Assessment Report</h1>

    <div class="section">
        <h2>1. Live Gateways</h2>

        <p><strong>Frontend Application</strong></p>
        <p>
            <a href="https://your-frontend.vercel.app" target="_blank">
                https://accelalpha-event-two.vercel.app/
            </a>
        </p>

        <p><strong>Backend API Endpoint</strong></p>
        <p>
            <a href="https://avent-bender.com/" target="_blank">
                https://accelalpha-event-backend.onrender.com/
            </a>
        </p>
    </div>

    <div class="divider"></div>

    <div class="section">
        <h2>2. Local Setup Guide</h2>

        <h3>Clone Repository</h3>

        <pre>
git clone https://github.com/LoshiniWelonika/accelalpha-event.git
cd accelalpha-event
        </pre>

        <h3>Frontend Setup</h3>

        <pre>
cd frontend
npm install
npm run dev
        </pre>

        <p>The frontend will run at:</p>

        <code>http://localhost:5173</code>

        <h3>Backend Setup</h3>

        <pre>
cd backend

python -m venv venv
        </pre>

        <p><strong>Windows</strong></p>

        <pre>
venv\Scripts\activate
        </pre>

        <p><strong>macOS/Linux</strong></p>

        <pre>
source venv/bin/activate
        </pre>

        <p>Install dependencies:</p>

        <pre>
pip install -r requirements.txt
        </pre>

        <p>Create a <code>.env</code> file and add:</p>

        <pre>
OPENROUTER_API_KEY=your_api_key_here
        </pre>

        <p>Run the Flask server:</p>

        <pre>
python app.py
        </pre>

        <p>The backend will run at:</p>

        <code>http://localhost:5000</code>
    </div>

    <div class="divider"></div>

    <div class="section">
        <h2>3. Content Creation Check</h2>

        <p>
            This web system generates the most value when every attendee receives content aligned with their professional goals.
            Our AI-powered event engagement platform intelligently matches visitors to the most relevant agenda sessions and
            instantly creates personalized invitation drafts, improving attendee engagement and conversion rates.
            Built with React, Flask, and LLM automation, the solution helps conference organizers deliver highly targeted
            event experiences at scale.
        </p>
    </div>

    <div class="divider"></div>

    <div class="section">
        <h2>4. Prompt Strategy</h2>

        <p>
            The LLM prompt is grounded using the contents of <code>agenda.txt</code>, which serves as the single source
            of truth for all event information. The prompt explicitly instructs the model to use only the matched session
            details from the agenda and prohibits inventing topics, speakers, schedules, or any information not present
            in the file. By injecting only the selected session into the prompt context and applying strict output rules,
            the system minimizes hallucinations and ensures that every generated invitation remains accurate and consistent
            with the event schedule.
        </p>
    </div>

</div>

</body>
</html>
```
