from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow your React frontend to access the server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Full app state, divided by sections
app_state = {
    "ChooseApplication": {
        "selectedOption": None,  # stores the selected radio button
    },
    "HODSystem": {
        "pressedButton": None,
        "module": None,
        "model": None,
        "vertical": False,
        "branch": 1
    },
    "PathogenReduction": {
        "tableData": [],
    },
    # Add other sections for other components
}

# Model for updates from frontend
class UpdateRequest(BaseModel):
    section: str       # e.g., "ChooseApplication"
    action: str        # e.g., "selectOption"
    payload: dict      # actual data to store

@app.get("/state")
async def get_state():
    """Return the full app state"""
    return app_state

@app.post("/update")
async def update_state(update: UpdateRequest):
    """Update a section of the state"""
    section = update.section
    if section not in app_state:
        return {"status": "error", "message": f"Unknown section {section}"}

    # merge/update the payload into the section
    app_state[section].update(update.payload)

    return {"status": "ok", "state": app_state}
