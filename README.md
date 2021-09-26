# Prerequisites

- Nodejs
- Python
- Flask (`pip install Flask`)
- flask_cors (`pip install flask-cors`)

# How to Use

- Clone this repository
- Navigate to the root folder (text-fsm-parser) in the terminal.
- execute `npm i`
- execute `npm start`. The web page should open in the browser at `http://localhost:3000/`.
- Open another terminal window.
- Navigate to `text-fsm-parser/api` folder in the newly opened terminal window.
- execute `python api.py`. This will start the api.
- To test, open any browser and navigate to `http://localhost:5000/`. The web page should say `API running at port number 5000`
- Navigate to `http://localhost:3000/`. The `Status` field should say `Data fetched successfully`.
- Enter any value in `Output` and `Template` sections and the `Result` section will display the concatenated value of the inputs.
